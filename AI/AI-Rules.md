# AI-Rules

Status: Final
Version: 2.9
Last Updated: 2026-08-06
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

These are documented in Docs/Project/Project-Architecture.md, Docs/Project/Project-Methodology.md and ADR documents.

---

# 2. AI Bootstrap Sequence

Before starting any task, the AI MUST read the following documents in order:

1. AI/AI-Rules.md
2. AI/AI-Index.md
3. Docs/Project/Project-Methodology.md
4. Docs/Project/Project-Architecture.md
5. Docs/ADR/ADR-000-Status.md
6. Relevant ADR documents
7. Relevant Service (S) documents
8. Repository structure
9. Source code

The AI MUST NOT start implementation before completing this sequence.

---

# 3. Repository Navigation

Repository structure:

AI/
AI navigation and mandatory assistant rules.

Backup/
Immutable snapshot created before repository restructuring.

Docs/
Project documentation:
- Project/
- ADR/
- Services/

HDS/
Code, configuration and tools for the home development server.

VPS/
Code, configuration and tools for the VPS environment.

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

## Approved Documentation First

GitHub is the single source of truth for approved project knowledge.

Active workflow state, blockers, next steps and the project journal are maintained in GitHub project documentation.

Linear is frozen and is not a required workflow system.

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

Publish approved GitHub documentation

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

Documentation must be updated in GitHub only after the result is approved and stable enough for publication.

---

# 8. GitHub Synchronization Policy

GitHub is the single source of truth for approved project knowledge.

GitHub project documentation records analysis state, decomposition, blockers and pre-publication iteration.

All approved documentation and code changes MUST be applied directly to GitHub.

Linear is frozen and MUST NOT be treated as a source of current project state.

Standard workflow:

1. Discuss
2. Approve
3. Prepare final version
4. Publish approved GitHub documentation
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

## End-of-Session Rule

Before completing every SoNexus work session:

1. Update the affected project documentation.
2. Record all approved architectural decisions.
3. Update the current service or ADR status.
4. Record the next continuation point.
5. Ensure the repository is ready for seamless continuation in the next session.

## Execution Rule

ChatGPT performs repository changes directly when the required tools and access are available.

If ChatGPT cannot perform the required repository operation, it prepares an exact implementation task for Codex.

Codex performs only the requested repository changes.

Architectural decisions remain the responsibility of the project owner and ChatGPT acting as technical architect.

---

# 17. Final Rule

Once a decision has been approved and documented, it is considered Final.

The AI moves the project forward instead of repeatedly revisiting previous decisions.

---

# 18. Recovery Stage

Recovery Stage is a temporary process used only when existing infrastructure or code was created without timely documentation.

During Recovery Stage, the project audits the existing implementation, documents the real state, synchronizes approved documentation in GitHub, and then returns to Standard Development.

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

GitHub working-state and journal update

↓

GitHub publication of approved results

↓

Next Task

---

# 20. Baseline First

Before changing existing infrastructure, the AI MUST first establish a Baseline.

Examples:

- Server Baseline
- Docker Baseline
- IPFS Baseline
- Gateway Baseline

Baseline is used as an engineering snapshot of the current state.

Baseline is not permanent project documentation.

Baseline data is stored locally for analysis, comparison, and recovery purposes.

Only architectural decisions and knowledge with long-term value are transferred into permanent GitHub documentation.

---

# 21. Android Workflow

When working through Android:

- ChatGPT prepares ready-to-run commands.
- The user executes them through @GitHub or on the HDS.
- ChatGPT analyzes the result.
- The next command is prepared only after the result has been analyzed.

---

# 22. Single Source of Responsibility

Each tool has one primary responsibility.

- GitHub: Approved architecture, rules, published documentation, active project status and engineering journal.
- HDS (ws.sonexus.club): Development & Integration Environment.
- Linear: Frozen; retained only for possible future reactivation.
- ChatGPT: AI Engineering Lead.

The tools must not duplicate each other's roles.

---

# 23. Linear Status Reference

Linear status and reactivation boundary:

See:

`Docs/Project/Linear-Standard.md`

AI must not use Linear as an active workflow while its status is Frozen.

---

# 24. Hierarchy and Identifier Rules

The AI MUST use the approved project hierarchy:

`Project → ADR-00X → S-X → S-X.Y → Task`

Mandatory rules:

- use the approved hierarchy in active documentation and planning;
- never invent, reuse, reassign or renumber ADR, service or module identifiers;
- verify Docs/ADR/ADR-000-Status.md before assigning any new ADR or service number;
- for every new service, the service number MUST equal its primary ADR number;
- every permanent module or capability MUST inherit the parent service number;
- preserve legacy identifiers unless an approved migration explicitly changes them;
- the approved HDS service registry defines S-1 through S-8 as active HDS service identifiers;
- S-11 remains the approved browser-side Stream Controller identifier.

---

# 25. Working-State Documentation

While Linear is Frozen, the AI MUST:

- maintain current focus, implementation state, blockers and next continuation point in `Docs/Project/Project-Status.md`;
- record significant completed changes in `Docs/Project/Project-Changelog.md`;
- update relevant ADR and Service statuses when factual project state changes;
- avoid creating or updating Linear items unless Linear is explicitly reactivated.

When an ADR is approved, the AI MUST also:

- update the related GitHub documentation;
- update the master architecture diagram if the approved ADR changes the project-level architecture;
- create an ADR-specific diagram when the approved decision requires additional local visualization;
- keep not-yet-approved parts of the architecture generalized on the master diagram.

---

# 26. ADR First Principle

When a new idea appears during work, first check whether it belongs to the current ADR.

If it belongs to the current ADR, record it as a Task in the active project documentation.

If it does not belong to the current ADR, create a new ADR with status Planned and record the related task.

---

# 27. Historical Epic and ADR Relationship

The previous Linear model mapped one architectural Epic to one ADR.

This mapping is retained for historical compatibility only and is not an active workflow requirement while Linear is Frozen.

---

# 28. Definition of Done

Engineering work is completed only when:

- all required Tasks are completed;
- all code changes are published to GitHub;
- all required documentation is updated;
- implementation references are recorded in the relevant GitHub documentation;
- the result is verified;
- the relevant project, ADR and Service statuses are updated.

---

# 29. Organizational Methodology Freeze

The organizational methodology is frozen.

Changes to project process rules are allowed only when there is an objective practical need proven by development experience and explicitly approved.

---

# 30. Linear Freeze Rule

Use `Docs/Project/Linear-Standard.md` only to verify the frozen state and the conditions for future reactivation.

Do not require Linear updates during normal project work.

---

# Project Objective

Primary objective:

Deliver the first fully working SoNexus FLAC playback as early as possible.
