# S-1 Gateway

Status: Draft
Progress: Analysis
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-1 Gateway is the application-layer entry point for SoNexus.

It coordinates playback-related requests between the SoNexus Player and backend services without streaming audio directly.

## Responsibilities

- Receive requests from the SoNexus Player.
- Coordinate URL parsing and quality selection.
- Request and return track metadata.
- Coordinate IPFS startup and WebTorrent delivery services.
- Provide integration points for PostgreSQL and Dashboard.
- Manage playback-related application logic defined by approved ADRs.

## Boundaries

The Gateway does not:

- stream audio directly;
- replace IPFS or WebTorrent;
- store audio files;
- act as the presentation layer;
- define architecture outside approved ADRs.

## Interfaces

### Inbound

- SoNexus Player.
- WordPress through the SoNexus Player integration.

### Outbound

- S-2 WebTorrent.
- S-3 IPFS.
- S-4 Postgres.
- S-7 Dashboard.

## Data Flow

```text
SoNexus Player
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
- `Docs/ADR/ADR-001-WebTorrent.md`
- `Docs/ADR/ADR-002-IPFS-as-WebSeed.md`
- `Docs/ADR/ADR-003-Docker-Platform.md`
- `Docs/ADR/ADR-004-Universal-URL-Standard.md`
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
