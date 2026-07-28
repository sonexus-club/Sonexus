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

- `S-1-Gateway.md`
- `S-2-WebTorrent.md`
- `S-3-IPFS.md`
- `S-4-Postgres.md`

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
- S-X — a service created from the corresponding primary ADR.
- S-X.Y — a permanent module or capability of service S-X.
- Task — an implementation, verification or documentation task.

## Identifier Standard

- The service number must match its primary ADR number for all new services.
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

- Each new primary service is created by its primary ADR.
- New services inherit the number of their primary ADR.
- Example: ADR-011 defines S-11.
- Modules inherit the service number: S-11.1, S-11.2 and so on.

## Legacy Service Registry Transition

The existing S-1 through S-8 registry predates the approved hierarchy.

Migration rules:

- Existing published S-1 through S-8 identifiers remain reserved and are not reused.
- New services created after adoption of this standard use the number of their primary ADR.
- ADR-011 creates S-11 — Stream Controller.
- The former planned identity S-6 Player is replaced by the approved S-11 Stream Controller model.
- Historical references may remain where needed for traceability, but active architecture must use the approved active identities.
- S-6 remains reserved as a legacy identifier and must not be reused for another service.

## Service Standard (S)

### Standard S v1.1

S is the permanent identifier for a service in SoNexus.

Examples:

- S-1 — Gateway
- S-2 — WebTorrent
- S-3 — IPFS
- S-11 — Stream Controller

## Trello Workflow

### Purpose

Trello is the working notebook and process tracker for SoNexus.

It is used for:

- ideas;
- planning;
- checklists;
- task coordination;
- progress tracking;
- short working notes;
- links to GitHub artifacts.

Trello must not store final architecture, ADR text, source code, or permanent project documentation. GitHub remains the single source of truth.

### Trello Lifecycle Standard v1.0

The Trello board uses the following columns:

- 💡 Новые идеи
- 📋 Запланировано
- 📖 Анализ
- 💻 Разработка
- 🧪 Тестирование
- 📤 Публикация в GitHub
- ✅ Завершено
- 📦 Архив

Status is determined only by the column containing the card.

### Card Rules

- One card represents one engineering responsibility.
- Split a card when it begins to cover separate responsibilities.
- Keep objectives, checklists, working notes, and GitHub references concise.
- Do not duplicate card status in its title or description.
- Use a checklist as the primary execution plan.
- Create a separate Task card only when the work requires its own analysis, implementation, testing, and lifecycle.

### GitHub Integration

Trello references implementation stored in GitHub.

Recommended references:

- ADR or service document path;
- branch name;
- commit SHA;
- pull request link.

## Trello ADR Naming Standard

ADR cards in Trello use the following naming convention:

`ADR-XXX — English Name (Русское название)`

Example:

`ADR-009 — Security Architecture (Архитектура безопасности)`

`ADR-010 — Observability Architecture (Архитектура наблюдаемости)`

Rules:

- The English title is the primary title.
- The Russian title is written in parentheses.
- The English title must exactly match the corresponding ADR document filename in GitHub.
- GitHub documentation remains English-only.
- Trello uses bilingual titles for project management.

## Trello Service and Module Naming Standard

Service and module cards in Trello use the following naming conventions:

`S-X — English Name (Русское название)`

`S-X.Y — English Name (Русское название)`

Rules:

- The English title is the primary title.
- The Russian title is written in parentheses.
- The English title must exactly match the corresponding GitHub service or module identifier.
- GitHub documentation remains English-only.

## Trello Label Categories

Trello labels are divided into three categories.

A card may have no more than one label from each category.

### Category 1 — Stage

Allowed values:

- Preparation
- Implementation
- Publication

Rules:

- Exactly one Stage label should be used for active architectural work.
- The Trello column remains the source of the current workflow status.
- The Stage label identifies the broad engineering lifecycle phase.
- Labels must not duplicate detailed column status.

### Category 2 — Platform

Allowed values:

- VPS
- HDS
- Project

Rules:

- No more than one Platform label may be used.
- VPS is used for work executed or deployed primarily on VPS.
- HDS is used for work executed or deployed primarily on the home development server.
- Project is used for project-wide or cross-platform work.
- Frontend and Backend must not be used as Platform labels.

### Category 3 — Architecture Area

Examples:

- Gateway
- Stream Controller
- Security
- Audio
- IPFS
- WebTorrent
- Postgres
- Dashboard
- Storage

Rules:

- No more than one Architecture Area label may be used.
- The list may expand when a new permanent architecture area is approved.
- Related technologies must be documented in the card description instead of assigning multiple Architecture Area labels.

Examples:

ADR-011:

- Stage: Preparation
- Platform: VPS
- Architecture Area: Stream Controller

ADR-009:

- Stage: Preparation
- Platform: Project
- Architecture Area: Security

S-1 Gateway:

- Stage: Preparation
- Platform: VPS
- Architecture Area: Gateway

### Completion Rule

A card is completed only when:

- its checklist is complete;
- the result is verified;
- required code and documentation are published to GitHub;
- relevant GitHub references are recorded;
- the card is moved to ✅ Завершено.

## Documentation Principles

- Document knowledge with long-term value, not temporary process output.
- Each piece of knowledge has one official document.
- Update an existing document instead of creating a duplicate.
- Create a new permanent document only when it has a clear long-term purpose.

## Baseline Policy

Baseline is required before significant infrastructure changes.

## Engineering Rules

- Start with architecture.
- Then define the service.
- Then implement code.
- Keep one active service at a time.
- Do not duplicate knowledge across documents.

## GitHub Rules

GitHub is the source of truth for approved project knowledge.

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
