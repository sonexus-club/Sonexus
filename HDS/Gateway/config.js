const { createPublicKey } = require("node:crypto");

const DEFAULTS = Object.freeze({
  playbackJwtAudience: "sonexus-gateway",
  seederRequestTimeoutMs: 5000,
  tokenRateLimitPerMinute: 10,
  ipRateLimitPerMinute: 120
});

class ConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigurationError";
  }
}

function readRequired(env, name) {
  const value = env[name];

  if (typeof value !== "string" || value.trim() === "") {
    throw new ConfigurationError(`${name} is required`);
  }

  return value.trim();
}

function parseHttpUrl(value, name, { originOnly = false } = {}) {
  let url;

  try {
    url = new URL(value);
  } catch {
    throw new ConfigurationError(`${name} must be a valid HTTP(S) URL`);
  }

  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    throw new ConfigurationError(`${name} must be a valid HTTP(S) URL`);
  }

  if (url.search || url.hash) {
    throw new ConfigurationError(`${name} must not contain query parameters or a fragment`);
  }

  if (originOnly && url.pathname !== "/") {
    throw new ConfigurationError(`${name} entries must contain origins only`);
  }

  if (originOnly) {
    return url.origin;
  }

  const path = url.pathname.replace(/\/+$/, "");
  return `${url.origin}${path}`;
}

function parsePositiveInteger(value, name, defaultValue) {
  const resolved = value === undefined || value === "" ? defaultValue : Number(value);

  if (!Number.isSafeInteger(resolved) || resolved <= 0) {
    throw new ConfigurationError(`${name} must be a positive integer`);
  }

  return resolved;
}

function parsePublicKey(value) {
  const normalized = value.replace(/\\n/g, "\n").trim();
  let key;

  try {
    key = createPublicKey(normalized);
  } catch {
    throw new ConfigurationError("PLAYBACK_JWT_PUBLIC_KEY must be a valid RSA public key");
  }

  if (key.asymmetricKeyType !== "rsa") {
    throw new ConfigurationError("PLAYBACK_JWT_PUBLIC_KEY must be a valid RSA public key");
  }

  return normalized;
}

function parseAllowedOrigins(value) {
  const origins = value
    .split(",")
    .map(origin => origin.trim())
    .filter(Boolean)
    .map(origin => parseHttpUrl(origin, "CORS_ALLOWED_ORIGINS", { originOnly: true }));

  if (origins.length === 0) {
    throw new ConfigurationError("CORS_ALLOWED_ORIGINS must contain at least one origin");
  }

  return Object.freeze([...new Set(origins)]);
}

function loadConfig(env = process.env) {
  const config = {
    seeder: Object.freeze({
      internalUrl: parseHttpUrl(
        readRequired(env, "SEEDER_INTERNAL_URL"),
        "SEEDER_INTERNAL_URL"
      ),
      internalToken: readRequired(env, "SEEDER_INTERNAL_TOKEN"),
      requestTimeoutMs: parsePositiveInteger(
        env.SEEDER_REQUEST_TIMEOUT_MS,
        "SEEDER_REQUEST_TIMEOUT_MS",
        DEFAULTS.seederRequestTimeoutMs
      )
    }),
    playbackJwt: Object.freeze({
      publicKey: parsePublicKey(readRequired(env, "PLAYBACK_JWT_PUBLIC_KEY")),
      issuer: readRequired(env, "PLAYBACK_JWT_ISSUER"),
      audience: env.PLAYBACK_JWT_AUDIENCE?.trim() || DEFAULTS.playbackJwtAudience
    }),
    cors: Object.freeze({
      allowedOrigins: parseAllowedOrigins(readRequired(env, "CORS_ALLOWED_ORIGINS"))
    }),
    rateLimit: Object.freeze({
      tokenPerMinute: parsePositiveInteger(
        env.TOKEN_RATE_LIMIT_PER_MINUTE,
        "TOKEN_RATE_LIMIT_PER_MINUTE",
        DEFAULTS.tokenRateLimitPerMinute
      ),
      ipPerMinute: parsePositiveInteger(
        env.IP_RATE_LIMIT_PER_MINUTE,
        "IP_RATE_LIMIT_PER_MINUTE",
        DEFAULTS.ipRateLimitPerMinute
      )
    })
  };

  return Object.freeze(config);
}

function getPublicConfigSummary(config) {
  return Object.freeze({
    seederInternalUrl: config.seeder.internalUrl,
    seederRequestTimeoutMs: config.seeder.requestTimeoutMs,
    playbackJwtIssuer: config.playbackJwt.issuer,
    playbackJwtAudience: config.playbackJwt.audience,
    corsAllowedOrigins: config.cors.allowedOrigins,
    tokenRateLimitPerMinute: config.rateLimit.tokenPerMinute,
    ipRateLimitPerMinute: config.rateLimit.ipPerMinute
  });
}

module.exports = {
  ConfigurationError,
  DEFAULTS,
  getPublicConfigSummary,
  loadConfig
};
