const axios = require("axios");
const { Client } = require("pg");

async function checkWebTorrent() {
  try {
    const response = await axios.get("http://docker-hds-webtorrent-seeder:3000/", {
      timeout: 2000
    });

    return response.status === 200 ? "online" : "offline";
  } catch {
    return "offline";
  }
}

async function checkIPFS() {
  try {
    const response = await axios.post(
      "http://docker-hds-ipfs-source-kubo:5001/api/v0/version",
      {},
      {
        timeout: 2000
      }
    );

    return response.status === 200 ? "online" : "offline";
  } catch {
    return "offline";
  }
}

async function checkPostgreSQL() {
  const client = new Client({
    host: process.env.POSTGRES_HOST || "docker-hds-metadata-postgresql",
    port: Number(process.env.POSTGRES_PORT || 5432),
    database: process.env.POSTGRES_DB || "sonexus",
    user: process.env.POSTGRES_USER || "sonexus",
    password: process.env.POSTGRES_PASSWORD,
    connectionTimeoutMillis: 2000
  });

  try {
    await client.connect();
    await client.query("SELECT 1");
    return "online";
  } catch {
    return "offline";
  } finally {
    await client.end().catch(() => {});
  }
}

module.exports = {
  checkWebTorrent,
  checkIPFS,
  checkPostgreSQL
};
