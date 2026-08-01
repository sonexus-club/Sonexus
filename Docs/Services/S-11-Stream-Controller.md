# S-11 Stream Controller

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Browser Runtime

Docker Container:
—

Reason:
Implemented in the browser runtime, not as an HDS Docker or host service.

## Primary ADR

ADR-011 — Stream Controller Architecture

## Purpose

S-11 Stream Controller is the browser-side transport controller for SoNexus playback.

It coordinates universal URL parsing, Gateway communication, IPFS startup, WebTorrent/WebRTC delivery, quality selection and playback capability management.

## Responsibilities

- Parse the universal stream URL.
- Resolve the track index inside the approved URL contract.
- Communicate with S-1 HDS Gateway Express for protected metadata and coordination.
- Coordinate IPFS as WebSeed and initial playback source.
- Coordinate browser-to-browser WebTorrent/WebRTC delivery.
- Manage playback quality selection.
- Integrate with the Service Worker where required.
- Expose Bit-Perfect capability state to the playback UI.

## Boundaries

The service does not:

- replace the third-party playback UI library;
- redefine S-1 HDS Gateway Express application logic;
- store catalog metadata;
- seed server-side torrents;
- perform server-side transcoding.

## Parent-Child Module Registry

- S-11.1 — Universal URL Parser
- S-11.2 — Gateway Client
- S-11.3 — WebTorrent Client
- S-11.4 — Quality Manager
- S-11.5 — Service Worker
- S-11.6 — Bit-Perfect Capability
- S-11.7 — Track Index Resolver

## Relationships

- Musicon provides the WordPress theme integration surface.
- Plyr is the third-party UI / HTML5 playback library used by the browser interface.
- S-1 HDS Gateway Express provides protected metadata and coordination APIs across the approved infrastructure boundary.
- S-3 HDS WebTorrent Seeder provides HDS-side bootstrap and recovery seeding support.
- S-2 HDS IPFS Source Kubo provides WebSeed and the initial playback source.

## Delivery Model

- P2P audio delivery occurs browser-to-browser through WebTorrent/WebRTC.
- IPFS is used as WebSeed and initial source before P2P delivery is established.
- S-1 HDS Gateway Express coordinates HDS services and metadata but does not carry browser P2P audio traffic.

## Current State

- Service identifier approved: S-11.
- Implementation not started.
- Detailed architecture is pending ADR-011.

## Related Documents

- `../Project/Project-Architecture.md`
- `../Project/Project-Methodology.md`
- `../ADR/ADR-000-Status.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-004-Universal-URL-Standard.md`
