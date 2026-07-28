# S-4 Postgres

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-4 Postgres stores structured catalog and playback metadata used by SoNexus services.

## Responsibilities

- Store artists, albums, tracks and quality variants.
- Store relationships between track metadata, CID and torrent identifiers.
- Provide persistent metadata for Gateway and Dashboard.
- Support approved backup and recovery procedures.

## Boundaries

The service does not:

- store audio payloads;
- stream media;
- define business logic;
- replace Storage.

## Interfaces

- S-1 Gateway.
- S-7 Dashboard.
- S-5 Audio.

## Current State

- Service identifier approved: S-4.
- PostgreSQL is part of the approved technology baseline.
- Canonical schema and data contracts are not yet approved.

## Related Documents

- `../Project/Project-Architecture.md`
- `Docs/ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Canonical metadata schema.
- Migration strategy.
- Backup and restore policy.
- Access control and connection management.
