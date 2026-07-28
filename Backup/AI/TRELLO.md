# TRELLO

Status: Draft
Version: 1.2
Last Updated: 2026-07-26
Owner: SoNexus Project

---

# 1. Purpose

Trello is the project working notebook for SoNexus.

It is used for day-to-day engineering work, planning, progress tracking, and task coordination.

It is NOT:

- Source of Truth;
- architecture storage;
- code storage;
- final documentation storage;
- a replacement for GitHub.

---

# 2. Philosophy

## Working Notebook → Project Book

> Trello is the working notebook of the project. GitHub is the project book.

### Trello — Working Notebook

Trello is used for:

- ideas;
- tasks;
- checklists;
- progress tracking;
- working notes;
- links to GitHub.

### GitHub — Project Book

GitHub contains:

- approved ADRs;
- architecture;
- documentation;
- source code;
- history of changes.

---

# 3. Source of Truth

GitHub is the single Source of Truth.

Trello reflects the current state of work.

Trello must never duplicate GitHub as a storage location for final results.

---

# 4. Trello Responsibility

Trello is responsible for:

- monitoring engineering work;
- representing the current lifecycle stage of a card;
- tracking progress;
- collecting short working notes;
- keeping links to GitHub artifacts.

Trello is not responsible for final technical storage.

---

# 5. Card Rules

## Card = one engineering responsibility

A Trello card must describe one engineering responsibility.

If a card starts covering two different responsibilities, it must be split.

## Card content

A card may contain:

- a short objective;
- a checklist;
- a GitHub reference;
- working notes;
- comments.

A card must not contain:

- full architecture;
- full ADR text;
- source code;
- long-form documentation.

Those belong to GitHub.

---

# 6. Card Structure

Recommended structure:

- Title
- Objective
- GitHub reference
- Definition of Done
- Checklist
- Comments

### Recommended title format

`ADR-XXX — <engineering work>`

Examples:

- ADR-005 — HDS Recovery
- ADR-006 — Gateway Architecture
- TASK-001 — HDS Server Baseline

---

# 7. Workflow

## Three phases

### 📘 Preparation

- 💡 New Ideas
- 📋 Planned
- 📖 Analysis
- 🏗️ Design

### ⚙️ Execution

- 💻 Development
- 🧪 Testing
- 👀 Review

### 📚 Publication

- 📤 Publish to GitHub
- ✅ Done
- 📦 Archive

## Workflow rule

A card moves left to right as the work progresses.

Status is defined only by the column where the card is located.

---

# 8. Board Structure

## Columns

1. 💡 New Ideas
2. 📋 Planned
3. 📖 Analysis
4. 🏗️ Design
5. 💻 Development
6. 🧪 Testing
7. 👀 Review
8. 📤 Publish to GitHub
9. ✅ Done
10. 📦 Archive

## Column groups

### Preparation

- 💡 New Ideas
- 📋 Planned
- 📖 Analysis
- 🏗️ Design

### Execution

- 💻 Development
- 🧪 Testing
- 👀 Review

### Publication

- 📤 Publish to GitHub
- ✅ Done
- 📦 Archive

---

# 9. Column Rules

## 💡 New Ideas

Temporary buffer for new ideas, proposals, and possible engineering work.

Cards here are not yet approved.

Outcome:

- move to 📋 Planned if approved;
- move to 📦 Archive if rejected.

Cards should not remain here for long.

---

## 📋 Planned

Approved engineering work waiting to start.

This is not an idea queue anymore, but not yet active work.

Outcome:

- move to 📖 Analysis when work begins.

---

## 📖 Analysis

First stage of real engineering work.

Purpose:

- analyze requirements;
- review existing architecture;
- review current implementation;
- inspect documentation;
- define scope;
- identify risks and dependencies;
- decide whether a new ADR is needed.

No design or code is written here.

Outcome:

- move to 🏗️ Design when analysis is complete.

---

## 🏗️ Design

Engineering solution creation stage.

Purpose:

- design architecture;
- design components;
- design APIs;
- design data structures;
- define repository changes;
- prepare new ADRs if needed;
- select technologies and tools;
- define implementation plan.

No code is written here yet.

Outcome:

- move to 💻 Development when the solution is approved.

---

## 💻 Development

Practical implementation stage.

Purpose:

- write code;
- refactor;
- update configuration;
- update documentation where needed;
- create GitHub commits;
- fix issues found during implementation.

Outcome:

- move to 🧪 Testing when implementation is ready.

---

## 🧪 Testing

Verification that implementation matches the design.

Purpose:

- functional tests;
- integration checks;
- defect fixing.

Outcome:

- move to 👀 Review when testing is complete.

---

## 👀 Review

Final engineering review.

Purpose:

- confirm Definition of Done;
- confirm documentation updates;
- confirm readiness for GitHub publication.

Outcome:

- move to 📤 Publish to GitHub when approved.

---

## 📤 Publish to GitHub

Publication of the approved result.

Purpose:

- publish ADRs;
- publish documentation;
- finalize commits;
- synchronize GitHub.

Outcome:

- move to ✅ Done after publication.

---

## ✅ Done

Work is fully completed.

All criteria are met.

GitHub is the official Source of Truth.

---

## 📦 Archive

Historical cards only.

Contains:

- closed ideas;
- rejected work;
- finished cards that no longer need attention.

---

# 10. Card Lifecycle Rules

- Status is determined only by the column.
- One card = one engineering responsibility.
- One checklist = the execution plan for the card.
- Card movement between columns means status change.
- No separate status field is used inside the card.
- Status must not be duplicated in the title or description.

---

# 11. Checklist Rules

A checklist is used for the step-by-step execution plan of a card.

Recommended checklist structure:

- baseline;
- analysis tasks;
- implementation tasks;
- verification tasks;
- GitHub update;
- final check.

Checklists are short and actionable.

---

# 12. GitHub Integration

Trello must reference GitHub, not replace it.

Recommended GitHub references:

- ADR path;
- branch name;
- commit SHA;
- pull request link.

Trello stores references to the implementation.

GitHub stores the approved result.

---

# 13. Roles

## GitHub

GitHub is the project book and the Source of Truth.

## Trello

Trello is the working notebook and the process tracker.

## ChatGPT

ChatGPT is the AI Engineering Lead.

ChatGPT is responsible for the full engineering cycle: requirements analysis, system and architecture design, code development, code review, refactoring, testing, analysis of test results, documentation work, ADR support, GitHub coordination, Android command preparation, and guiding the project from idea to working implementation.

---

# 14. Task Hierarchy

ADR
↓
Checklist
↓
TASK (only when needed)

## Rule

- Each ADR has one main card.
- The checklist is the primary tool for ADR decomposition.
- TASK is created only when one checklist item is no longer sufficient.
- Simple work stays inside the ADR without creating separate cards.

---

# 15. Golden Rule

> First Checklist.
> Then TASK.
> Never the other way around.

---

# 16. Checklist Rules

- A checklist has no independent lifecycle.
- A checklist inherits the status of the main ADR card.
- Checklist items are marked complete with checkmarks.
- If a checklist item becomes a TASK, the corresponding checklist item is marked complete after the TASK finishes.

---

# 17. TASK Rules

A TASK is created only if the work requires:

- its own analysis;
- its own design;
- its own implementation;
- its own testing;
- its own review.

In all other cases, use only the checklist.

---

# 18. ADR Completion

An ADR is completed only if:

- all checklist items are completed;
- Definition of Done is fulfilled;
- documentation is published in GitHub;
- the card is moved to ✅ Done.

---

# 19. Workflow Principle

Status is determined only by the Trello column.

Do not use separate statuses inside cards.

---

# 20. Three-Level Engineering Model

ADR
↓
Checklist
↓
TASK (when needed)

---

# 21. Documentation Principles

## Principle 1

### Document Knowledge, Not Process

Document only knowledge with long-term value.

Do not document:

- temporary analysis results;
- intermediate Recovery stages;
- diagnostic reports;
- Baseline archives;
- working notes;
- one-time actions.

Baseline is used as an input for engineering analysis and does not become permanent project documentation unless an architectural decision requires it.

---

## Principle 2

### One Knowledge → One Document

Rules:

- Each piece of knowledge has one official home.
- Do not create duplicate documentation.
- Update an existing document when possible instead of creating a new one.
- Create a new document only when the existing structure no longer fits.

---

## Principle 3

### Minimal Documentation

Before creating a new document, ask:

"Will this document be useful in a year?"

If the answer is negative or uncertain, the new document should not be created.

---

# 22. Experimental Features

## TR-PILOT-001 — Visual Workflow Separation

Three informational cards may be used as visual separators:

- 📘 Preparation
- ⚙️ Execution
- 📚 Publication

This is a Pilot feature.

It is used only if it remains practical and does not clutter the interface.

If it becomes distracting, it should be removed without affecting the workflow.

---

# 23. Known Limitation

The ChatGPT Trello connector does not currently expose a reliable operation for reordering lists after creation.

Practical implication:

- list order may need to be corrected manually in the Trello app after creation;
- this is a connector limitation, not a Trello limitation.

---

# 24. Working Rules

- Keep the board simple.
- Do not store final knowledge in Trello.
- Use short titles and short notes.
- Keep cards active and current.
- Use Trello as a live working notebook.
- Move work forward left to right.

---

# 25. Relation to Recovery Stage

During Recovery Stage, Trello is used to monitor the real state of work while GitHub is updated with approved results.

If a document is opened for editing, check it for obsolete AgiFlow references and replace them with Trello where appropriate.

---

# 26. Final Rule

If a piece of information is approved and finalized, it belongs in GitHub.

If it is current work, progress, or a working note, it belongs in Trello.

If it is an idea, it belongs in 💡 New Ideas.

If it is completed, it moves to ✅ Done or 📦 Archive.
