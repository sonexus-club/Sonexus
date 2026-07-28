# S-6 Player

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

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

- Service identifier approved: S-6.
- Universal URL and quality model are approved.
- Prototype interception and WebTorrent tests exist outside a finalized service implementation.

## Related Documents

- `../Project/Project-Architecture.md`
- `Docs/ADR/ADR-001-WebTorrent.md`
- `Docs/ADR/ADR-002-IPFS-as-WebSeed.md`
- `Docs/ADR/ADR-004-Universal-URL-Standard.md`

## Open Decisions

- Final source-switching mechanism.
- Browser compatibility and fallback behavior.
- Player API contract.
- Packaging as a WordPress plugin.
