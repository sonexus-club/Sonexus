/**
 * ==========================================
 * SoNexus
 * Service : HDS WebTorrent Seeder
 * File    : server.js
 * Version : 2.0.0
 * Status  : Development
 * ==========================================
 */

import express from "express";
import WebTorrent from "webtorrent";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;
const DATA_ROOT = "/data";
const TEST_MODE = process.env.TEST_MODE === "true";

app.use(express.json());

const client = new WebTorrent({
  torrentPort: 40245
});

const trackerOpts = {
  announce: [
    "wss://tracker.openwebtorrent.com",
    "wss://tracker.webtorrent.dev",
    "wss://tracker.btorrent.xyz"
  ]
};

/*
|--------------------------------------------------------------------------
| Torrent Catalog
|--------------------------------------------------------------------------
|
| Пока используется один тестовый альбом.
| Далее каталог будет загружаться автоматически.
|
*/

const defaultTorrentCatalog = [
  {
    id: 1,
    rank: 2,
    path: "/data/Test Artist/Test Album"
  }
];

/*
|--------------------------------------------------------------------------
| Active Torrents
|--------------------------------------------------------------------------
*/

const torrents = [];

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function now() {
  return new Date().toISOString();
}

function buildTorrentCatalog() {
  if (!TEST_MODE) {
    return defaultTorrentCatalog;
  }

  let id = 1;
  const catalog = [];

  if (!fs.existsSync(DATA_ROOT)) {
    return catalog;
  }

  const artists = fs.readdirSync(DATA_ROOT, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b));

  for (const artist of artists) {
    const artistPath = path.join(DATA_ROOT, artist);
    const albums = fs.readdirSync(artistPath, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .sort((a, b) => a.localeCompare(b));

    for (const album of albums) {
      catalog.push({
        id: id++,
        rank: 2,
        path: path.join(DATA_ROOT, artist, album)
      });
    }
  }

  return catalog;
}

function getTorrentInfo(item) {

  const t = item.torrent;

  return {
    id: item.id,

    name: item.name,
    infoHash: item.infoHash,

    status: item.status,
    rank: item.rank,

    progress: Math.round((t.progress || 0) * 100),

    peers: t.numPeers || 0,

    downloadSpeed: t.downloadSpeed || 0,
    uploadSpeed: t.uploadSpeed || 0,

    listeners: item.listeners,
    streams: item.streams,

    piecesServed: item.piecesServed,

    startedAt: item.startedAt,
    lastActivity: item.lastActivity
  };

}

/*
|--------------------------------------------------------------------------
| Torrent Manager
|--------------------------------------------------------------------------
*/

function registerTorrent(catalogItem, torrent) {

  const item = {
    id: catalogItem.id,

    torrent,

    name: torrent.name,
    infoHash: torrent.infoHash,

    rank: catalogItem.rank,

    status: "seeding",

    listeners: 0,
    streams: 0,

    piecesServed: 0,

    startedAt: now(),
    lastActivity: now()
  };

  torrents.push(item);

  console.log("========================================");
  console.log("Torrent started");
  console.log("Name      :", item.name);
  console.log("InfoHash  :", item.infoHash);
  console.log("Rank      :", item.rank);
  console.log("========================================");

  torrent.on("wire", () => {
    item.lastActivity = now();
  });

  torrent.on("upload", () => {
    item.lastActivity = now();
  });

  torrent.on("download", () => {
    item.lastActivity = now();
  });

  torrent.on("error", (err) => {
    item.status = "error";
    console.error(err.message);
  });

}

function seedCatalog() {

  const torrentCatalog = buildTorrentCatalog();

  console.log("========================================");
  console.log("Torrent catalog mode:", TEST_MODE ? "TEST_MODE" : "DEFAULT");
  console.log("Catalog size       :", torrentCatalog.length);
  console.log("========================================");

  for (const catalogItem of torrentCatalog) {

    client.seed(
      catalogItem.path,
      trackerOpts,
      (torrent) => registerTorrent(catalogItem, torrent)
    );

  }

}

seedCatalog();

/*
|--------------------------------------------------------------------------
| REST API
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {

  res.json({
    service: "SoNexus WebTorrent Seeder",
    status: "running",
    torrents: torrents.length,
    timestamp: now()
  });

});

app.get("/health", (req, res) => {

  res.json({
    service: "SoNexus WebTorrent Seeder",
    status: "healthy",
    timestamp: now()
  });

});

app.get("/torrents", (req, res) => {

  res.json({
    count: torrents.length,
    torrents: torrents.map(getTorrentInfo)
  });

});

app.get("/torrents/:infoHash", (req, res) => {

  const torrent = torrents.find(
    t => t.infoHash === req.params.infoHash
  );

  if (!torrent) {
    return res.status(404).json({
      error: "Torrent not found"
    });
  }

  res.json(getTorrentInfo(torrent));

});

/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {

  console.log("");
  console.log("========================================");
  console.log("SoNexus WebTorrent Seeder");
  console.log("Port :", PORT);
  console.log("API  : http://localhost:3000");
  console.log("========================================");

});
