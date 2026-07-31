# ADR Status

> Registry of all Architecture Decision Records (ADR) used in the SoNexus project.

Version: 1.1

Status: Final

Progress: Completed

GitHub: Published

---

| ADR | Title | Version | Status | Progress | GitHub | Defined Service | Defined Modules | Replacement / Deprecation State |
|------|-------|:------:|:------:|:--------:|:------:|-----------------|----------------|----------------------------------|
| ADR-001 | WebTorrent over BitTorrent | 1.0 | Final | Completed | Published | S-2 — WebTorrent | — | — |
| ADR-002 | IPFS as WebSeed | 1.0 | Final | Completed | Published | S-3 — IPFS | — | — |
| ADR-003 | Docker Platform | 1.0 | Final | Completed | Published | Project-wide platform | — | — |
| ADR-004 | Universal URL Standard | 1.0 | Final | Completed | Published | Shared contract | S-11.1, S-11.4, S-11.7 | — |
| ADR-005 | Gateway Architecture | — | Planned | Planned | Not Created | S-1 — Gateway Local | — | Planned registry entry pending final review |
| ADR-006 | Infrastructure Deployment Architecture | — | Draft | Planned | Not Created | Shared HDS / VPS infrastructure boundary | — | Active planned infrastructure architecture |
| ADR-007 | Audio Transcoder Architecture | — | Draft | Planned | Not Created | S-5 — Audio | — | Active planned HDS service architecture |
| ADR-008 | Player Architecture | — | Planned | Planned | Not Created | S-6 — Player | — | Legacy planned identity replaced by ADR-011 / S-11 |
| ADR-010 | Engineering Methodology | 1.0 | Final | Completed | Published | Project-wide methodology | — | — |
| ADR-011 | Stream Controller Architecture | — | Draft | Planned | Not Created | S-11 — Stream Controller | S-11.1, S-11.2, S-11.3, S-11.4, S-11.5, S-11.6, S-11.7 | Active planned architecture |
| ADR-012 | HDS Deployment Architecture | — | Draft | Planned | Not Created | S-1 — Gateway Local and related HDS services | — | Active planned HDS deployment architecture |
| ADR-013 | VPS Deployment Architecture | — | Draft | Planned | Not Created | VPS deployment boundary and related services | — | Active planned VPS deployment architecture |

---

# Status Definitions

## Status

| Status | Description |
|---------|-------------|
| Draft | Initial proposal |
| Check | Under technical verification |
| Final | Approved architecture decision |
| Deprecated | No longer recommended |
| Replaced | Superseded by another ADR |

---

## Progress

| Progress | Description |
|-----------|-------------|
| Planned | Work has not started |
| In Progress | Work is in progress |
| Completed | Work completed |
| Cancelled | Work cancelled |

---

## GitHub Status

| Status | Description |
|---------|-------------|
| Not Created | Document does not exist |
| Ready | Approved and ready for publication |
| Published | Published in the repository |
| Archived | Archived |

---

# Rules

- One primary architectural responsibility = One ADR.
- Every ADR has a unique identifier.
- Every ADR contains Version, Status, Progress and GitHub Status.
- Every ADR registry entry must track its defined service and permanent modules where applicable.
- Approved ADR changes increment the Version.
- GitHub is the source of truth for approved architecture and published ADR documentation.
- Trello is the active workflow system for planned, draft and pre-publication engineering movement.
