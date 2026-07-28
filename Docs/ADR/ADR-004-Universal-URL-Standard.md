# ADR-004 — Universal URL Standard

Title: Universal URL Standard

Version: 1.0

Status: Final

Progress: Completed

GitHub: Local

Owner: SoNexus Project

---

# Context

## EN

The SoNexus platform requires a single, stable and extensible URL format for identifying audio content independently of the playback technology.

The URL must contain enough information for the player to locate a track, identify its album context and select the desired playback quality without requiring multiple URL formats.

---

## RU

Платформе SoNexus необходим единый, стабильный и расширяемый формат URL для идентификации аудиоконтента независимо от технологии воспроизведения.

URL должен содержать всю необходимую информацию для определения трека, альбома и качества воспроизведения без использования нескольких форматов ссылок.

---

# Decision

The project adopts a single universal URL format.

```text
https://<Domain>/<TrackCID>#h=<AlbumInfoHash>&t=<TrackIndex>&q=<QualityIndex>
```

Parameters:

| Parameter | Description |
|-----------|-------------|
| TrackCID | IPFS CID of the audio track |
| AlbumInfoHash | WebTorrent InfoHash of the album torrent |
| TrackIndex | Track number inside the album |
| QualityIndex | Requested playback quality |

Quality values:

| Value | Description |
|------:|-------------|
| q=0 | Auto |
| q=1 | AAC 320 kbps |
| q=2 | FLAC 16-bit / 44.1 kHz |
| q=3 | Hi-Res FLAC |

---

# Processing

The URL is processed entirely on the client side.

Workflow:

1. Read URL.
2. Parse parameters.
3. Validate values.
4. Request metadata.
5. Start playback from IPFS.
6. Connect to WebTorrent.
7. Seamlessly switch to P2P playback.

---

# Rationale

Advantages:

- One universal format.
- Easy sharing.
- Extensible design.
- Technology-independent.
- Clean client-side processing.

---

# Consequences

## Advantages

- Simple API.
- Stable external links.
- Easy future expansion.
- Separation between transport and presentation.

## Disadvantages

- Parser implementation required.
- URL validation required.

---

# Status

Approved.

This document defines the official URL standard for the SoNexus platform.

Any future extensions must remain backward compatible.
