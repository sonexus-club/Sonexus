const assert = require("node:assert/strict");
const { generateKeyPairSync } = require("node:crypto");
const test = require("node:test");

const {
  ConfigurationError,
  DEFAULTS,
  getPublicConfigSummary,
  loadConfig
} = require("./config");

const { publicKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
const RSA_PUBLIC_KEY = publicKey.export({ type: "spki", format: "pem" });

function validEnv(overrides = {}) {
  return {
    SEEDER_INTERNAL_URL: "http://docker-hds-webtorrent-seeder:3000/",
    SEEDER_INTERNAL_TOKEN: "test-internal-token",
    PLAYBACK_JWT_PUBLIC_KEY: RSA_PUBLIC_KEY,
    PLAYBACK_JWT_ISSUER: "https://sonexus.club",
    CORS_ALLOWED_ORIGINS: "https://sonexus.club, https://player.sonexus.club",
    ...overrides
  };
}

test("loads required values and applies approved defaults", () => {
  const config = loadConfig(validEnv());

  assert.equal(config.seeder.internalUrl, "http://docker-hds-webtorrent-seeder:3000");
  assert.equal(config.seeder.requestTimeoutMs, DEFAULTS.seederRequestTimeoutMs);
  assert.equal(config.playbackJwt.audience, DEFAULTS.playbackJwtAudience);
  assert.deepEqual(config.cors.allowedOrigins, [
    "https://sonexus.club",
    "https://player.sonexus.club"
  ]);
  assert.equal(config.rateLimit.tokenPerMinute, DEFAULTS.tokenRateLimitPerMinute);
  assert.equal(config.rateLimit.ipPerMinute, DEFAULTS.ipRateLimitPerMinute);
});

test("parses configured numeric values as positive integers", () => {
  const config = loadConfig(validEnv({
    SEEDER_REQUEST_TIMEOUT_MS: "7000",
    TOKEN_RATE_LIMIT_PER_MINUTE: "20",
    IP_RATE_LIMIT_PER_MINUTE: "240"
  }));

  assert.equal(config.seeder.requestTimeoutMs, 7000);
  assert.equal(config.rateLimit.tokenPerMinute, 20);
  assert.equal(config.rateLimit.ipPerMinute, 240);
});

test("accepts an escaped multiline RSA public key", () => {
  const escapedKey = RSA_PUBLIC_KEY.replace(/\n/g, "\\n");
  const config = loadConfig(validEnv({ PLAYBACK_JWT_PUBLIC_KEY: escapedKey }));

  assert.match(config.playbackJwt.publicKey, /BEGIN PUBLIC KEY/);
  assert.ok(config.playbackJwt.publicKey.includes("\n"));
});

for (const name of [
  "SEEDER_INTERNAL_URL",
  "SEEDER_INTERNAL_TOKEN",
  "PLAYBACK_JWT_PUBLIC_KEY",
  "PLAYBACK_JWT_ISSUER",
  "CORS_ALLOWED_ORIGINS"
]) {
  test(`fails fast when ${name} is missing`, () => {
    const env = validEnv();
    delete env[name];

    assert.throws(
      () => loadConfig(env),
      error => error instanceof ConfigurationError && error.message === `${name} is required`
    );
  });
}

for (const [name, value] of [
  ["SEEDER_REQUEST_TIMEOUT_MS", "0"],
  ["SEEDER_REQUEST_TIMEOUT_MS", "1.5"],
  ["TOKEN_RATE_LIMIT_PER_MINUTE", "not-a-number"],
  ["IP_RATE_LIMIT_PER_MINUTE", "-1"]
]) {
  test(`rejects invalid ${name}`, () => {
    assert.throws(
      () => loadConfig(validEnv({ [name]: value })),
      error => (
        error instanceof ConfigurationError &&
        error.message === `${name} must be a positive integer`
      )
    );
  });
}

test("rejects an invalid Seeder URL", () => {
  assert.throws(
    () => loadConfig(validEnv({ SEEDER_INTERNAL_URL: "docker-seeder:3000" })),
    /SEEDER_INTERNAL_URL must be a valid HTTP\(S\) URL/
  );
});

test("rejects CORS entries that are not origins", () => {
  assert.throws(
    () => loadConfig(validEnv({ CORS_ALLOWED_ORIGINS: "https://sonexus.club/path" })),
    /CORS_ALLOWED_ORIGINS entries must contain origins only/
  );
});

test("rejects a non-RSA playback public key", () => {
  const { publicKey: ecPublicKey } = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
  const ecPem = ecPublicKey.export({ type: "spki", format: "pem" });

  assert.throws(
    () => loadConfig(validEnv({ PLAYBACK_JWT_PUBLIC_KEY: ecPem })),
    /PLAYBACK_JWT_PUBLIC_KEY must be a valid RSA public key/
  );
});

test("public startup summary excludes secrets and key material", () => {
  const config = loadConfig(validEnv());
  const serialized = JSON.stringify(getPublicConfigSummary(config));

  assert.ok(!serialized.includes(config.seeder.internalToken));
  assert.ok(!serialized.includes("BEGIN PUBLIC KEY"));
});
