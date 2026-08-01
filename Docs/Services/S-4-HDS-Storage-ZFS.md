# S-4 HDS Storage ZFS

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Host Infrastructure

Docker Container:
—

Reason:
Implemented as Host Infrastructure.

## Purpose

S-4 HDS Storage ZFS manages persistent audio files and related media assets used by SoNexus services.

## Responsibilities

- Store source and generated audio variants.
- Preserve the approved artist, album and quality directory structure.
- Provide files to S-2 HDS IPFS Source Kubo, S-3 HDS WebTorrent Seeder and S-6 HDS Transcoder FFmpeg.
- Support integrity checks, backup and recovery procedures.

## Boundaries

The service does not:

- store canonical catalog metadata;
- stream audio directly to the player;
- define quality-selection logic;
- manage application sessions.

## Interfaces

- S-2 HDS IPFS Source Kubo.
- S-3 HDS WebTorrent Seeder.
- S-6 HDS Transcoder FFmpeg.
- S-8 HDS Dashboard Netdata.

## Current State

- Service identifier approved: S-4.
- ZFS is the approved storage model for HDS.
- Final storage layout, ZFS policy and lifecycle automation are not yet fully documented.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Canonical storage paths.
- Integrity and checksum policy.
- Backup and restore procedures.
- Capacity monitoring and retention rules.
