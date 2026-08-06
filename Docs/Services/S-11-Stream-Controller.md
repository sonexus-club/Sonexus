# S-11 BR Stream Controller

Status: Check

Progress: Testing

Owner: SoNexus Project

Source of Truth: GitHub

Service Type:
BR — Browser Runtime

Docker Container:
—

Reason:
Implemented as JavaScript in the user's browser, not as an HDS or VPS service.

## Primary ADR

ADR-011 — Stream Controller Architecture

## Purpose

S-11 BR Stream Controller is the browser-side transport controller for SoNexus playback.

It coordinates universal media URL parsing, HDS Gateway communication, IPFS startup, WebTorrent/WebRTC delivery, quality selection and playback capability management.

## Universal Media URL Contract

S-11 processes the canonical URL defined by ADR-004:

```text
https://<gateway>/<TrackCID>#h=<AlbumInfoHash>&t=<TrackIndex>&q=<Quality>
```

- `TrackCID` identifies the selected HTTP/IPFS startup source.
- `h` identifies the album torrent.
- `t` identifies the track inside the album torrent.
- `q` identifies the requested quality.
- `h`, `t` and `q` remain in the browser because they are located after `#`.
- The legacy `/s` and `/d` media URL variants are not used.

The universal media URL is not an S-1 command route. After S-11 parses and validates the media URL, it may send a separate control request to S-1 HDS Gateway Express.

## Responsibilities

- Parse the universal media URL through S-11.1 BR Universal URL Parser.
- Resolve the track index inside the approved URL contract.
- Communicate with S-1 HDS Gateway Express for protected coordination.
- Request activation of the specific album torrent when HDS bootstrap seeding is required.
- Coordinate IPFS as the initial HTTP/WebSeed source.
- Coordinate browser-to-browser WebTorrent/WebRTC delivery.
- Manage playback quality selection.
- Integrate with the Service Worker where required.
- Expose Bit-Perfect capability state to the playback UI.

## Boundaries

The service does not:

- replace Plyr or the HTML5 playback UI;
- run on shared hosting as server-side code;
- run on VPS in the current runtime;
- redefine S-1 HDS Gateway Express application logic;
- store catalog metadata;
- seed server-side torrents;
- perform server-side transcoding.

## Parent-Child Module Registry

- S-11.1 — BR Universal URL Parser
- S-11.2 — Gateway Client
- S-11.3 — WebTorrent Client
- S-11.4 — Quality Manager
- S-11.5 — Service Worker
- S-11.6 — Bit-Perfect Capability
- S-11.7 — Track Index Resolver

The names and individual states of S-11.2 through S-11.7 remain subject to separate verification.

## Confirmed Runtime Flow

```text
WordPress / Musicon on shared hosting
      ↓
JavaScript loaded through WPCode
      ↓
S-11 BR Stream Controller in the user's browser
      ↓
S-1 HDS Gateway Express
      ↓
S-3 HDS WebTorrent Seeder
      ↓
Specific album torrent seeding
```

The current implementation is in testing. Packaging the same S-11 implementation as a WordPress Plugin is planned and does not create a new service identifier.

## Current State

- Service identifier approved: S-11.
- Execution zone approved: BR — Browser Runtime.
- Current name approved: S-11 BR Stream Controller.
- JavaScript implementation through WPCode exists and is in testing.
- S-11.1 BR Universal URL Parser exists and is in testing.
- The end-to-end request from S-11 through S-1 to S-3 has been confirmed to start the requested album torrent.
- The exact S-1 command route and request/response contract are not present in the published Gateway source baseline and remain a synchronization task.
- VPS does not participate in the current runtime.

## Related Documents

- `../Project/Project-Architecture.md`
- `../Project/Project-Methodology.md`
- `../ADR/ADR-000-Status.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-004-Universal-URL-Standard.md`
