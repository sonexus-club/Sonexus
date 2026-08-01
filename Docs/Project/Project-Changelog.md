# Project Changelog

## 2026-08-01

### Infrastructure Naming Standard v1.0

- Approved Infrastructure Naming Standard v1.0 for the full documentation-to-runtime naming chain.
- Standardized the mandatory sequence `ADR → Service → Directory → Compose Project → Compose Service → Docker Image → Docker Container`.
- Approved `<Platform> <Function> <Implementation>` as the required service naming format.
- Approved `kebab-case` for service directories, Docker Compose projects and Docker Compose services.
- Approved `docker-<service-name>` for Docker containers.
- Approved explicit `sonexus/<service-name>:<tag>` image naming for SoNexus-built services.
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
