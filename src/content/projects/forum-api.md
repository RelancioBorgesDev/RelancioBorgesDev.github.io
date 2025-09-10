---
title: "Fórum API"
description: "API REST de fórum com NestJS, DDD, Redis e testes com Vitest"
github_link: "https://github.com/RelancioBorgesDev/forum-api"
web_link: ""
categories: ["Back-End"]
year: "2024"
banner_image: "../../assets/projects/images/forum-api.jpg"
banner_video: ""
langs:
  - lang: "Typescript"
  - lang: "NestJS"
  - lang: "Prisma"
  - lang: "Redis"
  - lang: "Vitest"
  - lang: "Docker"
---

Uma API REST robusta construída com **NestJS**, seguindo os princípios de **Clean Architecture** e **Domain-Driven Design (DDD)**.  
A aplicação simula um fórum com funcionalidades modernas como notificações assíncronas, sistema de anexos, cache com Redis, testes completos com Vitest e persistência via PostgreSQL. Tudo isso containerizado com Docker para facilitar o ambiente de desenvolvimento.

---

## 🧱 Estrutura do Projeto

A arquitetura está dividida de forma clara em camadas, como mostra a imagem:

- `core/`: Camada com tipos genéricos, entidades, erros e repositórios abstratos. Ideal para isolar regras de domínio.
- `domain/`: Divide o domínio em `forum` e `notification`, com pastas `application` (casos de uso) e `enterprise` (entidades e regras de negócio).
- `infra/`: Implementações concretas, incluindo:
  - `auth/`: Autenticação e JWT
  - `cache/`: Mecanismos de cache com Redis
  - `cryptography/`: Hashing e encriptação
  - `database/`: Acesso ao banco usando Prisma
  - `http/`: Camada de controladores e rotas
  - `events/`: Eventos e observadores da aplicação

---

## ⚙️ Tecnologias e Ferramentas

- **NestJS** – Framework principal baseado em Node.js
- **Vitest** – Testes unitários e E2E
- **Prisma ORM** – Abstração e manipulação do banco PostgreSQL
- **Redis** – Cache de perguntas para melhorar performance
- **Cloudinary** – Upload e armazenamento de arquivos e anexos
- **Docker** – Containerização da aplicação
- **Node.js** – Suporte até a versão 20

---

## 🚀 Funcionalidades

- ✅ Criação, listagem e paginação de perguntas
- ✅ Sistema de respostas vinculado a cada pergunta
- ✅ Upload de anexos (imagens, vídeos, áudios)
- ✅ Cache de detalhes das perguntas com Redis
- ✅ Envio de notificações assíncronas ao usuário
- ✅ Testes unitários, E2E e cobertura com Vitest
- ✅ Separação de banco de dados para testes

---

## 🧪 Scripts disponíveis

```json
"build": "nest build",
"format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
"start": "nest start",
"start:dev": "nest start --watch",
"start:debug": "nest start --debug --watch",
"start:prod": "node dist/main",
"lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
"test": "vitest run",
"test:watch": "vitest",
"test:cov": "vitest run --coverage",
"test:debug": "vitest --inspect-brk --inspect --logHeapUsage --threads=false",
"test:e2e": "vitest run --config ./vitest.config.e2e.ts",
"test:e2e:watch": "vitest --config ./vitest.config.e2e.ts"
```
