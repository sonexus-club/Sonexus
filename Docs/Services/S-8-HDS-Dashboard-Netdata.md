# S-8 HDS Dashboard Netdata

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Docker

Docker Container:
docker-hds-dashboard-netdata

## Purpose

S-8 HDS Dashboard Netdata provides operational visibility and administrative monitoring for HDS services.

## Responsibilities

- Display service health and runtime state.
- Show WebTorrent peer and seeding activity.
- Show IPFS, storage and metadata status.
- Provide approved observability views for HDS operations.

## Boundaries

The service does not:

- stream audio;
- replace service APIs;
- store canonical metadata independently;
- define architecture or business rules.

## Interfaces

- S-1 HDS Gateway Express.
- S-2 HDS IPFS Source Kubo.
- S-3 HDS WebTorrent Seeder.
- S-4 HDS Storage ZFS.
- S-5 HDS Metadata PostgreSQL.

## Current State

- Service identifier approved: S-8.
- Netdata is the approved monitoring baseline for HDS.
- Final dashboard scope and observability contracts are not yet approved.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Dashboard scope and user roles.
- Metrics and event model.
- Administrative action permissions.
- Deployment and access model.
