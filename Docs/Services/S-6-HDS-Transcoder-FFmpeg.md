# S-6 HDS Transcoder FFmpeg

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

Service Type:
Docker

Docker Container:
docker-hds-transcoder-ffmpeg

## Purpose

S-6 HDS Transcoder FFmpeg prepares source audio for the approved SoNexus quality variants.

## Responsibilities

- Validate source audio.
- Produce approved Lossy, Lossless and Hi-Res variants when required.
- Preserve track ordering and album structure.
- Publish processing metadata for downstream services.

## Boundaries

The service does not:

- play audio;
- deliver audio to listeners;
- manage peers;
- own catalog presentation.

## Interfaces

- S-5 HDS Metadata PostgreSQL.
- S-4 HDS Storage ZFS.
- S-1 HDS Gateway Express through approved metadata contracts.

## Current State

- Service identifier approved: S-6.
- FFmpeg is the approved transcoding baseline.
- Transcoding pipeline and implementation details are not yet fully approved.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-004-Universal-URL-Standard.md`

## Open Decisions

- Processing pipeline.
- Codec and encoder configuration.
- Validation and failure handling.
- Job orchestration and resource limits.
