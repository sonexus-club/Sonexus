# S-6 Player (Legacy Reserved Identity)

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

## Legacy Status

S-6 Player is a preserved historical service identity.

It is replaced in the active architecture by `S-11 — Stream Controller`.

The identifier `S-6` remains reserved and must not be reused.

## Purpose

S-6 Player is the client-side playback service integrated with WordPress, Musicon and Plyr.

## Responsibilities

- Parse the universal stream URL.
- Select automatic or manual quality.
- Start playback through IPFS.
- Coordinate the transition to WebTorrent delivery.
- Present playback state and Bit-Perfect indication.

## Boundaries

The service does not:

- store catalog metadata;
- seed server-side torrents;
- transcode audio;
- replace Gateway application logic.

## Interfaces

- S-1 Gateway.
- S-2 WebTorrent.
- S-3 IPFS.
- WordPress, Musicon and Plyr.

## Current State

- Service identifier published historically as S-6.
- Active architecture now uses S-11 — Stream Controller.
- Universal URL and quality model are approved.
- Prototype interception and WebTorrent tests exist outside a finalized service implementation.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-004-Universal-URL-Standard.md`

## Open Decisions

- Final source-switching mechanism.
- Browser compatibility and fallback behavior.
- Player API contract.
- Packaging as a WordPress plugin.

## Migration Note

Use this document only as the historical record for the legacy S-6 identity.

All active architecture, service planning and new task traceability must use `S-11 — Stream Controller`.
