# Sonexus Development Journal

## Project Start

Date:
2026-07-22

---

# Completed Work

## Repository

Status: Completed

Created:

- GitHub repository
- Project structure
- Documentation framework

---

# Architecture

Status: Completed

Approved architecture:

Player → Gateway → Node → Storage → Infrastructure

Components:

- Frontend
- Backend
- Infrastructure
- Documentation

---

# Infrastructure

Status: Prototype completed

Implemented:

- Ubuntu Server environment
- Docker platform
- Docker Compose
- Portainer

---

# IPFS

Status: Prototype completed

Implemented:

- IPFS Kubo container
- IPFS Web interface
- CID generation testing

Purpose:

IPFS acts as:

- WebSeed
- Backup source
- Distributed storage layer

---

# WebTorrent

Status: Prototype completed

Implemented:

- WebTorrent Node
- Docker container
- Test torrent seeding
- WebRTC tracker connection testing

Test components:

- Node.js
- WebTorrent
- Tracker communication

---

# Backend

Current components:

## Gateway

Status:
Planned

Purpose:

- unified API entry point
- stream URL generation
- metadata processing


## Dashboard

Status:
Planned

Purpose:

- torrent monitoring
- node status
- statistics

---

# Frontend

Implemented concept:

- WordPress
- Musicon theme
- Plyr player integration

Planned:

- Sonexus Player
- automatic stream switching

---

# URL Standard

Approved:

Playback:

https://ws.sonexus.club/s?h=INFOHASH&t=TRACK&c=CID&q=QUALITY


Parameters:

h:
WebTorrent InfoHash

t:
Track index

c:
IPFS CID

q:
Quality


Quality:

q=1
AAC 320 kbps


q=2
FLAC 16-bit / 44.1 kHz


q=3
Hi-Res FLAC 24-bit

---

# Current Development Focus

Next steps:

1. Create Gateway service
2. Create API endpoints
3. Integrate Player
4. Build Dashboard
5. Prepare production deployment

---

# Development Rule

Every important change must be:

- documented;
- committed to Git;
- tested before moving forward.
