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

- `Project-Architecture.md`
- `Project-Methodology.md`
- `Project-Changelog.md`
- `Project-Status.md`

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

The ADR lifecycle is defined in three main stages:

- Preparation
- Implementation
- Publication

## Service Standard (S)

### Standard S v1.0

S is the permanent identifier for a service in SoNexus.

Examples:
- S-1 — Gateway
- S-2 — WebTorrent
- S-3 — IPFS

## Trello Workflow

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

## Trello Labels

Labels are used for classification, not status.

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
