# S-2 HDS IPFS Source Kubo

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Docker

Docker Container:
docker-hds-ipfs-source-kubo

## Purpose

S-2 HDS IPFS Source Kubo provides the initial HTTP-accessible audio source for fast playback startup inside the HDS environment.

## Responsibilities

- Provide track data by CID.
- Support initial buffering before P2P delivery takes over.
- Maintain approved pinning and availability behavior.
- Integrate with S-1 HDS Gateway Express and S-4 HDS Storage ZFS through approved contracts.

## Boundaries

The service does not:

- provide the primary long-running P2P transport;
- select playback quality;
- manage application sessions;
- own catalog metadata.

## Interfaces

- S-1 HDS Gateway Express.
- S-11 Stream Controller.
- S-4 HDS Storage ZFS.

## Current State

- Service identifier approved: S-2.
- Kubo is part of the approved technology baseline.
- Detailed proxy, pinning and fallback behavior is not yet documented.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-002-IPFS-as-WebSeed.md`
- `../ADR/ADR-003-Docker-Platform.md`

## Open Decisions

- Gateway proxy contract.
- Range-request behavior.
- Pinning and replication policy.
- Public gateway fallback policy.
