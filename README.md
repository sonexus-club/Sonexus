# Sonexus

## Decentralized Audio Streaming Platform

Sonexus is a decentralized high-quality audio platform based on:

- WebTorrent WebRTC
- IPFS
- WordPress
- Custom Sonexus Player

## Architecture


User | WordPress + Musicon | Sonexus Player | +----------------+ | | WebTorrent IPFS WebRTC WebSeed | | +----------------+ | Sonexus Node

## Components

### Frontend

- WordPress
- Musicon Theme
- Sonexus Player

### Backend

- Gateway
- WebTorrent Node
- IPFS Storage
- Dashboard

### Infrastructure

- Docker
- Cloudflare Tunnel
- Linux Server

## Audio Quality

Supported formats:

- AAC 320 kbps
- FLAC 16-bit / 44.1 kHz
- Hi-Res FLAC 24-bit

## Project Status

Development stage.

Current focus:

- WebTorrent streaming
- IPFS integration
- Player integration
- Server infrastructure

## Documentation

See `/docs`
