# S-8 Storage

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-8 Storage manages persistent audio files and related media assets used by SoNexus services.

## Responsibilities

- Store source and generated audio variants.
- Preserve the approved artist, album and quality directory structure.
- Provide files to WebTorrent, IPFS and Audio processing services.
- Support integrity checks, backup and recovery procedures.

## Boundaries

The service does not:

- store canonical catalog metadata;
- stream audio directly to the player;
- define quality-selection logic;
- manage application sessions.

## Interfaces

- S-2 WebTorrent.
- S-3 IPFS.
- S-5 Audio.
- S-7 Dashboard.

## Current State

- Service identifier approved: S-8.
- NVMe-based storage and album directory principles are approved at project level.
- Final storage layout, ZFS policy and lifecycle automation are not yet documented.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Canonical storage paths.
- Integrity and checksum policy.
- Backup and restore procedures.
- Capacity monitoring and retention rules.
