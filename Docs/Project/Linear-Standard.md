# SoNexus Linear Status

Status: Frozen
Last Updated: 2026-08-06
Owner: SoNexus Project

## Purpose

This document records the current role of Linear in SoNexus.

Linear was evaluated as an engineering workflow and working-state management system. Practical automation and integration limitations prevent it from serving as the active project journal at the current stage.

## Current Decision

- Linear is frozen and is not part of the active SoNexus workflow.
- Existing Linear data is retained for possible future use.
- No Linear issue, status, label, template or automation update is required during normal project work.
- Linear must not be treated as a source of current project state.
- Reactivation requires explicit approval and a verified workflow review.

## Active Workflow Boundary

GitHub is the Source of Truth for approved architecture, code and documentation.

Until another workflow system is explicitly approved, current focus, implementation state, blockers, next steps and the project journal are maintained in GitHub project documentation, primarily:

- `Docs/Project/Project-Status.md`
- `Docs/Project/Project-Changelog.md`
- relevant ADR and Service documents

Trello is not restored as an active workflow system by this decision.

## Retained Reference

Historical verified Linear configuration:

- Linear team: `SoNexus-Team`
- Production project: `SoNexus`
- Issue prefix: `SON`
- statuses: Backlog, Todo, In Progress, In Review, Done, Canceled

These facts are retained only for possible future reactivation.
