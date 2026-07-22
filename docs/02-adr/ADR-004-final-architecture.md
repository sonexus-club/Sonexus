# ADR-004: Sonexus Final Architecture

## Status

Accepted

## Date

2026-07-22

---

# Context

Sonexus требует архитектуры, которая позволяет:

- передавать высококачественное аудио;
- минимизировать нагрузку на центральный сервер;
- использовать P2P WebRTC;
- обеспечить резервный источник данных;
- сохранить возможность масштабирования.

После анализа вариантов утверждена гибридная архитектура:

WebTorrent + IPFS + Gateway + Player.

---

# Decision

Sonexus использует следующую архитектуру:


           User

              |

    WordPress + Musicon

              |

      Sonexus Player

              |

         Gateway

              |

    +---------+---------+

    |                   |

WebTorrent Node IPFS Node
   |                   |

    +---------+---------+

              |

         Storage


---

# Components

## Player

Назначение:

Клиентское воспроизведение аудио.

Отвечает за:

- получение ссылки;
- выбор качества;
- запуск потока;
- интеграцию с Plyr.

---

## Gateway

Назначение:

Единая точка входа.

Отвечает за:

- генерацию URL;
- проверку параметров;
- передачу метаданных;
- интеграцию Frontend и Backend.

---

## WebTorrent Node

Назначение:

P2P раздача аудио.

Отвечает за:

- WebRTC соединения;
- сидирование файлов;
- передачу потоков пользователям.

---

## IPFS Node

Назначение:

Децентрализованное хранение.

Используется как:

- WebSeed;
- резервный источник;
- источник восстановления данных.

---

## Storage

Хранит:

- аудиофайлы;
- метаданные;
- CID;
- InfoHash;
- информацию об альбомах.

---

# Infrastructure

Используем:

- Linux Server;
- Docker;
- Cloudflare Tunnel;
- PostgreSQL.

---

# URL Standard

Основной формат:


https://ws.sonexus.club/s?h=INFOHASH&t=TRACK&c=CID&q=QUALITY

Параметры:

h — WebTorrent InfoHash

t — индекс трека

c — IPFS CID

q — качество

---

# Quality IDs


q=1 AAC 320 kbps
q=2 FLAC 16-bit / 44.1 kHz (Default)
q=3 Hi-Res FLAC 24-bit

---

# Rejected Alternatives

## Traditional CDN

Отклонено:

- высокая стоимость;
- отсутствие P2P;
- зависимость от одного сервера.

---

## Classic BitTorrent

Отклонено:

- требует отдельного клиента;
- хуже подходит для браузера.

---

## HLS Streaming

Отклонено:

- не соответствует цели bit-perfect аудио;
- усложняет работу с FLAC.

---

# Consequences

Преимущества:

- распределение нагрузки;
- масштабирование количеством узлов;
- использование WebRTC прямо в браузере;
- сохранение качества аудио.

Недостатки:

- сложнее разработка;
- требуется управление P2P-инфраструктурой.

---

# Final Decision

Архитектура Sonexus:

Player → Gateway → Node → Storage → Infrastructure

утверждена как основная архитектура проекта.
