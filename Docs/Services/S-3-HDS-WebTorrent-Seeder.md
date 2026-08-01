# S-3 HDS WebTorrent Seeder

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Docker

Docker Container:
docker-hds-webtorrent-seeder

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
- S-11 Stream Controller.
- S-4 HDS Storage ZFS.

## Current State

- Service identifier approved: S-3.
- Approved service naming: `HDS WebTorrent Seeder`.
- Approved documentation filename: `S-3-HDS-WebTorrent-Seeder.md`.
- Approved service directory name: `hds-webtorrent-seeder`.
- Approved Docker Compose project: `hds-webtorrent-seeder`.
- Approved Docker Compose service: `hds-webtorrent-seeder`.
- Approved Docker image: `sonexus/hds-webtorrent-seeder:latest`.
- Approved Docker container: `docker-hds-webtorrent-seeder`.
- Minimal Node.js container code exists in `HDS/WebTorrent/`.
- Full demand-based seeding lifecycle and control API are not yet implemented.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- On-demand seeding lifecycle.
- Inactivity timeout before pause.
- Tracker configuration.
- Peer and session limits.
- Health, logging and operational controls.
