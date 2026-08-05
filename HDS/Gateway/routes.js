const express = require("express");
const axios = require("axios");

const {
    checkWebTorrent,
    checkIPFS,
    checkPostgreSQL
} = require("./services");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const HDS_WEBTORRENT =
    "http://docker-hds-webtorrent-seeder:3000";

/*
|--------------------------------------------------------------------------
| Health
|--------------------------------------------------------------------------
*/

router.get("/health", (req, res) => {

    res.json({
        service: "HDS Gateway Express",
        status: "healthy",
        version: "1.1.0"
    });

});

/*
|--------------------------------------------------------------------------
| Services
|--------------------------------------------------------------------------
*/

router.get("/services", async (req, res) => {

    const [webtorrent, ipfs, postgresql] = await Promise.all([
        checkWebTorrent(),
        checkIPFS(),
        checkPostgreSQL()
    ]);

    res.json({

        services: [

            {
                name: "HDS Gateway Express",
                status: "online"
            },

            {
                name: "HDS WebTorrent Seeder",
                status: webtorrent
            },

            {
                name: "HDS IPFS Source Kubo",
                status: ipfs
            },

            {
                name: "HDS Metadata PostgreSQL",
                status: postgresql
            }

        ]

    });

});

/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
*/

router.get("/dashboard", async (req, res) => {

    const [webtorrent, ipfs, postgresql] = await Promise.all([
        checkWebTorrent(),
        checkIPFS(),
        checkPostgreSQL()
    ]);

    res.json({

        services: {

            gateway: "online",
            webtorrent,
            ipfs,
            postgresql

        },

        system: {

            timestamp: new Date().toISOString()

        }

    });

});

/*
|--------------------------------------------------------------------------
| Torrents
|--------------------------------------------------------------------------
*/

router.get("/torrents", async (req, res) => {

    try {

        const response = await axios.get(

            `${HDS_WEBTORRENT}/torrents`,

            {
                timeout: 3000
            }

        );

        const torrents = response.data.torrents.map(torrent => ({

            source: "hds",

            id: torrent.id,

            name: torrent.name,

            infoHash: torrent.infoHash,

            status: torrent.status,

            rank: torrent.rank,

            progress: torrent.progress,

            peers: torrent.peers,

            downloadSpeed: torrent.downloadSpeed,

            uploadSpeed: torrent.uploadSpeed,

            listeners: torrent.listeners,

            streams: torrent.streams,

            piecesServed: torrent.piecesServed,

            startedAt: torrent.startedAt,

            lastActivity: torrent.lastActivity

        }));

        res.json({

            source: "hds",

            count: torrents.length,

            torrents

        });

    }

    catch (error) {

        console.error(error.message);

        res.status(502).json({

            error: "HDS WebTorrent Seeder unavailable",

            source: "hds"

        });

    }

});

module.exports = router;
