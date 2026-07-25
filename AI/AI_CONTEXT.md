# AI_CONTEXT.md

> SoNexus Project AI Context
>
> Purpose:
> This document is the official AI context for the SoNexus project.
> It contains only approved information and serves as the primary context source for future development stages.

---

# Project

Project Name:
SoNexus

Project Type:
Decentralized High-Quality Audio Streaming Platform

Current Stage:
Recovery Stage: HDS Documentation Recovery

Current Baseline:
Documentation Foundation v1.0

Recovery Point:
GitHub Migration Completed

---

# Project Goals

The goal of SoNexus is to build a decentralized music streaming platform based on modern open technologies.

Main principles:

- High-quality audio
- Hybrid streaming
- Decentralization
- Open architecture
- Modular development
- Documentation-first development

---

# Technology Stack

Frontend

- WordPress
- Musicon Theme
- SoNexus Player
- JavaScript

Backend

- Gateway
- WebTorrent
- IPFS
- Dashboard

Infrastructure

- Docker
- Linux
- Cloudflare Tunnel
- Nginx

---

# Approved Architecture

Player Layer

↓

Gateway

↓

WebTorrent Node

↓

IPFS Storage

↓

Infrastructure

---

# Audio Quality

q=0 Auto

q=1 AAC 320 kbps

q=2 FLAC 16-bit / 44.1 kHz (Default)

q=3 Hi-Res FLAC

---

# Approved ADR

ADR-001
WebTorrent over BitTorrent

ADR-002
IPFS as WebSeed

ADR-003
Docker Platform

ADR-004
Final Architecture

---

# Tool Responsibilities

GitHub
Source of Truth

HDS (ws.sonexus.club)
Development & Integration Environment

AgiFlow
Project Monitoring

ChatGPT
AI Engineering Lead

ChatGPT is responsible for the full engineering cycle of SoNexus: requirements analysis, system and architecture design, code development, code review, refactoring, testing, analysis of test results, documentation work, ADR support, GitHub coordination, Android Workflow command preparation, and guiding the project from idea to working implementation.

---

# Standard Development

Standard Development is the default project process.

Design

↓

Discussion

↓

Approval

↓

Implementation

↓

Verification

↓

Documentation

↓

GitHub

↓

AgiFlow Monitoring

---

# Recovery Stage

Recovery Stage is a temporary process used only when existing infrastructure or code was created without timely documentation.

During Recovery Stage, the project audits the existing implementation, documents the real state, synchronizes GitHub, and then returns to Standard Development.

After Recovery Stage is completed, the project automatically returns to Standard Development.

---

# Baseline First

Before changing existing infrastructure, the AI MUST first establish a Baseline.

Examples:

- Server Baseline;
- Docker Baseline;
- IPFS Baseline;
- Gateway Baseline.

---

# Android Workflow

When working through Android:

- ChatGPT prepares ready-to-run commands.
- The user executes them through @GitHub, @AgiFlow, or on the HDS.
- ChatGPT analyzes the result.
- The next command is prepared only after the result has been analyzed.

---

# Repository Rules

GitHub is the official repository.

All approved documentation must be stored in GitHub.

---

# Documentation Rules

English is the primary language.

Russian duplicates may exist for long documents.

Only approved documents may be updated.

---

# Development Rules

One chat = one project stage.

A new chat begins only after the current stage is fully completed.

Architecture decisions require approval before implementation.

GitHub is updated only after approval.

---

# Naming Rules

Project name:

SoNexus

Never use:

Sonexus

SONEXUS

---

# Current Next Stage

Recovery Stage
HDS Documentation Recovery

---

# Notes

This document must always reflect the current approved state of the project.

After every completed stage this document must be updated.

This file is intended to be uploaded into the ChatGPT File Library and used as the primary project context in future conversations.

---

# Relationship with AI/PROJECT_RULES.md

AI/PROJECT_RULES.md defines mandatory AI rules.

AI_CONTEXT.md provides the current project context and working mode.

If there is any conflict, AI/PROJECT_RULES.md has priority.

---

# Relationship with AI/AGIFLOW.md

Project monitoring rules are defined in AI/AGIFLOW.md.

AgiFlow must not be used to store technical decisions, architecture, ADRs, or project documentation.

---

# Working Objective

The immediate objective is to document the real HDS state and then continue implementation from that baseline.