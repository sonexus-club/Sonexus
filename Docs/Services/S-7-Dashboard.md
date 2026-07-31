# S-7 Dashboard

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-7 Dashboard provides operational visibility and administrative control for SoNexus services.

## Responsibilities

- Display service health and runtime state.
- Show WebTorrent peers and seeding activity.
- Show IPFS, storage and metadata status.
- Provide approved administrative actions.

## Boundaries

The service does not:

- stream audio;
- replace service APIs;
- store canonical metadata independently;
- define architecture or business rules.

## Interfaces

- S-1 Gateway Local.
- S-2 WebTorrent.
- S-3 IPFS.
- S-4 Postgres.
- S-8 Storage.

## Current State

- Service identifier approved: S-7.
- Architectural role is defined at project level.
- UI, authorization and observability contracts are not yet approved.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Dashboard scope and user roles.
- Metrics and event model.
- Administrative action permissions.
- Deployment and access model.
