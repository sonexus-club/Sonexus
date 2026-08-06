# Changelog

## Unreleased

- Consolidated the working source baseline into a fresh GitHub-based copy.
- Preserved the current runtime architecture while separating source from runtime data.
- Moved Gateway, Dashboard, WebTorrent Seeder, IPFS compose, and PostgreSQL compose into the repository baseline.
- Completed repository consolidation through PR #1 on 2026-08-06.
- Published the Gateway, Dashboard, WebTorrent Seeder, IPFS and PostgreSQL runtime source baseline.
- Added real PostgreSQL health verification using `SELECT 1`.
- Replaced Dashboard torrent-table HTML injection with safe DOM text assignment.
- Recorded the Linear workflow migration and the post-consolidation project state.
- Published the verified HDS Docker network topology using `docker-network-ipfs`, `docker-network-webtorrent` and `docker-network-postgresql`.
- Restored Trello as the active engineering workflow and required Trello plus GitHub synchronization at session closure.
