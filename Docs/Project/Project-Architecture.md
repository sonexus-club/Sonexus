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
- Plyr / HTML5 playback UI

### Application

- S-1 Gateway
- S-11 Stream Controller
- S-11.1 Universal URL Parser
- S-11.4 Quality Manager
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

### Active services

- S-1 Gateway
- S-2 WebTorrent
- S-3 IPFS
- S-4 Postgres
- S-5 Audio
- S-7 Dashboard
- S-8 Storage
- S-11 Stream Controller

### Legacy reserved identity

- S-6 Player — legacy reserved identifier replaced by the approved S-11 Stream Controller model.

Service boundaries and current service status are documented in `../Services/`.

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
Plyr / HTML5 UI
   ↓
S-11 Stream Controller
   ├── S-1 Gateway
   │   ├── S-4 Postgres
   │   └── S-7 Dashboard
   ├── S-3 IPFS
   └── S-2 WebTorrent
```

## Component Responsibilities

### Plyr / HTML5 playback UI

- Provides the third-party playback interface inside WordPress and Musicon.
- Renders playback controls and browser media state.
- Does not define SoNexus service identity.

### S-11 Stream Controller

- Controls browser-side transport behavior.
- Parses the universal stream URL.
- Resolves the track index.
- Coordinates quality selection.
- Starts playback through IPFS WebSeed.
- Connects browser-to-browser WebTorrent/WebRTC delivery.
- Integrates with the Service Worker where required.
- Manages Bit-Perfect capability signaling.

### Gateway

- Coordinates playback-related application logic.
- Requests metadata.
- Coordinates application-facing integrations with IPFS and WebTorrent services.
- Integrates with Postgres and Dashboard.
- Does not stream audio directly.
- Does not carry browser P2P audio traffic.

### IPFS

- Provides the initial playback source as WebSeed.
- Supports fast startup and initial buffering.

### WebTorrent

- Provides primary browser-to-browser peer-to-peer delivery through WebRTC.
- Communicates directly with peers from the browser environment.
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
Plyr / HTML5 UI
  ↓
S-11 Stream Controller
  ├── Gateway coordination and metadata
  ├── IPFS fast start
  └── WebTorrent primary delivery
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

The URL contract is defined by `../ADR/ADR-004-Universal-URL-Standard.md`.

## Metadata Flow

```text
S-11 Stream Controller
  ↓
Gateway
  ↓
Postgres
  ↓
Metadata response
  ↓
S-11 Stream Controller
```

## Audio Delivery Strategy

### Stage 1 — IPFS

Purpose:

- low startup latency;
- immediate playback;
- stable initial buffering.
- initial WebSeed source.

### Stage 2 — WebTorrent

Purpose:

- browser-to-browser peer-to-peer distribution through WebRTC;
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

### Presentation Stack

- WordPress
- Musicon Theme
- Plyr
- JavaScript
- HTML5
- CSS3

### Service Stack

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

### Decentralized Delivery Principle

The primary source of audio delivery in SoNexus is the browsers of users participating in the network.

The Home Data Server (HDS) is not a permanent content delivery server.

HDS is used only for:

- bootstrap seeding;
- backup seeding;
- network recovery.

After playback starts and browser peers become available, content delivery should progressively migrate from HDS to browser-to-browser peer-to-peer delivery using WebTorrent/WebRTC.

All SoNexus services shall be designed to minimize HDS traffic and maximize decentralized peer-to-peer delivery.

Gateway and other infrastructure services must not turn HDS into a permanent streaming server or centralized CDN.

## Related ADRs

- `../ADR/ADR-000-Status.md`
- `../ADR/ADR-001-WebTorrent.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-003-Docker-Platform.md`
- `../ADR/ADR-004-Universal-URL-Standard.md`

## Related Documents

- `../../README.md`
- `Project-Status.md`
- `Project-Methodology.md`
- `../Services/`

## Final Rule

All implementation must remain consistent with this document and approved ADRs. Architectural changes require explicit approval and an ADR update or a new ADR.
