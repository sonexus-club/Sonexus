# ADR-010 — Engineering Methodology

Title: Engineering Methodology

Version: 1.1

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
- Linear was evaluated as the active engineering workflow manager but is now frozen because its automation and integration limits do not meet the current project needs;
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
- `../Project/Linear-Standard.md` (frozen Linear status and reactivation boundary)
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

GitHub project documentation records the active engineering workflow, decomposition and pre-publication working state.

Linear is frozen and is not a source of current project state.

AI follows GitHub documentation.

---

# Engineering Principles

The unified methodology follows the approved project principles:

- One work item = One responsibility.
- One authoritative document for every engineering standard.
- No duplicated methodology.
- Permanent identifiers.
- Engineering standards change only through ADR.

The Linear freeze state and reactivation boundary are defined in `../Project/Linear-Standard.md` and must not be contradicted by parallel documents.

---

# Consequences

Expected outcomes:

- unified GitHub-based engineering record without mandatory external workflow synchronization;
- unified documentation;
- stable identifiers;
- traceability;
- reproducible engineering process.

All further methodology changes require explicit approval and an ADR update or a new ADR.

## Version 1.1 Amendment

Linear is frozen. Existing Linear data is retained for possible future use, but normal project work does not require Linear updates. GitHub project documentation now carries the active status, engineering journal, blockers and continuation point. Trello is not restored as an active workflow system.

---

# Status

Approved.

This ADR records the already adopted engineering methodology of the SoNexus project.
