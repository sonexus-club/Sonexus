# SoNexus

> Decentralized Hi-Res Audio Streaming Platform

## Overview

SoNexus is an open, modular audio platform that combines IPFS WebSeed fast start with browser-to-browser WebTorrent/WebRTC delivery.

## Current Status

- Status: Active
- Current stage: S-1 HDS Gateway Express
- Active service: S-1 HDS Gateway Express
- Approved documentation: GitHub
- Active workflow: Trello

See [Project Status](Docs/Project/Project-Status.md) for the current objective, active work, blockers and next milestone.

## Architecture

```text
WordPress / Musicon
        ↓
Plyr / HTML5 UI
        ↓
S-11 Stream Controller
   ├── Protected infrastructure boundary
   │   ├── S-7 HDS Tunnel Cloudflare
   │   └── S-1 HDS Gateway Express
   │       ├── S-5 HDS Metadata PostgreSQL
   │       └── S-8 HDS Dashboard Netdata
   ├── S-2 HDS IPFS Source Kubo
   └── S-3 HDS WebTorrent Seeder
```

Plyr is a third-party playback UI library. S-11 Stream Controller is the browser-side transport controller. S-2 HDS IPFS Source Kubo provides the initial WebSeed source, S-3 HDS WebTorrent Seeder provides bootstrap and recovery seeding support, and S-1 HDS Gateway Express coordinates protected HDS application logic without carrying P2P audio traffic.

## Documentation

- [`AI/AI-Index.md`](AI/AI-Index.md) — entry point for AI assistants
- [Project Status](Docs/Project/Project-Status.md) — current project state
- [Project Changelog](Docs/Project/Project-Changelog.md) — approved project history
- [`Docs/Project/Project-Architecture.md`](Docs/Project/Project-Architecture.md) — system architecture
- [`Docs/Project/Project-Methodology.md`](Docs/Project/Project-Methodology.md) — engineering methodology
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
- GitHub stores approved architecture and published engineering documentation
- Trello is the active engineering workflow space
- One architectural responsibility per ADR
- One document per knowledge area
- Minimal documentation
- Modular design

## License

MIT License
