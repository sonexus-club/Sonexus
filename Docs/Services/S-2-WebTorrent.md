# S-2 WebTorrent

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-2 WebTorrent provides peer-to-peer audio delivery for SoNexus after playback startup.

## Responsibilities

- Seed and deliver album and track data through WebTorrent.
- Maintain peer connections required for browser-compatible P2P delivery.
- Expose service health and control capabilities defined by approved ADRs.
- Reduce dependence on centralized audio delivery.

## Boundaries

The service does not:

- define S-11 Stream Controller behavior;
- replace IPFS startup delivery;
- own metadata stored in PostgreSQL;
- define Gateway Local application logic.

## Interfaces

- S-1 Gateway Local.
- S-11 Stream Controller.
- S-8 Storage.

## Current State

- Service identifier approved: S-2.
- Minimal Node.js container code exists in `HDS/WebTorrent/`.
- Full seeding logic and control API are not implemented.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Seeding lifecycle.
- Tracker configuration.
- Peer and session limits.
- Health, logging and operational controls.
