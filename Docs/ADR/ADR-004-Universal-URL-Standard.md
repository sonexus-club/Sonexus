# ADR-004 — Universal URL Standard

Title: Universal URL Standard

Version: 1.1

Status: Final

Progress: Completed

GitHub: Published

Owner: SoNexus Project

Last Updated: 2026-08-06

---

# Context

SoNexus requires one stable and extensible media URL that identifies an audio track, its album torrent context and the requested quality without exposing transport actions as separate endpoints.

The media URL must support fast HTTP/IPFS startup and browser-side WebTorrent coordination while keeping P2P parameters out of the HTTP request sent to the gateway.

---

# Decision

The project adopts the following canonical media URL:

```text
https://<gateway>/<TrackCID>#h=<AlbumInfoHash>&t=<TrackIndex>&q=<Quality>
```

This spelling is normative. Documentation and implementations must use the placeholders `<gateway>` and `<Quality>`; the older placeholders `<Domain>` and `<QualityIndex>` are retired.

## URL components

| Component | Meaning |
|---|---|
| `https://<gateway>` | Active HTTPS gateway base URL; the standard is not tied to a specific domain |
| `<TrackCID>` | IPFS CID of the selected track and quality used for initial HTTP/IPFS playback |
| `h` | WebTorrent infoHash of the album torrent |
| `t` | Track index inside the album torrent; one indexing convention must be used consistently by metadata and BR |
| `q` | Requested quality value |

One album is identified by one `AlbumInfoHash`. For the same composition, `t` must remain stable across the available quality profiles; `q` selects the requested quality profile.

## Quality values

| Value | Meaning |
|---:|---|
| `q=0` | Auto |
| `q=1` | AAC 320 kbps / Lossy |
| `q=2` | FLAC 16-bit / 44.1–48 kHz / Lossless, default |
| `q=3` | FLAC 24-bit / Hi-Res |

## Fragment boundary

The URL fragment begins with `#`.

The HTTP server receives only:

```text
https://<gateway>/<TrackCID>
```

The fragment is not transmitted in the HTTP request:

```text
h=<AlbumInfoHash>&t=<TrackIndex>&q=<Quality>
```

The fragment is parsed and validated by S-11.1 BR Universal URL Parser inside S-11 BR Stream Controller.

## Media URL and command API

The universal media URL is not the S-1 HDS Gateway Express command route.

After parsing the media URL, S-11 BR Stream Controller may issue a separate control request to S-1 HDS Gateway Express. That control API has its own route, request, response, authentication and error contract.

The two contracts must remain documented separately.

## Endpoint rule

Action endpoints are not part of the universal media URL.

The legacy variants `/s` and `/d` are rejected. Playback, download and other client actions are selected by the browser runtime and must not create different public media URLs for the same media object.

## Extensibility

Fragment parameters use named keys.

Implementations must:

- parse `h`, `t` and `q`;
- validate required values before use;
- ignore unknown fragment parameters safely;
- preserve backward compatibility when new optional parameters are introduced.

---

# Processing

1. S-11.1 BR Universal URL Parser reads the media URL.
2. The parser extracts `TrackCID` from the path.
3. The parser extracts and validates `h`, `t` and `q` from the fragment.
4. S-11 BR Stream Controller starts initial playback through the HTTP/IPFS source identified by `TrackCID`.
5. S-11 BR Stream Controller may send a separate command request to S-1 HDS Gateway Express.
6. S-1 coordinates S-3 HDS WebTorrent Seeder when bootstrap or recovery seeding is required.
7. The browser connects to the album torrent identified by `h` and resolves the requested track and quality using `t` and `q`.
8. Delivery should transition toward browser-to-browser WebTorrent/WebRTC when peers are available.

---

# Rationale

- One canonical public media URL.
- A gateway-independent contract.
- P2P coordination data remains client-side.
- Stable sharing and bookmarking.
- Clear separation between media identification and HDS control actions.
- Backward-compatible extension through named fragment parameters.

---

# Consequences

## Advantages

- Stable external links.
- No duplicate `/s` and `/d` URL families.
- HTTP/IPFS startup does not receive WebTorrent fragment data.
- Transport and presentation decisions remain in BR.
- S-1 Command API can evolve independently.

## Costs

- Client-side parsing and validation are required.
- Track indexing and quality mapping must remain consistent across metadata, torrent contents and BR.
- The separate S-1 Command API requires its own documented contract.

---

# Status

Approved and Final.

This document defines the official universal media URL standard for SoNexus. Future changes require an ADR update or a new ADR and must preserve backward compatibility.
