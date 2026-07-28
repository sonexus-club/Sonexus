# AGIFLOW

Status: Final
Version: 1.2
Last Updated: 2026-07-25
Owner: SoNexus Project

---

# 1. Purpose

AgiFlow is used exclusively for Project Monitoring.

It is NOT:

- Source of Truth;
- documentation storage;
- architecture storage;
- a replacement for GitHub.

---

# 2. Responsibilities

AgiFlow is responsible only for:

- Roadmap;
- Epic;
- Task;
- Status;
- Priority;
- project progress monitoring.

---

# 3. Source of Truth

GitHub always remains the single Source of Truth.

AgiFlow stores only project execution status.

---

# 4. Used Objects

The project uses only:

- Epic
- Task
- Status
- Priority

Additional object types require explicit approval.

---

# 5. Synchronization

Update AgiFlow:

- after approval of a new project stage;
- after creating a new Epic;
- after completing a Task;
- after changing task status;
- after completing a Recovery Stage;
- when new tasks are discovered during analysis, implementation, testing, or documentation.

---

# 6. Continuous Task Management

AgiFlow is updated continuously during implementation.

The active Epic represents the current engineering objective.

Whenever new work is discovered during analysis, implementation, testing, or documentation:

- create a new Task under the active Epic;
- assign Priority;
- set Status;
- continue implementation.

Tasks do not have to be fully defined before implementation begins.

AgiFlow reflects the current state of work, while GitHub stores the approved results.

---

# 7. GitHub References

After completing a Task, AgiFlow should reference the implementation stored in GitHub.

Recommended fields:

- Git Commit
- GitHub Path

Example:

Task:
Gateway MVP

Status:
Completed

Git Commit:
5bf9a49

GitHub Path:
backend/gateway/
Docs/ADR/ADR-005-Gateway.md

AgiFlow stores references to implementation, not the implementation itself.

---

# 8. Android Workflow

When working through Android:

1. ChatGPT prepares the command.
2. The user executes it through @AgiFlow.
3. ChatGPT analyzes the result.
4. The next command is prepared only after analysis.

---

# 9. Relationship with HDS

AgiFlow does not store technical information about HDS (ws.sonexus.club).

It only reflects implementation progress.

---

# 10. Relationship with GitHub

Every completed task should correspond to changes committed to GitHub.

GitHub remains the Source of Truth.

---

# 11. Project Workflow

Discussion

↓

Approval

↓

GitHub

↓

Implementation

↓

Verification

↓

AgiFlow Update

---

# 12. Final Rule

If information differs between GitHub and AgiFlow, GitHub always has priority.

AgiFlow must never be used to store technical decisions, architecture, ADRs, or project documentation.

---

# 13. ADR and Epic Relationship

For architectural work, one Epic corresponds to one ADR.

Examples of non-ADR Epics include:

- Recovery Stage;
- Documentation Foundation;
- Release.

If a new idea does not belong to the current ADR, create a new ADR with status Planned and a corresponding new Epic.

---

# 14. Definition of Done

An Epic is completed only when:

- all Tasks are completed;
- all code changes are published to GitHub;
- all required documentation is updated;
- all implementation references are recorded in AgiFlow;
- the result is verified;
- the Epic status is set to Completed.
