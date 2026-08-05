const axios = require("axios");

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

module.exports = {
  checkWebTorrent,
  checkIPFS
};
