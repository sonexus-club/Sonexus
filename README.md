# SoNexus

SoNexus is a modular audio streaming platform built around a protected Gateway, Dashboard, WebTorrent seeding, IPFS, and PostgreSQL.

## Source Baseline

This repository contains the reproducible source baseline for the current working implementation.

Repository consolidation was completed on 2026-08-06. The published baseline includes the Gateway, Dashboard, WebTorrent Seeder, IPFS and PostgreSQL source and configuration.

## Structure

- `AI/` — AI operating rules and context
- `Docs/` — project documentation
- `HDS/Dashboard/` — Dashboard source
- `HDS/Gateway/` — Gateway source and compose files
- `HDS/WebTorrent/` — WebTorrent Seeder source and compose files
- `HDS/IPFS/` — IPFS compose definition
- `HDS/Postgres/` — PostgreSQL compose definition
- `HDS/Tools/` — repository tooling

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Local Notes

The repository is intended for controlled local development and source review.
Runtime data, secrets, databases, IPFS repositories, logs, media files, and generated torrents are not stored here.

## Documentation

- [AI Index](AI/AI-Index.md)
- [Project Status](Docs/Project/Project-Status.md)
- [Project Architecture](Docs/Project/Project-Architecture.md)
- [Project Methodology](Docs/Project/Project-Methodology.md)
- [Trello Standard](Docs/Project/Trello-Standard.md)
- [ADR Status](Docs/ADR/ADR-000-Status.md)
- [Service Documentation](Docs/Services/)
