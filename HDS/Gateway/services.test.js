const assert = require("node:assert/strict");
const http = require("node:http");
const test = require("node:test");

const { checkWebTorrent } = require("./services");

test("WebTorrent health probe uses the centralized Seeder configuration", async t => {
  const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end();
  });

  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));

  const { port } = server.address();
  const status = await checkWebTorrent({
    internalUrl: `http://127.0.0.1:${port}`,
    requestTimeoutMs: 1000
  });

  assert.equal(status, "online");
});
