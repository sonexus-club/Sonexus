# SoNexus

> Decentralized Hi-Res Audio Streaming Platform

## Overview

SoNexus is an open, modular audio platform that combines IPFS fast start with WebTorrent peer-to-peer delivery.

## Current Status

- Status: Active
- Current stage: Repository restructuring
- Active service: S-1 Gateway
- Source of Truth: GitHub

See [`Project-Status.md`](Project-Status.md) for the current objective, active work, blockers and next milestone.

## Architecture

```text
WordPress / Musicon
        ↓
SoNexus Player
        ↓
S-1 Gateway
   ├── S-4 Postgres
   ├── S-3 IPFS
   ├── S-2 WebTorrent
   └── S-7 Dashboard
```

IPFS provides the initial playback source. WebTorrent provides the primary decentralized delivery path. Gateway coordinates application logic and does not stream audio directly.

## Documentation

- [`AI/AI-Index.md`](AI/AI-Index.md) — entry point for AI assistants
- [`Project-Status.md`](Project-Status.md) — current project state
- [`Project-Changelog.md`](Project-Changelog.md) — approved project history
- [`Docs/Project-Architecture.md`](Docs/Project-Architecture.md) — system architecture
- [`Docs/Project-Methodology.md`](Docs/Project-Methodology.md) — engineering methodology
- [`Docs/ADR/`](Docs/ADR/) — architectural decisions
- [`Docs/Services/`](Docs/Services/) — service technical passports

## Repository Areas

- `AI/` — AI navigation and rules
- `Docs/` — project documentation
- `HDS/` — home development server code, configuration and tools
- `VPS/` — VPS code, configuration and tools
- `Backup/` — temporary snapshot created before restructuring

## Technology Stack

- WordPress, Musicon, JavaScript
- Node.js, Express.js
- WebTorrent, IPFS (Kubo)
- PostgreSQL
- Docker, Ubuntu Linux, Nginx, Cloudflare Tunnel

## Principles

- Architecture First
- GitHub is the Source of Truth
- One architectural responsibility per ADR
- One document per knowledge area
- Minimal documentation
- Modular design

## License

MIT License
