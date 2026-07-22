# Sonexus Project Passport

## Название проекта

Sonexus

## Описание

Sonexus — децентрализованная аудиоплатформа для потокового воспроизведения высококачественной музыки.

Основная идея проекта:

- пользователь получает аудио через P2P WebTorrent WebRTC;
- IPFS используется как дополнительный источник данных;
- домашний сервер работает как постоянный WebTorrent Seeder;
- WordPress является пользовательским интерфейсом;
- Sonexus Player обеспечивает воспроизведение.

---

# Архитектура


User
|
WordPress + Musicon
|
Sonexus Player
|
+----------------+
| |
WebTorrent IPFS
WebRTC WebSeed
| |
+----------------+
|
Sonexus Node

---

# Основные компоненты

## Frontend

Отвечает за:

- сайт;
- пользовательский интерфейс;
- управление воспроизведением.

Состав:

- WordPress
- Musicon Theme
- Sonexus Player

---

## Backend

Отвечает за:

- обработку запросов;
- P2P-раздачу;
- хранение метаданных.

Состав:

- Gateway
- WebTorrent Node
- IPFS Node
- Dashboard

---

## Infrastructure

Среда работы:

- Linux Server
- Docker
- Cloudflare Tunnel
- PostgreSQL

---

# Поддерживаемое качество

## q=1

AAC 320 kbps

## q=2

FLAC 16-bit / 44.1 kHz

Default quality.

## q=3

Hi-Res FLAC 24-bit

---

# Текущий статус

Development stage.

Реализовано:

- GitHub repository
- Docker environment
- WebTorrent node prototype
- IPFS integration prototype
- WordPress integration concept

В разработке:

- Sonexus Gateway
- Sonexus Dashboard
- Player seamless switching
- Production deployment

---

# Принципы разработки

- простая архитектура;
- пошаговая реализация;
- документирование решений;
- сначала рабочий прототип, затем оптимизация.
