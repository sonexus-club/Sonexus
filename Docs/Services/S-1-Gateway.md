# S-1 Gateway

Status: Draft
Progress: Analysis
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-1 Gateway is the application-layer entry point for SoNexus.

It coordinates playback-related requests between S-11 Stream Controller and supporting services without streaming audio directly.

## Responsibilities

- Provide the public HTTP/HTTPS API for SoNexus server infrastructure.
- Act as the single public entry point to SoNexus server infrastructure.
- Receive requests from browser-side clients and supporting services.
- Request and return track metadata.
- Communicate with HDS through a protected tunnel.
- Provide IPFS access and proxying with HTTP Range support.
- Control bootstrap and backup WebTorrent seeding.
- Hide internal HDS services from browser clients.
- Provide logging, telemetry and error handling.
- Manage playback-related application logic defined by approved ADRs.

## Boundaries

The Gateway does not:

- stream audio directly;
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

- S-11 Stream Controller.
- WordPress and Musicon through the S-11 Stream Controller integration.

### Outbound

- S-2 WebTorrent.
- S-3 IPFS.
- S-4 Postgres.
- S-7 Dashboard.

## Service Principles

### Decentralized Delivery Principle

S-1 Gateway shall support the decentralized delivery model of SoNexus.

Gateway coordinates access to infrastructure but is not a permanent audio streaming server.

HDS acts only as:

- the initial seeder;
- a backup seeder;
- a network recovery node.

Gateway shall minimize persistent delivery from HDS and shall support migration of traffic toward browser peers using WebTorrent/WebRTC.

Gateway communicates with HDS through a protected replaceable tunnel.

Cloudflare Tunnel is currently used, but S-1 Gateway must not depend on a specific tunnel provider or implementation.

## Data Flow

```text
S-11 Stream Controller
      ↓
S-1 Gateway
      ├── S-4 Postgres
      ├── S-3 IPFS
      ├── S-2 WebTorrent
      └── S-7 Dashboard
```

The Gateway returns coordination and metadata responses. Audio delivery remains the responsibility of IPFS and WebTorrent.

## Technology Baseline

- Node.js.
- Express.js.
- Docker.
- Ubuntu Linux.

Exact versions, API endpoints, authentication, session model and deployment parameters are not yet approved.

## Current State

- Service identifier approved: S-1.
- Architectural role defined in `../Project/Project-Architecture.md`.
- Implementation not started.
- Detailed Gateway architecture is the next engineering stage.

## Related Documents

- `../Project/Project-Architecture.md`
- `../Project/Project-Methodology.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-003-Docker-Platform.md`
- `../ADR/ADR-004-Universal-URL-Standard.md`
- `../Project/Project-Status.md`

## Open Decisions

The following items require approval before implementation:

- Gateway API contract.
- Playback session model.
- Authentication and authorization.
- Error model.
- Service health endpoints.
- PostgreSQL metadata contract.
- IPFS and WebTorrent control interfaces.
- Logging and observability.
- Deployment and scaling model.

## Completion Criteria

S-1 Gateway can move from Analysis to Development only after:

- its detailed architecture is approved;
- service boundaries are confirmed;
- API contracts are documented;
- required ADRs are Final;
- the implementation plan is approved.
