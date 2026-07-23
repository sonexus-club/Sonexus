# Project-AIContext

Title: Project AI Context
Version: 1.0
Status: Final
Progress: Completed
GitHub: Local
Owner: SoNexus Project
Last Updated: 2026-07-23

Related Documents:

- Architecture.md
- adr/ADR-Status.md
- development/Development-Roadmap.md
- development/Development-Journal.md
- development/Development-Decision-Log.md

---

# Purpose

## EN

Project-AIContext.md is the primary recovery document for the SoNexus project.

It contains the information required for AI and the Project Owner to restore the complete project context after opening a new conversation or recovering from context loss.

GitHub is the only Source of Truth.

---

## RU

Project-AIContext.md — основной документ восстановления проекта SoNexus.

Он содержит всю информацию, необходимую AI и владельцу проекта для восстановления контекста после открытия нового чата или потери истории обсуждения.

GitHub является единственным Source of Truth.

---

# Project Recovery Card

Project

SoNexus

Version

1.0

Current Phase

Phase 1 — Documentation Foundation

Current Sprint

GitHub Migration

Current Task

Publish approved documentation to GitHub.

Next Task

ADR-005 — Gateway Architecture

Project Status

Implementation Mode

GitHub Status

Local

Last Verified

2026-07-23

---

# Recovery Procedure

When restoring the project:

1. Read Project-AIContext.md.
2. Read Architecture.md.
3. Read ADR-Status.md.
4. Read Development-Roadmap.md.
5. Read Development-Journal.md.
6. Read Development-Decision-Log.md.
7. Continue from the Current Task.

Never revisit approved decisions unless explicitly requested by the Project Owner.

---

# AI Roles

The AI acts as:

- Technical Architect
- Lead Software Engineer
- Backend Developer
- Frontend Developer
- DevOps Engineer
- QA Engineer
- Documentation Lead
- Pair Programmer

# Project Owner

Responsible for:

- Product Vision
- Prioritization
- Final Approval
- Business Decisions

---

# AI Responsibilities

The AI is responsible for:

- Architecture Design
- Software Design
- Technical Recommendations
- Software Development
- Code Review
- Documentation
- Test Planning
- Risk Analysis
- Documentation Consistency

---

# AI Collaboration Rules

The AI must:

- Follow approved ADRs.
- Follow approved architecture.
- Treat GitHub as the Source of Truth.
- Never modify approved architecture without discussion.
- Recommend the best solution first.
- Provide no more than three alternatives.
- Mark the first recommendation as ⭐ Recommended.
- Keep explanations concise.
- Focus on implementation.
- Warn about architectural risks.
- Update documentation before ending a work session.
- Maintain Project Recovery Status.

---

# Development Principles

## EN

The SoNexus project follows a small number of engineering principles designed for long-term maintainability.

Core principles:

- Architecture First
- GitHub is the Source of Truth
- One ADR = One Decision
- Modular Architecture
- Prototype before Optimization
- Documentation evolves together with implementation
- Simplicity over complexity
- Approved decisions are stable

---

## RU

Проект SoNexus разрабатывается по простым инженерным принципам.

Основные принципы:

- Архитектура прежде всего.
- GitHub — единственный Source of Truth.
- Один ADR — одно архитектурное решение.
- Максимальная модульность.
- Сначала рабочий прототип, затем оптимизация.
- Документация развивается вместе с кодом.
- Простые решения предпочтительнее сложных.
- Утверждённые решения считаются стабильными.

---

# Documentation Rules

Documentation standard:

- English for titles.
- English + Russian for descriptions.
- Every important architectural decision is documented.
- Documentation always reflects the current project state.
- Development documents are updated continuously.

---

# AI Memory

Long-term project decisions:

- Hybrid architecture: IPFS → WebTorrent.
- Universal URL Standard approved.
- q=0 Auto quality approved.
- GitHub is the Source of Truth.
- Architecture First.
- English + Russian documentation.
- One module = One ADR.
- New modules are discussed in separate project chats.
- Project-AIContext.md is the primary recovery document.
- Development Suite is the primary project management system.
- Documentation structure is Frozen.


# Project Overview

## EN

SoNexus is a modular decentralized Hi-Res audio streaming platform built around open technologies.

The platform combines WebTorrent, IPFS and modern web technologies to deliver reliable, scalable and high-quality music streaming.

The architecture separates presentation, application logic, storage and infrastructure into independent layers.

Current playback model:

IPFS → Fast Playback Start

WebTorrent → Primary Audio Delivery

WordPress acts as the presentation layer while SoNexus components provide the streaming infrastructure.

---

## RU

SoNexus — модульная децентрализованная платформа потокового воспроизведения музыки высокого качества, построенная на открытых технологиях.

Платформа объединяет WebTorrent, IPFS и современные веб-технологии для создания надёжной и масштабируемой системы доставки музыки.

Архитектура разделяет пользовательский интерфейс, бизнес-логику, хранение данных и инфраструктуру на независимые уровни.

Текущая схема воспроизведения:

IPFS → быстрый старт воспроизведения.

WebTorrent → основная P2P-доставка данных.

WordPress выступает пользовательским интерфейсом, а компоненты SoNexus обеспечивают потоковую передачу.

---

# Project Vision

## EN

The long-term objective of SoNexus is to become a complete decentralized ecosystem for Hi-Res audio.

The project is based on:

- Openness
- Modularity
- Scalability
- Simplicity
- Long-term maintainability

Every component should be replaceable without affecting the remaining architecture.

---

## RU

Долгосрочная цель SoNexus — создание полноценной децентрализованной экосистемы для Hi-Res аудио.

Проект строится вокруг принципов:

- открытости;
- модульности;
- масштабируемости;
- простоты;
- долгосрочной поддержки.

Любой компонент должен иметь возможность быть заменён без влияния на остальную архитектуру.

---

# Core Components

Frontend

- WordPress
- Musicon Theme
- SoNexus Player

Backend

- Gateway
- WebTorrent Node
- IPFS Node
- Dashboard

Storage

- IPFS
- PostgreSQL
- Audio Storage

Infrastructure

- Ubuntu Linux
- Docker
- Nginx
- Cloudflare Tunnel

---

# Planned Components

Approved for future implementation:

- URL Parser
- Quality Manager
- Native WordPress Plugin
- Public API
- Desktop Application
- Mobile Application
- Progressive Web App (PWA)
- Multi-Node Support
- Plugin Architecture
- Distributed Metadata

# Current Development Status

## Completed

- Documentation Foundation
- Architecture Definition
- ADR System
- Development Suite
- Universal URL Standard
- AI Collaboration Rules
- Session Closing Workflow
- Recovery System

---

## Current Work

Current Phase

Phase 1 — Documentation Foundation

Current Activity

GitHub Migration

Current Goal

Publish approved documentation and begin implementation.

---

## Next Milestones

1. Complete GitHub Migration.
2. Publish Documentation v1.0.
3. ADR-005 — Gateway Architecture.
4. Gateway implementation.
5. URL Parser implementation.
6. Metadata Database.
7. Dashboard.
8. SoNexus Player.

---

# Session Closing Procedure

Before ending every development session:

1. Review completed work.
2. Update Development-Journal.md.
3. Update Development-Decision-Log.md.
4. Update Roadmap if required.
5. Verify GitHub status.
6. Record Recovery Point.
7. Confirm the next task.

Only after completing these steps is the session considered closed.

---

# Recovery Point

If project context is lost:

1. Start with Project-AIContext.md.
2. Review Architecture.md.
3. Review ADR-Status.md.
4. Review Development Suite.
5. Continue from the recorded Recovery Point.

Never restart the project from scratch if the documentation is available.

---

# Final Notes

Project-AIContext.md is the primary recovery document for the SoNexus project.

It defines:

- project identity;
- AI responsibilities;
- development methodology;
- recovery procedure;
- current implementation stage.

This document must always reflect the current state of the project and be updated whenever major architectural or process decisions are approved.

