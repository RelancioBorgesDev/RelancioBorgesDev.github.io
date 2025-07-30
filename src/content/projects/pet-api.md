---
title: "Pet Ong"
description: "API REST para gerenciamento de pets disponíveis para adoção, permitindo que organizações (ONGs) cadastrem pets e usuários encontrem animais com base na cidade e em filtros específicos."
github_link: "https://github.com/RelancioBorgesDev/pet-api"
web_link: ""
categories: ["Back-End"]
year: "2025"
banner_image: "../../assets/projects/images/pet-ong.png"
banner_video: ""
langs:
  - lang: "NodeJS"
  - lang: "Fastify"
  - lang: "PrismaORM"
  - lang: "Vitest"
  - lang: "Docker"
---

A 🐾 **Pet Ong** é um projeto completo desenvolvido para facilitar o processo de **adoção responsável de animais**. Através dessa aplicação, **ONGs podem cadastrar pets disponíveis** e **usuários interessados podem encontrá-los com base em localização e filtros específicos**, como porte, idade e nível de energia.

Este sistema foi construído com foco em **escalabilidade, organização de código e boas práticas de arquitetura**, utilizando tecnologias modernas do ecossistema Node.js.

---

### 🛠️ Tecnologias utilizadas

- **Node.js + Fastify**: API leve e performática com tipagem forte via TypeScript.
- **PostgreSQL + Prisma ORM**: Banco relacional robusto com mapeamento objeto-relacional intuitivo.
- **Zod**: Validação segura de dados de entrada (DTOs).
- **JWT**: Autenticação com tokens e controle de acesso por rotas.
- **Vitest**: Testes unitários e e2e, garantindo confiabilidade.
- **Docker + Docker Compose**: Ambiente isolado e pronto para deploy.

---

### 🔍 Principais funcionalidades

- **Cadastro de ONGs** com validação de endereço e WhatsApp.
- **Login seguro** com autenticação por JWT.
- **Cadastro de pets**, vinculando cada animal a uma ONG.
- **Listagem de pets** por cidade (obrigatória) e filtros opcionais.
- **Visualização de detalhes do pet** com informações completas.
- **Contato direto via WhatsApp** com a ONG responsável.

---

### 📦 Organização do projeto

O código foi dividido em camadas seguindo princípios de **Clean Architecture**, separando regras de negócio (`use-cases`), acesso a dados (`repositories`), rotas HTTP e lógica compartilhada. Essa estrutura garante **escalabilidade, reuso e testabilidade** do sistema.

```bash
src
├── use-cases        # Casos de uso: onde a regra de negócio acontece
├── repositories     # Interfaces e implementações com o banco de dados
├── http             # Rotas, controllers e validações
├── lib, utils       # Autenticação, helpers e módulos genéricos
├── env              # Configuração de variáveis de ambiente
└── server.ts        # Inicialização do servidor
```

---

### 💬 Resultado

A Pet API é uma solução completa que **conecta tecnologia com impacto social real**. Ao permitir que ONGs publiquem e gerenciem seus pets com facilidade, e que adotantes encontrem rapidamente o animal ideal, esse projeto contribui para **aumentar as chances de adoção e reduzir o número de animais abandonados**.
