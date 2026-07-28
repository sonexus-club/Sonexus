# Architecture

Title: Architecture
Version: 1.0
Status: Final
Progress: Completed
GitHub: Local
Owner: SoNexus Project
Last Updated: 2026-07-23

Related Documents:

- Project-AIContext.md
- adr/ADR-Status.md
- adr/ADR-004-Universal-URL-Standard.md

---

# Purpose

## EN

Architecture.md is the primary technical document describing the SoNexus platform.

It defines the system structure, major components, communication between modules and the fundamental architectural principles.

This document serves as the reference architecture for all future development.

---

## RU

Architecture.md — основной технический документ проекта SoNexus.

Он определяет структуру системы, основные компоненты, взаимодействие между ними и базовые архитектурные принципы.

Документ является эталоном архитектуры для всей дальнейшей разработки.

---

# System Overview

## EN

SoNexus is a modular decentralized Hi-Res audio streaming platform.

The platform combines WebTorrent, IPFS and modern web technologies into a scalable hybrid streaming architecture.

Playback starts through IPFS for fast startup and continues through WebTorrent for decentralized distribution.

---

## RU

SoNexus — модульная децентрализованная платформа потокового воспроизведения Hi-Res аудио.

Платформа объединяет WebTorrent, IPFS и современные веб-технологии в единую гибридную архитектуру.

Воспроизведение начинается через IPFS для быстрого старта и продолжается через WebTorrent для полноценной P2P-доставки.

---

# Architecture Goals

Primary goals:

- High audio quality
- Modular architecture
- Scalability
- Decentralization
- Simplicity
- Maintainability
- Long-term evolution

---

# Architecture Layers

Presentation Layer

- WordPress
- Musicon Theme
- SoNexus Player

Application Layer

- Gateway
- URL Parser
- Quality Manager

Delivery Layer

- IPFS
- WebTorrent

Storage Layer

- PostgreSQL
- Audio Storage
- Metadata

Infrastructure Layer

- Docker
- Ubuntu Linux
- Nginx
- Cloudflare Tunnel

# Core Components

## Frontend

Responsible for:

- User Interface
- Playback Control
- Playlist Management
- Communication with Gateway

Components:

- WordPress
- Musicon Theme
- SoNexus Player

---

## Backend

Responsible for:

- Business Logic
- Session Management
- Playback Authorization
- Metadata Processing

Components:

- Gateway
- URL Parser
- Quality Manager
- Dashboard

---

## Delivery

Responsible for media transport.

Components:

- IPFS
- WebTorrent

Responsibilities:

- Fast playback startup
- Peer-to-peer distribution
- Automatic source switching

---

## Storage

Responsible for persistent data.

Components:

- PostgreSQL
- Audio Storage
- IPFS Storage

Stores:

- Artists
- Albums
- Tracks
- Metadata
- Covers
- Audio Files

---

## Infrastructure

Responsible for deployment and operation.

Components:

- Docker
- Docker Compose
- Ubuntu Linux
- Nginx
- Cloudflare Tunnel

---

# High-Level Architecture

Internet

↓

Cloudflare Tunnel

↓

Nginx

↓

WordPress

↓

SoNexus Player

↓

Gateway

↓

URL Parser

↓

Quality Manager

↓

IPFS → Playback Start

↓

WebTorrent → Continuous Playback

↓

Audio Output

---

# Component Communication

WordPress communicates only with Gateway.

Gateway communicates with:

- PostgreSQL
- IPFS
- WebTorrent
- Dashboard

WebTorrent communicates directly with peers.

IPFS provides the initial playback source.

Gateway never streams audio directly.


# Playback Pipeline

## Playback Flow

User

↓

WordPress

↓

SoNexus Player

↓

Gateway

↓

URL Parser

↓

Quality Manager

↓

IPFS

↓

WebTorrent

↓

Audio Output

---

# URL Processing

Universal URL Format

https://<Domain>/<TrackCID>#h=<AlbumInfoHash>&t=<TrackIndex>&q=<QualityIndex>

The URL Parser performs the following operations:

1. Read Universal URL.
2. Extract TrackCID.
3. Extract AlbumInfoHash.
4. Extract TrackIndex.
5. Extract Quality.
6. Validate parameters.
7. Create playback session.
8. Request metadata.
9. Start playback from IPFS.
10. Switch seamlessly to WebTorrent.

---

# Metadata Flow

Player

↓

Gateway

↓

PostgreSQL

↓

Metadata Response

↓

Player

---

# Audio Delivery Strategy

Playback consists of two stages.

Stage 1

Fast startup using IPFS.

Purpose:

- Low startup latency.
- Immediate playback.
- Stable initial buffering.

Stage 2

Continuous playback using WebTorrent.

Purpose:

- P2P distribution.
- Reduced server load.
- Better scalability.
- Decentralized delivery.

The transition between IPFS and WebTorrent must be seamless and transparent to the listener.

---

# Scalability

The architecture supports horizontal scaling.

Future improvements include:

- Multiple Gateway instances.
- Multiple WebTorrent nodes.
- Multiple IPFS nodes.
- Distributed metadata.
- Load balancing.
- Multi-region deployment.
- Plugin ecosystem.


# Technology Stack

## Frontend

- WordPress
- Musicon Theme
- SoNexus Player
- JavaScript
- HTML5
- CSS3

---

## Backend

- Node.js
- Express.js
- WebTorrent
- IPFS (Kubo)
- PostgreSQL

---

## Infrastructure

- Ubuntu Linux
- Docker
- Docker Compose
- Nginx
- Cloudflare Tunnel

---

# Architecture Principles

The SoNexus platform follows these principles:

- Architecture First
- API First
- Modular Design
- Stateless Services
- P2P First
- IPFS Fast Start
- WebTorrent Primary Delivery
- Separation of Concerns
- GitHub is the Source of Truth

---

# Related ADR

- ADR-001 — WebTorrent over BitTorrent
- ADR-002 — IPFS as WebSeed
- ADR-003 — Docker Platform
- ADR-004 — Universal URL Standard

---

# Related Documents

- Project-AIContext.md
- ADR-Status.md
- Development-Roadmap.md
- Development-Journal.md
- Development-Decision-Log.md

---

# Future Architecture

Planned architectural modules:

- ADR-005 — Gateway Architecture
- ADR-006 — Metadata Database
- ADR-007 — Dashboard Architecture
- ADR-008 — Player Architecture

Additional ADRs will be created as new architectural modules are introduced.

---

# Final Notes

Architecture.md is the primary technical reference for the SoNexus platform.

All implementation decisions must remain consistent with this document.

Architectural changes are introduced only through approved ADRs.

This document is maintained throughout the entire lifecycle of the project and reflects the current approved architecture.
