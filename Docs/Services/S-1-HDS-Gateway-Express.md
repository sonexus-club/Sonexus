# S-1 HDS Gateway Express

Status: Draft
Progress: In Progress
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Docker

Docker Container:
docker-hds-gateway-express

## Purpose

S-1 HDS Gateway Express is the internal HDS coordination gateway for SoNexus.

It receives protected internal requests through the approved HDS boundary and coordinates access to the HDS metadata, IPFS and WebTorrent services without becoming a permanent audio streaming source.

## Responsibilities

- Receive protected internal requests routed through the HDS tunnel boundary.
- Coordinate metadata lookup and response handling.
- Coordinate access to S-2 HDS IPFS Source Kubo.
- Coordinate bootstrap and backup seeding support through S-3 HDS WebTorrent Seeder.
- Coordinate metadata access through S-5 HDS Metadata PostgreSQL.
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

## Universal Media URL Boundary

The canonical media URL is:

```text
https://<gateway>/<TrackCID>#h=<AlbumInfoHash>&t=<TrackIndex>&q=<Quality>
```

S-1 does not parse the fragment `h/t/q`; the fragment remains in S-11 BR Stream Controller. The universal media URL is not the S-1 command route.

After client-side parsing, S-11 may send a separate control request to S-1. S-1 validates and coordinates that request, then delegates the actual torrent lifecycle operation to S-3 HDS WebTorrent Seeder.

The runtime flow `S-11 → S-1 → S-3` has been confirmed to start a specific album torrent. However, the exact command route and request/response contract are not present in the published `HDS/Gateway/routes.js` baseline and remain to be synchronized and documented.

## Interfaces

### Inbound

- S-7 HDS Tunnel Cloudflare.
- Protected internal control and metadata requests routed from the approved infrastructure boundary.

### Outbound

- S-2 HDS IPFS Source Kubo.
- S-3 HDS WebTorrent Seeder.
- S-5 HDS Metadata PostgreSQL.
- S-8 HDS Dashboard Netdata for health and observability integration where required.

## Service Principles

### Decentralized Delivery Principle

S-1 HDS Gateway Express shall support the decentralized delivery model of SoNexus.

The service coordinates protected access to HDS infrastructure but is not a permanent audio streaming server.

HDS acts only as:

- the initial seeder;
- a backup seeder;
- a network recovery node.

S-1 HDS Gateway Express shall minimize persistent delivery from HDS and shall support migration of traffic toward browser peers using WebTorrent/WebRTC.

## Data Flow

```text
Protected infrastructure boundary
      ↓
S-7 HDS Tunnel Cloudflare
      ↓
S-1 HDS Gateway Express
      ├── S-5 HDS Metadata PostgreSQL
      ├── S-2 HDS IPFS Source Kubo
      ├── S-3 HDS WebTorrent Seeder
      └── S-8 HDS Dashboard Netdata
```

S-1 HDS Gateway Express returns coordination and metadata responses. Audio delivery remains the responsibility of IPFS and WebTorrent.

## Technology Baseline

- Node.js
- Express.js
- Docker
- Ubuntu Linux

The implementation baseline provides the following read-only endpoints:

- `GET /api/v1/health`
- `GET /api/v1/services`
- `GET /api/v1/dashboard`
- `GET /api/v1/torrents`

The PostgreSQL service health probe opens a database connection and executes `SELECT 1`.

Protected command API, authentication, the control contract and detailed Gateway architecture remain unapproved.

## Current State

- Service identifier approved: S-1.
- Active service identity: HDS Gateway Express.
- Architectural role defined in `../Project/Project-Architecture.md`.
- Implementation baseline exists in `HDS/Gateway/`.
- Read-only Gateway, Dashboard and torrent integration endpoints are implemented.
- Detailed Gateway Command Layer analysis is the next engineering stage under ADR-005.

## Related Documents

- `../Project/Project-Architecture.md`
- `../Project/Project-Methodology.md`
- `../ADR/ADR-000-Status.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-003-Docker-Platform.md`
- `../Project/Project-Status.md`

## Open Decisions

- Protected command API and control contract.
- Protected request model between S-7 HDS Tunnel Cloudflare and S-1 HDS Gateway Express.
- Error model.
- Health response contract and readiness criteria.
- PostgreSQL metadata contract.
- IPFS and WebTorrent coordination interfaces.
- Logging and observability.
- Deployment and scaling model.

## Completion Criteria

S-1 HDS Gateway Express command capabilities can move beyond the current implementation baseline only after:

- its detailed internal HDS architecture is approved;
- service boundaries are confirmed;
- protected coordination contracts are documented;
- required ADRs are Final or explicitly approved for implementation planning;
- the implementation plan is approved.
