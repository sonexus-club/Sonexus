# SoNexus Trello Engineering Standard

Status: Final
Version: 1.0
Last Updated: 2026-08-06
Owner: SoNexus Project
Role: Active Engineering Workflow and Project Journal

## Purpose

Trello is the operational starting point for all SoNexus work and records the complete engineering lifecycle from an idea to implementation, GitHub publication, completion and archive.

GitHub remains the Source of Truth for approved architecture, code and published documentation. Linear is frozen and is not part of the active workflow.

## Lifecycle

The Trello board uses these columns in this exact order:

1. `💡 Новые идеи`
2. `📋 Запланировано`
3. `📖 Анализ`
4. `💻 Разработка`
5. `🧪 Тестирование`
6. `📤 Публикация в GitHub`
7. `✅ Завершено`
8. `📦 Архив`

The lifecycle is grouped into three engineering stages:

- Preparation: `💡 Новые идеи`, `📋 Запланировано`, `📖 Анализ`
- Implementation: `💻 Разработка`, `🧪 Тестирование`
- Publication: `📤 Публикация в GitHub`, `✅ Завершено`, `📦 Архив`

## Column Rules

### 💡 Новые идеи

Create a card as soon as a project idea appears. No implementation commitment exists yet.

### 📋 Запланировано

Move the card here after the work is accepted for future execution and its priority or dependency is understood.

### 📖 Анализ

Move the card here when active research, architecture, requirements or decision work begins.

### 💻 Разработка

Move the card here only after required decisions are approved and implementation has actually started.

### 🧪 Тестирование

Move the card here when implementation is ready for active verification.

### 📤 Публикация в GitHub

Move the card here after verification succeeds and the approved result is being prepared or submitted for GitHub publication.

### ✅ Завершено

Move the card here only after the result is published or merged in GitHub, required documentation is synchronized and completion evidence is attached.

### 📦 Архив

Move completed, rejected or obsolete cards here when they no longer belong in the active board view. Preserve their history.

## Status Discipline

- A Trello column is the current operational status of the work item.
- Move a card when the factual lifecycle event occurs, not when it is merely intended.
- Update the card at the start and completion of analysis, development, testing and publication.
- Record blockers and the next action as soon as they change.
- Never mark work completed without verifiable evidence.
- Trello and GitHub have different roles and must remain consistent: Trello records work in motion; GitHub stores approved results.

## Card Content

Each active card must contain, where applicable:

- permanent identifier and concise title;
- objective and scope;
- current decision or implementation context;
- checklist of Tasks;
- blockers and dependencies;
- next action;
- links to the relevant ADR, Service document, branch, commit, PR and test evidence;
- final outcome.

Architectural cards use the approved project hierarchy:

`Project → ADR-00X → S-X → S-X.Y → Task`

One architectural ADR is represented by one primary Trello ADR card. Related service, module and Task work is referenced from the card or maintained as approved linked cards and checklists.

## Labels and Naming

Approved Trello label categories are:

- Stage
- Platform
- Architecture Area

Platform labels are limited to:

- `VPS`
- `HDS`
- `Project`

ADR, Service and Module cards use bilingual naming where already established by the project.

## AI Maintenance Responsibility

ChatGPT, acting as AI Engineering Lead, is responsible for maintaining Trello as project work progresses:

- create or update the relevant card before active work begins;
- move the card promptly after a verified lifecycle transition;
- maintain checklists, blockers, next actions and evidence links;
- synchronize the Trello status with approved GitHub and runtime results;
- never claim a Trello update succeeded without verification.

When direct Trello access is unavailable, ChatGPT must explicitly report the pending Trello change and provide the exact card update for execution. The status must not be silently replaced by GitHub documentation or Linear.

## Definition of Done

A Trello work item may enter `✅ Завершено` only when:

- all required Tasks are completed;
- implementation or documentation is verified;
- required code and documentation are published in GitHub;
- the relevant ADR, Service and Project statuses are synchronized;
- commit or PR evidence is attached to the card;
- the next project action is recorded.

## Linear Boundary

Linear remains frozen. Existing Linear data is preserved for possible future use. Reactivation requires explicit approval and must not replace or duplicate the active Trello workflow without a new methodology decision.
