# S-1 Gateway Local

Status: Draft
Progress: Analysis
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-1 Gateway Local is the internal HDS coordination service for SoNexus.

It receives protected internal requests through Tunnel Local and coordinates access to supporting HDS services without streaming audio directly.

## Responsibilities

- Receive protected internal requests through Tunnel Local.
- Coordinate metadata lookup and response handling.
- Coordinate access to IPFS Source through the protected HDS boundary.
- Coordinate bootstrap and backup WebTorrent seeding support.
- Coordinate metadata access through Postgres.
- Hide private HDS services behind the protected infrastructure boundary.
- Provide logging, telemetry and error handling for HDS coordination flows.
- Coordinate server-side playback support logic defined by approved ADRs.

## Boundaries

The service does not:

- act as the public HTTP/HTTPS API;
- act as the single public entry point to SoNexus;
- act as the direct browser-facing server entry point;
- act as a persistent or primary audio streaming source;
- replace IPFS or WebTorrent;
- store audio files;
- act as the presentation layer;
- define architecture outside approved ADRs;
- parse the universal URL;
- control Plyr;
- provide the browser WebTorrent client;
- perform browser-side quality selection;
- resolve the track index;
- implement the Service Worker;
- manage Bit-Perfect capability;
- manage browser cache;
- switch audio sources inside the browser.

## Interfaces

### Inbound

- Tunnel Local.
- Protected internal control and metadata requests routed from the approved infrastructure boundary.

### Outbound

- S-3 IPFS.
- S-2 WebTorrent.
- S-4 Postgres.
- S-7 Dashboard for health and observability integration where required.

## Service Principles

### Decentralized Delivery Principle

S-1 Gateway Local shall support the decentralized delivery model of SoNexus.

Gateway Local coordinates protected access to HDS infrastructure but is not a permanent audio streaming server.

HDS acts only as:

- the initial seeder;
- a backup seeder;
- a network recovery node.

Gateway Local shall minimize persistent delivery from HDS and shall support migration of traffic toward browser peers using WebTorrent/WebRTC.

Gateway Local communicates through a protected replaceable tunnel boundary.

Cloudflare Tunnel is currently used, but S-1 Gateway Local must not depend on a specific tunnel provider or implementation.

## Data Flow

```text
Protected infrastructure boundary
      ↓
Tunnel Local
      ↓
S-1 Gateway Local
      ├── S-4 Postgres
      ├── S-3 IPFS
      ├── S-2 WebTorrent
      └── S-7 Dashboard
```

Gateway Local returns coordination and metadata responses. Audio delivery remains the responsibility of IPFS and WebTorrent.

## Technology Baseline

- Node.js.
- Express.js.
- Docker.
- Ubuntu Linux.

Exact versions, API endpoints, authentication, session model and deployment parameters are not yet approved.

## Current State

- Service identifier approved: S-1.
- Active service identity: Gateway Local.
- Architectural role defined in `../Project/Project-Architecture.md`.
- Implementation not started.
- Detailed Gateway Local architecture is the next engineering stage.

## Related Documents

- `../Project/Project-Architecture.md`
- `../Project/Project-Methodology.md`
- `../ADR/ADR-000-Status.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-003-Docker-Platform.md`
- `../Project/Project-Status.md`

## Open Decisions

The following items require approval before implementation:

- Gateway Local internal API contract.
- Protected request model between Tunnel Local and Gateway Local.
- Error model.
- Service health endpoints.
- PostgreSQL metadata contract.
- IPFS and WebTorrent coordination interfaces.
- Logging and observability.
- Deployment and scaling model.

## Completion Criteria

S-1 Gateway Local can move from Analysis to Development only after:

- its detailed internal HDS architecture is approved;
- service boundaries are confirmed;
- protected coordination contracts are documented;
- required ADRs are Final or explicitly approved for implementation planning;
- the implementation plan is approved.
