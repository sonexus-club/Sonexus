# S-5 Audio

Status: Draft
Progress: Planned
Owner: SoNexus Project
Source of Truth: GitHub

## Purpose

S-5 Audio prepares source audio for the approved SoNexus quality variants.

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

- S-4 Postgres.
- S-8 Storage.
- S-1 Gateway Local through approved metadata contracts.

## Current State

- Service identifier approved: S-5.
- Quality model is approved at project level.
- Transcoding pipeline and implementation technology are not yet approved.

## Related Documents

- `../Project/Project-Architecture.md`
- `../ADR/ADR-004-Universal-URL-Standard.md`

## Open Decisions

- Processing pipeline.
- Codec and encoder configuration.
- Validation and failure handling.
- Job orchestration and resource limits.
