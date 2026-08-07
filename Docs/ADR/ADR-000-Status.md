# ADR Status

> Registry of all Architecture Decision Records (ADR) used in the SoNexus project.

Version: 1.4

Status: Final

Progress: Completed

GitHub: Published

---

| ADR | Title | Version | Status | Progress | GitHub | Defined Service | Defined Modules | Replacement / Deprecation State |
|------|-------|:------:|:------:|:--------:|:------:|-----------------|----------------|----------------------------------|
| ADR-001 | WebTorrent over BitTorrent | 1.0 | Final | Completed | Published | S-3 — HDS WebTorrent Seeder | — | — |
| ADR-002 | IPFS as WebSeed | 1.0 | Final | Completed | Published | S-2 — HDS IPFS Source Kubo | — | — |
| ADR-003 | Docker Platform | 1.0 | Final | Completed | Published | Project-wide platform | — | — |
| ADR-004 | Universal URL Standard | 1.0 | Final | Completed | Published | Shared contract | S-11.1, S-11.4, S-11.7 | — |
| ADR-005 | Gateway Architecture | 0.9 | Check | In Progress | Published | S-1 — HDS Gateway Express | — | Command Layer contract is approved for Engineering Review; token issuer ownership and scope mapping remain review gates |
| ADR-006 | Infrastructure Deployment Architecture | — | Draft | Planned | Not Created | Shared HDS / VPS infrastructure boundary | — | Active planned infrastructure architecture |
| ADR-007 | Audio Transcoder Architecture | — | Draft | Planned | Not Created | S-6 — HDS Transcoder FFmpeg | — | Active planned HDS service architecture |
| ADR-008 | Player Architecture | — | Planned | Planned | Not Created | Browser-side legacy identity | — | Legacy planned identity replaced by ADR-011 / S-11 |
| ADR-010 | Engineering Methodology | 1.1 | Final | Completed | Published | Project-wide methodology | — | — |
| ADR-011 | Stream Controller Architecture | — | Draft | Planned | Not Created | S-11 — Stream Controller | S-11.1, S-11.2, S-11.3, S-11.4, S-11.5, S-11.6, S-11.7 | Active planned architecture |
| ADR-012 | HDS Deployment Architecture | — | Draft | Planned | Not Created | S-1 through S-8 — approved HDS service registry | — | Active planned HDS deployment architecture |
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
