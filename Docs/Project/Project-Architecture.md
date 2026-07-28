# SoNexus Project Architecture

Version: 1.0
Status: Final
Progress: Completed
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

This document defines the approved technical architecture of SoNexus: system layers, service boundaries, component communication, playback flow and architectural principles.

## System Overview

SoNexus is a modular decentralized high-quality audio streaming platform.

Playback starts through IPFS for low startup latency and continues through WebTorrent for peer-to-peer delivery.

## Architecture Goals

- High audio quality
- Modularity
- Scalability
- Decentralization
- Simplicity
- Maintainability
- Long-term evolution

## Architecture Layers

### Presentation

- WordPress
- Musicon Theme
- SoNexus Player

### Application

- S-1 Gateway
- URL Parser
- Quality Manager
- S-7 Dashboard

### Delivery

- S-3 IPFS
- S-2 WebTorrent

### Storage

- S-4 Postgres
- S-8 Storage
- Audio files
- Metadata

### Infrastructure

- Ubuntu Linux
- Docker
- Docker Compose
- Nginx
- Cloudflare Tunnel

## Service Registry

- S-1 Gateway
- S-2 WebTorrent
- S-3 IPFS
- S-4 Postgres
- S-5 Audio
- S-6 Player
- S-7 Dashboard
- S-8 Storage

Service boundaries and current service status are documented in `Docs/Services/`.

## High-Level Architecture

```text
Internet
   ↓
Cloudflare Tunnel
   ↓
Nginx
   ↓
WordPress / Musicon
   ↓
S-6 Player
   ↓
S-1 Gateway
   ├── S-4 Postgres
   ├── S-3 IPFS
   ├── S-2 WebTorrent
   └── S-7 Dashboard
```

## Component Responsibilities

### Player

- Controls playback.
- Parses the universal stream URL.
- Selects quality.
- Starts playback through IPFS.
- Switches transparently to WebTorrent when available.

### Gateway

- Coordinates playback-related application logic.
- Requests metadata.
- Coordinates IPFS and WebTorrent services.
- Integrates with Postgres and Dashboard.
- Does not stream audio directly.

### IPFS

- Provides the initial playback source.
- Supports fast startup and initial buffering.

### WebTorrent

- Provides primary peer-to-peer delivery.
- Communicates directly with peers.
- Reduces centralized server traffic.

### Postgres

- Stores structured metadata and service relationships.

### Storage

- Stores source audio, generated quality variants, covers and service data.

## Playback Pipeline

```text
User
  ↓
WordPress / Musicon
  ↓
SoNexus Player
  ↓
Gateway coordination and metadata
  ↓
IPFS fast start
  ↓
WebTorrent primary delivery
  ↓
Audio output
```

The transition from IPFS to WebTorrent must be seamless and transparent to the listener.

## Universal Stream URL

```text
https://<Domain>/<TrackCID>#h=<AlbumInfoHash>&t=<TrackIndex>&q=<QualityIndex>
```

Parameters:

- `TrackCID` — IPFS CID used for initial playback.
- `h` — WebTorrent album infoHash.
- `t` — track index inside the album.
- `q` — quality index.

Quality model:

- `q=0` — Auto
- `q=1` — AAC 320 kbps / Lossy
- `q=2` — FLAC 16-bit / 44.1–48 kHz / Lossless default
- `q=3` — FLAC 24-bit / Hi-Res

The URL contract is defined by `Docs/ADR/ADR-004-Universal-URL-Standard.md`.

## Metadata Flow

```text
Player
  ↓
Gateway
  ↓
Postgres
  ↓
Metadata response
  ↓
Player
```

## Audio Delivery Strategy

### Stage 1 — IPFS

Purpose:

- low startup latency;
- immediate playback;
- stable initial buffering.

### Stage 2 — WebTorrent

Purpose:

- peer-to-peer distribution;
- reduced server load;
- horizontal scalability;
- decentralized delivery.

## Deployment Areas

### HDS

Contains code, configuration and tools for the home development server:

- Gateway
- IPFS
- WebTorrent
- Dashboard
- Postgres
- Docker
- Tools

### VPS

Contains code, configuration and tools for the VPS environment:

- WordPress
- Nginx
- Cloudflare
- Docker
- Tools

## Technology Stack

### Frontend

- WordPress
- Musicon Theme
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- WebTorrent
- IPFS / Kubo
- PostgreSQL

### Infrastructure

- Ubuntu Linux
- Docker
- Docker Compose
- Nginx
- Cloudflare Tunnel

## Scalability

The architecture allows future horizontal scaling through:

- multiple Gateway instances;
- multiple WebTorrent nodes;
- multiple IPFS nodes;
- distributed metadata;
- load balancing;
- multi-region deployment.

## Architecture Principles

- Architecture First
- API First
- Modular Design
- Stateless Services where applicable
- P2P First
- IPFS Fast Start
- WebTorrent Primary Delivery
- Separation of Concerns
- GitHub is the Source of Truth

## Related ADRs

- `Docs/ADR/ADR-000-Status.md`
- `Docs/ADR/ADR-001-WebTorrent.md`
- `Docs/ADR/ADR-002-IPFS-as-WebSeed.md`
- `Docs/ADR/ADR-003-Docker-Platform.md`
- `Docs/ADR/ADR-004-Universal-URL-Standard.md`

## Related Documents

- `README.md`
- `Docs/Project/Project-Status.md`
- `Docs/Project/Project-Methodology.md`
- `Docs/Services/`

## Final Rule

All implementation must remain consistent with this document and approved ADRs. Architectural changes require explicit approval and an ADR update or a new ADR.
