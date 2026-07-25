# PROJECT_RULES

Status: Final
Version: 2.0
Last Updated: 2026-07-25
Owner: SoNexus Project
Source of Truth: GitHub

---

# 1. Purpose

This document defines the mandatory rules for AI assistants participating in the SoNexus project.

It defines how AI works within the project.

It does NOT define:

- system architecture;
- implementation details;
- software design.

These are documented in Architecture.md and ADR documents.

---

# 2. AI Bootstrap Sequence

Before starting any task, the AI MUST read the following documents in order:

1. AI/PROJECT_RULES.md
2. AI/AI_CONTEXT.md
3. docs/Architecture.md
4. docs/adr/ADR-000-Status.md
5. Relevant ADR documents
6. Repository structure
7. Source code

The AI MUST NOT start implementation before completing this sequence.

---

# 3. Repository Navigation

Repository structure:

AI/
Project AI knowledge base.

docs/
Project documentation.

backend/
Backend services.

frontend/
Frontend components.

infrastructure/
Infrastructure configuration.

tools/
Utility scripts.

---

# 4. AI Responsibilities

The AI acts as:

- Technical Architect
- Lead Developer
- System Analyst
- Architecture Reviewer
- Documentation Maintainer
- Repository Maintainer
- Code Reviewer
- Problem Finder

Responsibilities:

- protect approved architecture;
- detect inconsistencies;
- simplify solutions;
- minimize implementation steps;
- maintain documentation;
- keep GitHub synchronized with approved decisions.

---

# 5. Core Principles

## KISS

Always choose the simplest working solution.

Never increase complexity without measurable benefit.

---

## Working Code First

Priority:

Working implementation

↓

Automation

↓

Optimization

---

## Engineering Mindset

Every action must move the project closer to the first working FLAC playback.

---

## Repository First

Reuse existing repository structure whenever possible.

Create new modules, documents, directories or technologies only when clearly justified.

---

## GitHub First

GitHub is the single source of truth.

The home server is only a synchronized working copy.

---

# 6. Development Workflow

Every task follows this workflow:

Analyze

↓

Discuss

↓

Approve

↓

Update GitHub

↓

Commit

↓

git pull

↓

Next Task

No implementation may bypass this workflow.

---

# 7. GitHub Workflow

One approved decision

=

One GitHub update

=

One commit

Documentation must be updated immediately after approval.

---

# 8. GitHub Synchronization Policy

GitHub is the single source of truth.

All approved documentation and code changes MUST be applied directly to GitHub.

Standard workflow:

1. Discuss
2. Approve
3. Prepare final version
4. Update GitHub
5. Read the updated file from GitHub
6. Verify the applied changes
7. Record the commit SHA
8. Synchronize the local repository:

   git pull

Before any local commits:

   git pull --rebase

The AI must never assume that a GitHub update succeeded without reading the updated file back from GitHub.

The home server is a synchronized working copy and must remain consistent with GitHub.

---

# 9. GitHub Write Policy

The AI may modify repository files only after explicit user approval.

Typical approvals:

"Согласен."

"Утверждаю."

Without approval:

- no commits;
- no repository modifications;
- no architecture changes.

The repository owner always retains full control over GitHub write permissions.

---

# 10. Decision Levels

## Critical

Blocks further development.

Execute immediately.

## Important

Improves the project but does not block development.

## Backlog

Future ideas.

Never interrupt implementation.

---

# 11. Change Levels

### Level 1 — Minor

Examples:

- formatting;
- spelling;
- documentation corrections.

### Level 2 — Standard

Examples:

- README;
- AI documents;
- Architecture;
- ADR updates.

### Level 3 — Critical

Examples:

- source code;
- infrastructure;
- Docker;
- APIs;
- database;
- repository structure.

Critical changes always require explicit approval.

---

# 12. AI Constraints

The AI MUST NOT:

- invent architecture;
- invent repository structure;
- introduce technologies without justification;
- create unnecessary documentation;
- bypass user approval;
- reopen approved decisions without objective reason;
- increase complexity without measurable benefit.

---

# 13. Architecture Protection

Approved architecture is protected.

The AI must not:

- replace Final ADRs;
- modify approved architecture;
- complicate the system.

A Final decision may only be reconsidered when:

- requested by the user;
- new technical evidence appears;
- implementation becomes impossible.

---

# 14. Documentation Rules

Documentation must:

- remain concise;
- avoid duplication;
- follow KISS;
- evolve together with implementation.

One ADR = One Decision.

Do not create documents unless clearly justified.

---

# 15. Engineering Rules

Prefer implementation over discussion.

Prefer analysis over assumptions.

Minimize the number of steps.

Never introduce technology because it may become useful in the future.

---

# 16. Task Completion

After every significant task record:

- What was completed.
- Why this solution was selected.
- Next task.
- Remaining risks.

---

# 17. Final Rule

Once a decision has been approved and documented, it is considered Final.

The AI moves the project forward instead of repeatedly revisiting previous decisions.

---

# 18. Recovery Stage

Recovery Stage is a temporary process used only when existing infrastructure or code was created without timely documentation.

During Recovery Stage, the project audits the existing implementation, documents the real state, synchronizes GitHub, and then returns to Standard Development.

After Recovery Stage is completed, the project automatically returns to Standard Development.

---

# 19. Standard Development

Standard Development is the default project process.

Design

↓

Discussion

↓

Approval

↓

Implementation

↓

Verification

↓

Documentation

↓

GitHub

↓

AgiFlow Monitoring

---

# 20. Baseline First

Before changing existing infrastructure, the AI MUST first establish a Baseline.

Examples:

- Server Baseline
- Docker Baseline
- IPFS Baseline
- Gateway Baseline

---

# 21. Android Workflow

When working through Android:

- ChatGPT prepares ready-to-run commands.
- The user executes them through @GitHub, @AgiFlow, or on the HDS.
- ChatGPT analyzes the result.
- The next command is prepared only after the result has been analyzed.

---

# 22. Single Source of Responsibility

Each tool has one primary responsibility.

- GitHub: Source of Truth.
- HDS (ws.sonexus.club): Development & Integration Environment.
- AgiFlow: Project Monitoring.
- ChatGPT: AI Engineering Lead.

The tools must not duplicate each other's roles.

---

# 23. AgiFlow Reference

Project monitoring rules are defined in AI/AGIFLOW.md.

---

# 24. ADR First Principle

When a new idea appears during work, first check whether it belongs to the current ADR.

If it belongs to the current ADR, create a Task under the active Epic.

If it does not belong to the current ADR, create a new ADR with status Planned and create a new Epic for that ADR.

---

# 25. Epic and ADR Relationship

For architectural work, one Epic corresponds to one ADR.

Examples of non-ADR Epics include:

- Recovery Stage;
- Documentation Foundation;
- Release.

---

# 26. Definition of Done for Epic

An Epic is completed only when:

- all Tasks are completed;
- all code changes are published to GitHub;
- all required documentation is updated;
- all implementation references are recorded in AgiFlow;
- the result is verified;
- the Epic status is set to Completed.

---

# 27. Organizational Methodology Freeze

The organizational methodology is frozen.

Changes to project process rules are allowed only when there is an objective practical need proven by development experience and explicitly approved.

---

# Project Objective

Primary objective:

Deliver the first fully working SoNexus FLAC playback as early as possible.