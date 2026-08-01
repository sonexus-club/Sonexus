# SoNexus Project Methodology

## Purpose

This document defines the engineering methodology for the SoNexus project.

## Documentation Structure

- Project Architecture
- ADR
- S (Service)
- Task

## Naming Standard

### Project documents

Project-wide documents use the format:

`Project-<Name>.md`

Examples:

- `Docs/Project/Project-Architecture.md`
- `Docs/Project/Project-Methodology.md`
- `Docs/Project/Project-Changelog.md`
- `Docs/Project/Project-Status.md`

### AI documents

AI-specific documents use the format:

`AI-<Name>.md`

Examples:

- `AI-Index.md`
- `AI-Rules.md`

### Directories

Project directories use PascalCase.

Examples:

- `AI/`
- `Docs/`
- `ADR/`
- `Services/`
- `HDS/`
- `VPS/`
- `Backup/`
- `Gateway/`
- `IPFS/`
- `WebTorrent/`
- `Dashboard/`
- `Postgres/`
- `Docker/`
- `Tools/`
- `WordPress/`
- `Nginx/`
- `Cloudflare/`

### ADR files

ADR files use the format:

`ADR-<Number>-<Name>.md`

ADR numbers are never reused.

Examples:

- `ADR-000-Status.md`
- `ADR-001-WebTorrent.md`
- `ADR-002-IPFS-as-WebSeed.md`

### Service files

Service documents use the format:

`S-<Number>-<Service>.md`

Examples:

- `S-1-HDS-Gateway-Express.md`
- `S-2-HDS-IPFS-Source-Kubo.md`
- `S-3-HDS-WebTorrent-Seeder.md`
- `S-4-HDS-Storage-ZFS.md`

### System exceptions

Standard Git and GitHub names remain unchanged for ecosystem compatibility:

- `README.md`
- `LICENSE`
- `.gitignore`
- `.github/`
- `.vscode/`

All new project files and directories must follow this naming standard. Changes to the standard require explicit approval before implementation.

## Project Object Hierarchy

The approved project object hierarchy is:

```text
Project
├── ADR-00X
├── S-X
│   └── S-X.Y
└── Task
```

Primary traceability rule:

`ADR-X → S-X → S-X.Y → Task`

Definitions:

- Project — the complete SoNexus project.
- ADR-00X — an architectural decision.
- S-X — a service created from the corresponding primary ADR or approved service registry.
- S-X.Y — a permanent module or capability of service S-X.
- Task — an implementation, verification or documentation task.

## Identifier Standard

- The service number must match its primary ADR number for all new services unless an approved service registry explicitly defines the numbering.
- A module inherits the parent service number.
- ADR, service and module identifiers are permanent.
- Identifiers are never reused, reassigned or renumbered.
- Deprecated, replaced or archived objects retain their identifiers.

## Module/Capability Standard

S-X.Y is assigned only to a permanent module or capability with:

- a distinct responsibility;
- independent analysis;
- its own completion criteria;
- long-term architectural relevance.

Small implementation functions and methods do not receive S-X.Y identifiers.

## Identifier Immutability

Approved identifiers remain reserved permanently, including legacy and replaced identities.

Historical references may remain where required for traceability, but active documentation must clearly distinguish active and legacy identities.

## ADR Standard

### ADR Lifecycle Standard v1.1

The project uses two independent dimensions for ADR work.

### Engineering lifecycle

This describes where the engineering work is in the project workflow.

- Preparation
- Implementation
- Publication

### ADR document status

This describes the approval state of the ADR document.

- Draft
- Check
- Final

Lifecycle and document status are separate dimensions.

The Trello column determines the working lifecycle state.

ADR metadata determines the document approval state.

`Review` is a legacy term and must not be used for new ADRs.

The current approved ADR status terminology is `Draft / Check / Final`.

## ADR-to-Service Numbering

- Each new primary service is created by its primary ADR unless an approved service registry explicitly defines the numbering.
- New services normally inherit the number of their primary ADR.
- Example: ADR-011 defines S-11.
- Modules inherit the service number: S-11.1, S-11.2 and so on.

## Approved HDS Service Registry

The approved HDS registry currently defines the following active service identities:

- S-1 — HDS Gateway Express
- S-2 — HDS IPFS Source Kubo
- S-3 — HDS WebTorrent Seeder
- S-4 — HDS Storage ZFS
- S-5 — HDS Metadata PostgreSQL
- S-6 — HDS Transcoder FFmpeg
- S-7 — HDS Tunnel Cloudflare
- S-8 — HDS Dashboard Netdata

ADR-011 creates S-11 — Stream Controller as the browser-side transport controller.

## Service Standard (S)

### Standard S v1.2

S is the permanent identifier for a service in SoNexus.

Examples:

- S-1 — HDS Gateway Express
- S-2 — HDS IPFS Source Kubo
- S-3 — HDS WebTorrent Seeder
- S-11 — Stream Controller

## Infrastructure Naming Standard v1.0

The Infrastructure Naming Standard v1.0 is approved and mandatory across the SoNexus project.

### Service

Format:

`<Platform> <Function> <Implementation>`

Example:

- `HDS WebTorrent Seeder`

### Documentation

Format:

`S-x-<Service-Name>.md`

Example:

- `S-3-HDS-WebTorrent-Seeder.md`

### Directory

Format:

`kebab-case`

Example:

- `hds-webtorrent-seeder`

### Docker Compose Project

Format:

`kebab-case`

Example:

- `hds-webtorrent-seeder`

### Docker Compose Service

Format:

`kebab-case`

Example:

- `hds-webtorrent-seeder`

### Docker Container

Format:

`docker-<service-name>`

Example:

- `docker-hds-webtorrent-seeder`

### Docker Image

#### SoNexus services

Always specify the image explicitly.

Format:

`sonexus/<service-name>:<tag>`

Default tag:

`latest`

Examples:

- `image: sonexus/hds-webtorrent-seeder:latest`
- `image: sonexus/hds-gateway-express:latest`
- `image: sonexus/hds-transcoder-ffmpeg:latest`

#### Third-party services

Always use official vendor images.

Examples:

- `image: ipfs/kubo:latest`
- `image: postgres:17`
- `image: portainer/portainer-ce:lts`
- `image: netdata/netdata:stable`

Do not rename or rebuild third-party images unless an approved ADR explicitly requires it.

### Architectural Principle

Every infrastructure component must follow one consistent naming chain:

`ADR → Service → Directory → Compose Project → Compose Service → Docker Image → Docker Container`

A component name must identify the corresponding documentation, implementation and runtime object without ambiguity.

## Trello Engineering Workflow

Engineering workflow is defined in:

`Docs/Project/Trello-Standard.md`

This file is the single authoritative Trello standard for the project.

Project methodology must not duplicate detailed Trello lifecycle, naming, label, or template rules.

Trello is the active engineering workflow and working-state management space for analysis, decomposition and pre-publication iteration.

## Architecture Visualization Standard

Architecture visualizations are approved engineering artifacts.

After approval of each ADR:

1. the GitHub documentation is updated;
2. the master architecture diagram is updated;
3. if needed, a dedicated ADR-specific diagram is created;
4. the updated diagram is attached to the corresponding ADR card in Trello.

The master architecture diagram must show only approved services, approved relationships, approved infrastructure boundaries and approved transport flows.

Any part of the project that has not yet been analyzed or approved through ADR must remain generalized on the master diagram.

GitHub stores the authoritative diagrams together with the approved project documentation.

Trello stores workflow context, pre-publication iteration state and the related visual attachment for the corresponding ADR card.

## Documentation Principles

- Document knowledge with long-term value, not temporary process output.
- Each piece of knowledge has one official document.
- Update an existing document instead of creating a duplicate.
- Create a new permanent document only when it has a clear long-term purpose.

## Baseline Policy

Baseline is required before significant infrastructure changes.

## Docker Compose Migration Standard

This is the approved migration procedure for Docker-based HDS services.

Migration procedure:

1. Verify bind mounts.
2. Verify persistent data.
3. Prepare the new `docker-compose.yml`.
4. Stop the old container.
5. Remove the old container.
6. Start the new Compose project.
7. Verify service API.
8. Verify persistent identity.
9. Approve migration.

## Engineering Rules

- Start with architecture.
- Then define the service.
- Then implement code.
- Keep one active service at a time.
- Do not duplicate knowledge across documents.

## End-of-Session Documentation Rule

At the end of every project work session, the approved affected documentation shall be updated before the session is considered complete.

The update shall include, where applicable:

- approved decisions;
- architecture changes;
- service status;
- ADR status;
- current project status;
- relevant changelog entries;
- the next continuation point.

No project work session is considered complete until the documentation has been synchronized with the approved results of that session.

## GitHub Rules

GitHub is the source of truth for approved project knowledge.

GitHub stores approved architecture, ADRs, service specifications, AI rules and published engineering results.

Trello stores the active engineering workflow, task movement, decomposition and pre-publication working state.

## Glossary

- Architecture
- ADR
- Service (S)
- Module (S-X.Y)
- Task
- Baseline
- HDS
- VPS
- Gateway
