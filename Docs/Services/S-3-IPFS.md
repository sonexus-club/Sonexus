# S-3 IPFS

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-3 IPFS provides the initial HTTP-accessible audio source for fast playback startup.

## Responsibilities

- Provide track data by CID.
- Support initial buffering before P2P delivery takes over.
- Maintain approved pinning and availability behavior.
- Integrate with Gateway and Storage through approved contracts.

## Boundaries

The service does not:

- provide the primary long-running P2P transport;
- select playback quality;
- manage application sessions;
- own catalog metadata.

## Interfaces

- S-1 Gateway.
- S-6 Player.
- S-8 Storage.

## Current State

- Service identifier approved: S-3.
- Kubo is part of the approved technology baseline.
- Detailed proxy, pinning and fallback behavior is not yet documented.

## Related Documents

- `Docs/Project-Architecture.md`
- `Docs/ADR/ADR-002-IPFS-as-WebSeed.md`
- `Docs/ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Gateway proxy contract.
- Range-request behavior.
- Pinning and replication policy.
- Public gateway fallback policy.
