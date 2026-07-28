# ADR-002 — IPFS as WebSeed

Title: IPFS as WebSeed

Version: 1.0

Status: Final

Progress: Completed

GitHub: Published

Owner: SoNexus Project

---

# Context

## EN

The SoNexus platform requires immediate playback while preserving decentralized distribution.

Pure WebTorrent playback may introduce startup delays because peers must first be discovered and connected.

---

## RU

Платформе SoNexus необходим максимально быстрый запуск воспроизведения при сохранении децентрализованной архитектуры.

Использование только WebTorrent может увеличивать время старта, поскольку необходимо обнаружить и подключить пиры.

---

# Decision

The project adopts **IPFS as the initial WebSeed source**.

Playback strategy:

Stage 1

- Player requests audio from IPFS.
- Playback starts immediately.

Stage 2

- WebTorrent peers are connected in the background.
- Playback switches seamlessly from IPFS to WebTorrent.

---

# Rationale

Advantages:

- Fast playback start.
- Stable initial buffering.
- Reduced waiting time.
- Improved user experience.
- Fully compatible with the hybrid architecture.

---

# Consequences

## Advantages

- Instant playback.
- Reduced startup latency.
- Better scalability.
- Lower load on the initial source after switching to P2P.

## Disadvantages

- Requires an operational IPFS node.
- Slightly more complex playback pipeline.

---

# Status

Approved.

The implementation is part of the Gateway and Player architecture.
