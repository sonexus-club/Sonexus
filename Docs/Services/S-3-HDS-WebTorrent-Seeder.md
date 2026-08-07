# S-3 HDS WebTorrent Seeder

Status: Draft
Progress: In Progress
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Docker

Docker Container:
docker-hds-webtorrent-seeder

Docker Network:
docker-network-webtorrent

## Purpose

S-3 HDS WebTorrent Seeder provides HDS-side bootstrap and backup seeding for SoNexus after playback startup.

## Responsibilities

- Seed and deliver album and track data through WebTorrent when HDS support is required.
- Maintain peer connections required for browser-compatible P2P delivery.
- Start seeding on demand when a protected request requires bootstrap or recovery support.
- Pause or stop active seeding after the approved inactivity window.
- Expose service health and control capabilities defined by approved ADRs.
- Reduce dependence on centralized audio delivery.

## Boundaries

The service does not:

- define S-11 Stream Controller behavior;
- replace IPFS startup delivery;
- own metadata stored in PostgreSQL;
- define S-1 HDS Gateway Express application logic.

## Interfaces

- S-1 HDS Gateway Express.
- S-4 HDS Storage ZFS.

S-11 BR Stream Controller does not call Seeder directly. All Command Layer requests pass through S-1 HDS Gateway Express.

## Command Layer Lifecycle

Internal routes:

- `POST /internal/v1/torrents/{infoHash}/activate`
- `GET /internal/v1/torrents/{infoHash}`

Both routes require `SEEDER_INTERNAL_TOKEN` and are available only on `docker-network-webtorrent`.

Scanning `/data` builds the known torrent catalog without starting WebTorrent sessions. Known torrents start as `inactive`. Activation creates or extends one session; automatic cleanup removes the session after 900 seconds of inactivity while preserving the known catalog entry.

Lifecycle operations are serialized per `infoHash`. `expiresAt` is rechecked immediately before cleanup. Failed cleanup is retried after 60 seconds.

`TEST_MODE` does not imply autostart. `AUTO_SEED_ON_START` defaults to `false` and exists only for explicit testing.

## Current State

- Service identifier approved: S-3.
- Approved service naming: `HDS WebTorrent Seeder`.
- Approved documentation filename: `S-3-HDS-WebTorrent-Seeder.md`.
- Approved service directory name: `hds-webtorrent-seeder`.
- Approved Docker Compose project: `hds-webtorrent-seeder`.
- Approved Docker Compose service: `hds-webtorrent-seeder`.
- Approved Docker image: `sonexus/hds-webtorrent-seeder:latest`.
- Approved Docker container: `docker-hds-webtorrent-seeder`.
- Approved external network: `docker-network-webtorrent`.
- Node.js container implementation exists in `HDS/WebTorrent/`.
- TEST_MODE album discovery is completed and was tested.
- Read-only health and torrent API exists.
- Gateway and Dashboard integration was verified.
- On-demand activation and automatic idle cleanup are approved in final ADR-005 but not implemented.
- Implementation tasks and acceptance tests must be approved before the Seeder runtime is changed.
- The current implementation must be changed so discovered torrents remain inactive until activation.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-003-Docker-Platform.md`
- `../ADR/ADR-005-Gateway-Architecture.md`

## Open Decisions

- Tracker configuration.
- Peer and session limits.
- Operational controls beyond Command Layer MVP.
