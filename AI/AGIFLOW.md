# AGIFLOW

Status: Final
Version: 1.1
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

# 7. Android Workflow

When working through Android:

1. ChatGPT prepares the command.
2. The user executes it through @AgiFlow.
3. ChatGPT analyzes the result.
4. The next command is prepared only after analysis.

---

# 8. Relationship with HDS

AgiFlow does not store technical information about HDS (ws.sonexus.club).

It only reflects implementation progress.

---

# 9. Relationship with GitHub

Every completed task should correspond to changes committed to GitHub.

GitHub remains the Source of Truth.

---

# 10. Project Workflow

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

# 11. Final Rule

If information differs between GitHub and AgiFlow, GitHub always has priority.

AgiFlow must never be used to store technical decisions, architecture, ADRs, or project documentation.