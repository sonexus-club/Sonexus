# ADR-003 — Docker Platform

Title: Docker Platform

Version: 1.0

Status: Final

Progress: Completed

GitHub: Published

Owner: SoNexus Project

---

# Context

## EN

The SoNexus platform consists of multiple independent services including Gateway, WebTorrent Node, IPFS Node, PostgreSQL and supporting infrastructure.

To ensure consistent deployment, reproducible environments and simplified maintenance, a container-based platform is required.

---

## RU

Платформа SoNexus состоит из нескольких независимых сервисов: Gateway, WebTorrent Node, IPFS Node, PostgreSQL и вспомогательной инфраструктуры.

Для обеспечения одинаковой среды разработки, простого развёртывания и сопровождения необходима контейнерная платформа.

---

# Decision

The project adopts **Docker** as the standard deployment platform for all backend services.

Each major component runs in its own container.

Container orchestration is performed using Docker Compose.

---

# Components

The Docker platform includes:

- Gateway
- WebTorrent Node
- IPFS (Kubo)
- PostgreSQL
- Nginx
- Cloudflare Tunnel (where applicable)

Each service is isolated and independently configurable.

---

# Rationale

Advantages:

- Reproducible environments.
- Simplified deployment.
- Easy scaling.
- Service isolation.
- Simplified updates.
- Cross-platform compatibility.

---

# Consequences

## Advantages

- Faster development.
- Predictable deployments.
- Modular infrastructure.
- Easy backup and migration.

## Disadvantages

- Additional Docker knowledge required.
- Slight resource overhead compared to native execution.

---

# Status

Approved.

Docker is the standard deployment platform for the SoNexus project.

