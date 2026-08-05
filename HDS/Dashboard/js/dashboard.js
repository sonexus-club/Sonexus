"use strict";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const API = "/api/v1";

/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/

let torrents = [];
let selectedTorrent = null;

/*
|--------------------------------------------------------------------------
| Start
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {

    refreshDashboard();

    setInterval(refreshDashboard, 5000);

});

/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
*/

async function refreshDashboard() {

    await loadServices();

    await loadTorrents();

}

/*
|--------------------------------------------------------------------------
| Services
|--------------------------------------------------------------------------
*/

async function loadServices() {

    try {

        const response = await fetch(`${API}/dashboard`);

        const data = await response.json();

        updateService(
            "gateway",
            data.services.gateway
        );

        updateService(
            "webtorrent",
            data.services.webtorrent
        );

        updateService(
            "ipfs",
            data.services.ipfs
        );

        updateService(
            "postgresql",
            data.services.postgresql
        );

    }

    catch (error) {

        console.error(error);

    }

}

function updateService(name, status) {

    const dot =
        document.getElementById(name + "-status");

    const text =
        document.getElementById(name + "-text");

    if (!dot || !text) {

        return;

    }

    dot.classList.remove(
        "online",
        "offline",
        "warning"
    );

    switch (status) {

        case "healthy":

        case "online":

            dot.classList.add("online");

            text.textContent = "Online";

            break;

        case "warning":

            dot.classList.add("warning");

            text.textContent = "Warning";

            break;

        default:

            dot.classList.add("offline");

            text.textContent = "Offline";

    }

}

/*
|--------------------------------------------------------------------------
| Torrents
|--------------------------------------------------------------------------
*/

async function loadTorrents() {

    try {

        const response =
            await fetch(`${API}/torrents`);

        const data =
            await response.json();

        torrents = data.torrents || [];

        renderTorrentTable();

        if (
            selectedTorrent === null &&
            torrents.length > 0
        ) {

            selectTorrent(0);

        }

    }

    catch (error) {

        console.error(error);

    }

}

function renderTorrentTable() {

    const tbody =
        document.getElementById("torrent-list");

    tbody.innerHTML = "";

    if (torrents.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align:center">
                    No torrents
                </td>
            </tr>
        `;

        return;

    }

    torrents.forEach((torrent, index) => {

        const row =
            document.createElement("tr");

        row.innerHTML = `

            <td>${torrent.name}</td>

            <td>${torrent.status}</td>

            <td>${torrent.progress}%</td>

            <td>${torrent.peers}</td>

            <td>${formatSpeed(torrent.downloadSpeed)}</td>

            <td>${formatSpeed(torrent.uploadSpeed)}</td>

            <td>${torrent.source}</td>

        `;

        row.onclick = () => {

            selectTorrent(index);

        };

        tbody.appendChild(row);

    });

}

/*
|--------------------------------------------------------------------------
| Selected Torrent
|--------------------------------------------------------------------------
*/

function selectTorrent(index) {

    selectedTorrent = index;

    renderSelectedTorrent();

}

function renderSelectedTorrent() {

    if (
        selectedTorrent === null
    ) {

        return;

    }

    const t =
        torrents[selectedTorrent];

    if (!t) {

        return;

    }

    setValue(
        "selected-name",
        t.name
    );

    setValue(
        "selected-infohash",
        t.infoHash
    );

    setValue(
        "selected-status",
        t.status
    );

    setValue(
        "selected-rank",
        t.rank
    );

    setValue(
        "selected-source",
        t.source
    );

    setValue(
        "selected-peers",
        t.peers
    );

    setValue(
        "selected-progress",
        t.progress + "%"
    );

    setValue(
        "selected-download",
        formatSpeed(t.downloadSpeed)
    );

    setValue(
        "selected-upload",
        formatSpeed(t.uploadSpeed)
    );

    setValue(
        "selected-listeners",
        t.listeners
    );

    setValue(
        "selected-streams",
        t.streams
    );

    setValue(
        "selected-pieces",
        t.piecesServed
    );

    setValue(
        "selected-started",
        t.startedAt
    );

    setValue(
        "selected-lastactivity",
        t.lastActivity
    );

}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function setValue(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent = value;

    }

}

function formatSpeed(speed) {

    if (!speed) {

        return "0 KB/s";

    }

    return (speed / 1024).toFixed(1) + " KB/s";

}
