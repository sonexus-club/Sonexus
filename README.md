# SoNexus

> Decentralized Hi-Res Audio Streaming Platform

## Overview

SoNexus is an open, modular and decentralized audio streaming platform designed for high-quality music delivery using modern peer-to-peer technologies.

The platform combines:

- WebTorrent
- IPFS
- WordPress
- Docker
- PostgreSQL

into a scalable hybrid streaming architecture.

---

## Current Status

Version: 1.0

Phase: Documentation Foundation

Status: In Development

GitHub: Local

---

## Architecture

Playback pipeline:

WordPress

↓

SoNexus Player

↓

Gateway

↓

IPFS (Fast Playback Start)

↓

WebTorrent (Primary Delivery)

↓

Audio Output

---

## Documentation

Project documentation is located in:

```text
docs/
├── Project-AIContext.md
├── Architecture.md
├── adr/
└── development/
```

---

## Roadmap

Current milestone:

- Complete GitHub Migration
- Gateway Architecture
- Gateway Implementation
- URL Parser
- Metadata Database
- Dashboard
- Native SoNexus Player

---

## Technology Stack

Frontend

- WordPress
- Musicon Theme
- JavaScript

Backend

- Node.js
- Express.js
- WebTorrent
- IPFS
- PostgreSQL

Infrastructure

- Ubuntu Linux
- Docker
- Docker Compose
- Nginx
- Cloudflare Tunnel

---

## Principles

- Architecture First
- GitHub is the Source of Truth
- One ADR = One Architecture Decision
- Modular Design
- Documentation evolves with implementation

---

## License

MIT License