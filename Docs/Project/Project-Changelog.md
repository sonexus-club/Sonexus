# Project Changelog

## 2026-08-07

### HDS Docker Network Migration

- Replaced the shared legacy HDS networks with three direct service networks: `docker-network-ipfs`, `docker-network-webtorrent` and `docker-network-postgresql`.
- Restricted each target service to its direct network with S-1 HDS Gateway Express.
- Verified DNS resolution, PostgreSQL readiness, IPFS health, Seeder API and Gateway API after container recreation.
- Preserved images, ports, restart policies, bind mounts, persistent data and five WebTorrent test torrents.
- Removed `sonexus-p2p`, `sonexus-storage`, `ipfs_default` and `webtorrent_default`.
- Left `sonexus-management` only for Portainer as a separate follow-up.

### Trello and GitHub Session Synchronization

- Restored Trello as the active engineering workflow system.
- Required every completed SoNexus session to synchronize the verified task state in Trello and the approved result in GitHub.
- Required the verified commit SHA and next continuation point to be recorded in Trello before session closure.

## 2026-08-06

### Universal Media URL Standard v1.1

- Reconfirmed the canonical URL as `https://<gateway>/<TrackCID>#h=<AlbumInfoHash>&t=<TrackIndex>&q=<Quality>`.
- Replaced the older placeholders `<Domain>` and `<QualityIndex>` in active documentation.
- Confirmed that `h`, `t` and `q` remain in BR and are not transmitted to the HTTP gateway.
- Rejected the legacy action URL variants `/s` and `/d`.
- Separated the public media URL contract from the S-1 HDS Gateway Express Command API contract.
- Recorded the confirmed runtime flow `S-11 BR Stream Controller → S-1 HDS Gateway Express → S-3 HDS WebTorrent Seeder`.
- Recorded that the exact command route is not present in the published Gateway source baseline and still requires synchronization.


### Repository Consolidation and Documentation Synchronization

- Completed repository consolidation through PR #1.
- Published the Gateway, Dashboard, WebTorrent Seeder, IPFS and PostgreSQL runtime source baseline.
- Confirmed Gateway read-only API availability and PostgreSQL `SELECT 1` health verification.
- Confirmed WebTorrent TEST_MODE album discovery and Dashboard → Gateway → WebTorrent integration.
- Applied the final Dashboard DOM XSS remediation.
- Replaced Trello with Linear as the active engineering workflow system.
- Recorded ADR-005 Gateway Architecture / Command Layer as the next analysis stage.

## 2026-08-01

### Infrastructure Naming Standard v1.1

- Finalized the first-party Docker image namespace for SoNexus services.
- Confirmed `sonexus/<service-name>:latest` as the approved Docker image format for first-party services.
- Preserved official vendor image naming for third-party services including IPFS, PostgreSQL, Portainer, Netdata and Cloudflare Tunnel.

### S-5 HDS Metadata PostgreSQL Migration

- Completed the migration of S-5 HDS Metadata PostgreSQL to the approved infrastructure naming standard.
- Migrated PostgreSQL to the approved Docker Compose project, service and container naming.
- Reused the existing PostgreSQL data directory without data loss.
- Preserved the bind mount at `/home/sonexus/storage/postgres`.
- Verified that PostgreSQL accepts connections after migration.
- Preserved the `sonexus` database and the `sonexus` owner.
- Confirmed alignment with Infrastructure Naming Standard v1.0.

### Infrastructure Naming Standard v1.0

- Approved Infrastructure Naming Standard v1.0 for the full documentation-to-runtime naming chain.
- Standardized the mandatory sequence `ADR → Service → Directory → Compose Project → Compose Service → Docker Image → Docker Container`.
- Approved `<Platform> <Function> <Implementation>` as the required service naming format.
- Approved `kebab-case` for service directories, Docker Compose projects and Docker Compose services.
- Approved `docker-<service-name>` for Docker containers.
- Approved explicit `sonexus/<service-name>:latest` image naming for SoNexus-built services.
- Confirmed that third-party services must use official vendor images unless an ADR explicitly approves an exception.

### S-2 HDS IPFS Source Kubo Migration

- Completed the first HDS service migration to the approved infrastructure naming standard.
- Migrated S-2 HDS IPFS Source Kubo to the approved Docker Compose project and service naming.
- Reused the existing persistent IPFS repository without data loss.
- Preserved the existing IPFS peer identity.
- Verified Kubo API and Gateway operation after migration.

## 2026-07-30

### Architecture Visualization Standard

- Approved architecture visualizations as engineering artifacts synchronized with ADRs.
- Required the master architecture diagram to be updated after each approved ADR.
- Allowed ADR-specific diagrams when a decision introduces substantial local structure or transport flows.
- Required the relevant diagram to be attached to the corresponding Trello ADR card.
- Confirmed GitHub as the only Source of Truth for authoritative diagram files.

## 2026-07-29

### Decentralized Delivery and Session Closure

- approved the Decentralized Delivery Principle;
- defined HDS as bootstrap, backup and recovery seeder only;
- confirmed browser-to-browser WebTorrent/WebRTC delivery as the primary SoNexus delivery model;
- clarified S-1 Gateway responsibility boundaries;
- confirmed protected replaceable tunnel communication between VPS and HDS;
- added the mandatory end-of-session documentation rule.

## 2026-07-28

### Hierarchical Identifier Standard

- Approved the active project hierarchy `Project → ADR-00X → S-X → S-X.Y → Task`.
- Formalized permanent identifier immutability for ADRs, services and modules.
- Defined the legacy-service transition rule for the pre-existing S-1 through S-8 registry.
- Approved ADR-aligned numbering for all newly created services and modules.

### Stream Controller Migration

- Adopted `ADR-011 → S-11 — Stream Controller` as the active browser-side transport model.
- Preserved `S-6 Player` as a reserved legacy identifier.
- Distinguished Plyr as a third-party playback UI library rather than a SoNexus service.

### Trello Standards

- Approved Trello label categories: Stage, Platform and Architecture Area.
- Limited Platform labels to `VPS`, `HDS` and `Project`.
- Approved bilingual naming for ADR, service and module cards in Trello.

## 2026-07-25

### AI Documentation and Workflow

- Expanded AI engineering responsibilities and collaboration rules.
- Established the ADR-first principle.
- Defined the relationship between ADRs, Trello cards, checklists and tasks.
- Added Definition of Done rules for architectural work.
- Formalized GitHub as the single source of truth.
- Established the Baseline First principle for infrastructure changes.
- Defined the standard development and recovery workflows.
- Froze the organizational methodology pending explicit approval for future changes.

### Documentation Consolidation

- Replaced the legacy AI context document with `AI/AI-Index.md`.
- Consolidated Trello methodology into `Docs/Project/Project-Methodology.md`.
- Decommissioned the standalone AgiFlow and Trello AI documents.

## 2026-07-23

### Documentation Foundation

- Established the project architecture document and ADR registry.
- Approved the Universal URL Standard.
- Introduced the original development journal and decision log.
- Established explicit approval for project decisions.
- Confirmed GitHub as the source of truth.
- Set ADR-005 Gateway Architecture as the next engineering target.

## v0.1.0

### Infrastructure

- Ubuntu Desktop
- Docker
- Portainer
- IPFS (Kubo)
- Docker Networks
- Storage Layout
- GitHub Repository
- Initial Project Structure
