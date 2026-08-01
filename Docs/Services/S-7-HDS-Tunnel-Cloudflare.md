# S-7 HDS Tunnel Cloudflare

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Host Service

Docker Container:
—

Reason:
Implemented as Host Service (systemd).

## Purpose

S-7 HDS Tunnel Cloudflare provides the protected HDS tunnel boundary for SoNexus.

## Responsibilities

- Maintain the protected tunnel boundary between VPS and HDS.
- Forward approved internal requests into the HDS environment.
- Hide private HDS services from direct public access.
- Support the replaceable protected-boundary model approved for the project.

## Boundaries

The service does not:

- define application logic;
- store metadata;
- store audio files;
- replace S-1 HDS Gateway Express.

## Interfaces

- VPS-side protected boundary.
- S-1 HDS Gateway Express.

## Current State

- Service identifier approved: S-7.
- Cloudflare Tunnel is the current approved implementation baseline.
- Future replacement of the tunnel provider remains allowed by architecture.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Final systemd unit policy.
- Tunnel health monitoring.
- Credential storage and rotation.
- Provider replacement procedure.
