# ADR-010 — Engineering Methodology

Title: Engineering Methodology

Version: 1.0

Status: Final

Progress: Completed

GitHub: Published

Owner: SoNexus Project

---

# Context

The SoNexus project has completed the main repository reorganization and documentation standardization stage.

At this point:

- documentation is standardized;
- engineering workflow is standardized;
- GitHub is the Source of Truth for approved project knowledge;
- Trello is the active engineering workflow manager;
- AI behavior is standardized;
- identifier hierarchy is standardized.

These standards are already approved and adopted by the project.

The project therefore requires one unified engineering methodology ADR that records the approved methodology as a stable architectural decision and links the authoritative standards together.

---

# Decision

SoNexus officially adopts a unified engineering methodology.

The methodology is composed of the approved project standards and must be maintained by reference instead of duplicated text.

The authoritative methodology references are:

- `../Project/Project-Methodology.md`
- `../Project/Trello-Standard.md`
- `../../AI/AI-Rules.md`
- `../../AI/AI-Index.md`
- `ADR-000-Status.md`

This ADR records the approved methodology already in force.

It does not introduce an experimental or provisional process.

---

# Project Hierarchy

The mandatory hierarchy for all future engineering work is:

```text
Project
├── ADR-00X
├── S-X
│   └── S-X.Y
└── Task
```

This hierarchy is mandatory for all future engineering work.

---

# Source of Truth

GitHub is the only Source of Truth for approved architecture and published documentation.

Trello records active engineering workflow, decomposition and pre-publication working state.

AI follows GitHub documentation.

---

# Engineering Principles

The unified methodology follows the approved project principles:

- One card = One responsibility.
- One authoritative document for every engineering standard.
- No duplicated methodology.
- Permanent identifiers.
- Engineering standards change only through ADR.

Detailed Trello workflow rules are defined in `../Project/Trello-Standard.md` and must not be restated in parallel documents.

---

# Consequences

Expected outcomes:

- unified engineering workflow;
- unified documentation;
- stable identifiers;
- traceability;
- reproducible engineering process.

All further methodology changes require a new ADR.

---

# Status

Approved.

This ADR records the already adopted engineering methodology of the SoNexus project.
