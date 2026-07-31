# SoNexus Trello Engineering Standard

## Purpose

This document defines the approved Trello engineering standard for the SoNexus project.

Trello is the active engineering workflow and working-state management system.

Trello records the engineering decision process, decomposition and pre-publication iteration state.
GitHub stores the approved engineering result.

GitHub remains the Source of Truth.

## Language Policy

Trello working language is Russian.

Widely accepted technical terms remain in English where appropriate.

Examples:

- Gateway
- Stream Controller
- Service Worker
- WebTorrent
- WebRTC
- IPFS
- Bit-Perfect
- Track Index
- Quality Manager
- API
- Docker

Every Trello card must use the approved bilingual naming format:

`<Identifier> — English Name (Русское название)`

Examples:

- `ADR-011 — Stream Controller Architecture (Архитектура контроллера потоков)`
- `S-11 — Stream Controller (Контроллер потоков)`
- `S-11.5 — Service Worker (Управление потоками и кэшем)`
- `S-11.7 — Track Index Resolver (Обработчик индекса трека)`
- `Task — Service Worker Cache Strategy (Стратегия кэширования Service Worker)`

Do not create Trello cards with Russian-only or English-only titles.

GitHub documentation remains English-only.

## Project Hierarchy

The approved project hierarchy is:

```text
Project
├── ADR-00X
├── S-X
│   └── S-X.Y
└── Task
```

Definitions:

- ADR — Architectural decision.
- S — Service.
- S.X — Permanent module / capability.
- Task — Engineering task.

## Card Lifecycle

The approved workflow is:

```text
New Ideas
↓
Planned
↓
Analysis
↓
Development
↓
Testing
↓
GitHub Publication
↓
Completed
↓
Archive
```

Rules:

- During Analysis it is allowed to create child objects:
  - S
  - S.X
  - Task
- Every newly created child starts its own lifecycle from `New Ideas`.
- The lifecycle of parent and child cards is independent.

## Card Ownership

One card = One responsibility.

- ADR — One architectural decision.
- S — One service.
- S.X — One permanent module / capability.
- Task — One engineering task.

Do not combine multiple architectural objects inside one card.

## Trello Labels

Trello uses exactly three label categories.

### Category 1 — Stage

Allowed values:

- Preparation
- Implementation
- Publication

### Category 2 — Platform

Allowed values:

- VPS
- HDS
- Project

### Category 3 — Architecture Area

Examples:

- Gateway
- Stream Controller
- Security
- Audio
- IPFS
- WebTorrent
- PostgreSQL
- Dashboard
- Storage

Rules:

- no more than one label from each category;
- every card may contain at most three labels total;
- labels classify the card and do not replace workflow status.

## Card Templates

Templates are intentionally minimal.

### ADR

- Purpose
- Implementation Plan
- Notes

### S

- Purpose
- Parent ADR
- Implementation Plan
- Notes

### S.X

- Purpose
- Parent Service
- Parent ADR
- Implementation Plan
- Notes

### Task

- Goal
- Related object
- Acceptance Criteria
- Notes

Detailed engineering documentation belongs only in GitHub.

## ADR Visual Attachments

After approval of an ADR, the corresponding architecture visualization must be synchronized with the approved decision.

Rules:

- update the master architecture diagram when the approved ADR changes the project-level architecture;
- create a dedicated ADR-specific diagram when the decision introduces substantial local structure or flows;
- attach the relevant approved diagram to the corresponding ADR card in Trello;
- treat the Trello attachment as a visual appendix to the ADR card, not as the Source of Truth;
- keep unapproved or not-yet-analyzed areas generalized on the master diagram.

GitHub remains the only Source of Truth for the authoritative diagram files and architecture documentation.
