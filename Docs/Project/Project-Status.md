# SoNexus Project Status

Status: Active
Last Updated: 2026-08-07
Owner: SoNexus Project
Approved Documentation: GitHub
Active Workflow: Trello

## Current Focus

ADR-005 — Gateway Architecture / Command Layer

Status: Engineering Review

## Current State

- Repository consolidation is completed; no active repository-consolidation work remains.
- The Gateway, Dashboard, WebTorrent Seeder, IPFS and PostgreSQL runtime source baseline is published.
- Gateway read-only endpoints are implemented: `/api/v1/health`, `/api/v1/services`, `/api/v1/dashboard` and `/api/v1/torrents`.
- PostgreSQL health is verified by a real `SELECT 1` probe.
- WebTorrent TEST_MODE album discovery was tested.
- Dashboard → Gateway → WebTorrent integration test passed.
- The HDS Docker network migration is completed and verified.
- Gateway uses three isolated service networks: `docker-network-ipfs`, `docker-network-webtorrent` and `docker-network-postgresql`.
- IPFS, WebTorrent Seeder and PostgreSQL do not share a direct application network with each other.
- Five WebTorrent test torrents were restored after container recreation.
- `sonexus-management` remains attached only to Portainer and is a separate follow-up.
- WebTorrent control and command endpoints are not implemented.
- ADR-005 Command Layer contracts are approved and published with document status `Check`.
- Command Layer implementation remains blocked pending Engineering Review.
- The review must resolve trusted playback token issuer ownership and exact JWT scope mapping.
- Automated GitHub CI is not configured.

## Completed Historical Work

- completed the infrastructure migration of S-5 HDS Metadata PostgreSQL to the approved naming standard;
- confirmed successful Docker Compose migration for S-5 HDS Metadata PostgreSQL;
- confirmed reuse of the existing PostgreSQL data without loss;
- confirmed preservation of the bind mount at `/home/sonexus/storage/postgres`;
- verified PostgreSQL connectivity after migration;
- confirmed preservation of the `sonexus` database;
- confirmed preservation of the `sonexus` owner;
- confirmed that S-2 HDS IPFS Source Kubo, S-3 HDS WebTorrent Seeder and S-5 HDS Metadata PostgreSQL now form a stable Docker infrastructure foundation for further HDS development;
- completed the infrastructure migration of S-2 HDS IPFS Source Kubo to the approved naming standard;
- confirmed reuse of the persistent IPFS repository without data loss;
- confirmed preservation of the existing IPFS peer identity;
- verified Kubo API and Gateway operation after migration;
- defined the purpose and responsibility boundaries of S-1 HDS Gateway Express;
- confirmed that S-1 HDS Gateway Express communicates with HDS through S-7 HDS Tunnel Cloudflare;
- confirmed Cloudflare Tunnel as the current implementation baseline;
- approved the Decentralized Delivery Principle;
- confirmed that HDS is only the bootstrap seeder, backup seeder and recovery node;
- confirmed that browser peers are the primary long-term delivery source.

## Next Continuation Point

Complete ADR-005 Engineering Review. Resolve the trusted server-side playback token issuer and exact JWT scope mapping, update ADR-005, and approve implementation tasks before changing Gateway, Seeder or S-11 source.

## Repository Status

Repository consolidation is completed.

- GitHub contains the published runtime source baseline and approved project documentation.
- Trello is the active workflow system for analysis, decomposition and pre-publication iteration.
- Documentation is consolidated and synchronized with approved results.
- AI documentation is reduced to `AI/AI-Index.md` and `AI/AI-Rules.md`.
- `HDS/`, `VPS/`, `Docs/ADR/`, `Docs/Services/` and `Backup/` are established.
- Legacy working documents and paths are removed from the active structure.
