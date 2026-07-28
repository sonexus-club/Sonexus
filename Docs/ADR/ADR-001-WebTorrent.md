# ADR-001 — WebTorrent over BitTorrent

Title: WebTorrent over BitTorrent

Version: 1.0

Status: Final

Progress: Completed

GitHub: Published

Owner: SoNexus Project

---

# Context

## EN

The SoNexus platform requires decentralized distribution of audio streams directly between users while maintaining compatibility with modern web browsers.

Traditional BitTorrent clients cannot communicate directly with browser-based applications because browsers use WebRTC instead of TCP/UDP peer connections.

---

## RU

Платформе SoNexus требуется децентрализованная передача аудиопотоков между пользователями с поддержкой современных веб-браузеров.

Классический BitTorrent использует TCP/UDP и не может напрямую работать с браузерами, использующими WebRTC.

---

# Decision

The project adopts **WebTorrent** as the primary peer-to-peer transport layer.

WebTorrent provides:

- Native WebRTC support
- Browser compatibility
- JavaScript implementation
- Peer-to-peer audio distribution
- Open protocol

---

# Consequences

## Advantages

- Browser-native P2P
- No additional browser plugins
- Open-source ecosystem
- High scalability
- Modern JavaScript stack

## Disadvantages

- Requires WebRTC-compatible peers
- Depends on WebTorrent ecosystem

---

# Status

Approved

Implementation planned in ADR-005 Gateway Architecture.
