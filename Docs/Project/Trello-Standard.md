# SoNexus Trello Engineering Standard

## Purpose

This document defines the approved Trello engineering standard for the SoNexus project.

Trello is the active engineering workflow and working-state management system.

Trello records the engineering decision process, decomposition and pre-publication iteration state. GitHub stores the approved engineering result and remains the Source of Truth.

## Language Policy

Trello working language is Russian.

Widely accepted technical terms remain in English where appropriate.

Every engineering card must use the bilingual naming format:

`<Identifier> — English Name (Русское название)`

Examples:

- `ADR-011 — Stream Controller Architecture (Архитектура контроллера потоков)`
- `S-11 — Stream Controller (Контроллер потоков)`
- `Task — HDS Docker Network Migration (Миграция Docker-сетей HDS)`

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

- every newly created child starts its own lifecycle from `New Ideas`;
- parent and child lifecycles are independent;
- a card remains in `GitHub Publication` until the approved result is committed, pushed and read back from GitHub;
- a card moves to `Completed` only after the GitHub commit SHA is recorded and verification succeeds.

## Card Ownership

One card equals one responsibility.

- ADR — one architectural decision;
- S — one service;
- S.X — one permanent module or capability;
- Task — one engineering task.

## Trello Labels

Trello uses exactly three label categories.

### Stage

- Preparation
- Implementation
- Publication

### Platform

- VPS
- HDS
- Project

### Architecture Area

Examples include Gateway, Stream Controller, Security, Audio, IPFS, WebTorrent, PostgreSQL, Dashboard and Storage.

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

## GitHub Synchronization and Session Closure

Every approved decision, code change, configuration change, runtime change and documentation change must be reflected in the related Trello card during the same work session.

A SoNexus session is documented and complete only when:

1. the affected Trello cards match the verified working state;
2. approved results are published to GitHub;
3. the published files are read back and verified;
4. the commit SHA is recorded in Trello;
5. the next continuation point is recorded.

GitHub and Trello must be synchronized before the session is closed.

## ADR Visual Attachments

After approval of an ADR, the corresponding architecture visualization must be synchronized with the approved decision.

Rules:

- update the master architecture diagram when the approved ADR changes project-level architecture;
- create a dedicated ADR-specific diagram when the decision introduces substantial local structure or flows;
- attach the relevant approved diagram to the corresponding ADR card in Trello;
- treat the Trello attachment as a visual appendix, not as the Source of Truth;
- keep unapproved areas generalized on the master diagram.

GitHub remains the only Source of Truth for authoritative diagram files and architecture documentation.
