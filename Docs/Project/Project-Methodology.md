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

## ADR Standard

### ADR Lifecycle Standard v1.0

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

## Service Standard (S)

### Standard S v1.0

S is the permanent identifier for a service in SoNexus.

Examples:
- S-1 — Gateway
- S-2 — WebTorrent
- S-3 — IPFS

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

### Completion Rule

A card is completed only when:

- its checklist is complete;
- the result is verified;
- required code and documentation are published to GitHub;
- relevant GitHub references are recorded;
- the card is moved to ✅ Завершено.

## Trello Labels

Labels are used for classification, not status.

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
- Task
- Baseline
- HDS
- VPS
- Gateway
