# S-5 HDS Metadata PostgreSQL

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Docker

Docker Container:
docker-hds-metadata-postgresql

## Purpose

S-5 HDS Metadata PostgreSQL stores structured catalog and playback metadata used by SoNexus services.

## Responsibilities

- Store artists, albums, tracks and quality variants.
- Store relationships between track metadata, CID and torrent identifiers.
- Provide persistent metadata for S-1 HDS Gateway Express and S-8 HDS Dashboard Netdata.
- Support approved backup and recovery procedures.

## Boundaries

The service does not:

- store audio payloads;
- stream media;
- define business logic;
- replace S-4 HDS Storage ZFS.

## Interfaces

- S-1 HDS Gateway Express.
- S-8 HDS Dashboard Netdata.
- S-6 HDS Transcoder FFmpeg.

## Current State

- Service identifier approved: S-5.
- PostgreSQL is part of the approved technology baseline.
- Canonical schema and data contracts are not yet approved.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Canonical metadata schema.
- Migration strategy.
- Backup and restore policy.
- Access control and connection management.
