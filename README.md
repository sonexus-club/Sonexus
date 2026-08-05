# SoNexus

SoNexus is a modular audio streaming platform built around a protected Gateway, Dashboard, WebTorrent seeding, IPFS, and PostgreSQL.

## Source Baseline

This repository contains the reproducible source baseline for the current working implementation.

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
