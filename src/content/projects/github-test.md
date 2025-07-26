---
title: "Code Screenshot"
description: "A powerful tool for sharing code snippets with additional features. Share beautiful screenshots of your code on your social media platforms. Supports multiple languages and themes."
categories: ["Development", "Design"]
year: "2024"
image: "../../assets/user_auth/GithubAnalytics.png"
langs:
  - lang: "React"
  - lang: "Node.js"
---

O projeto **GitHub Dashboard** surgiu como uma iniciativa para estudar e praticar **autenticação em websites** utilizando o framework **Next.js**. Para isso, foi escolhida a biblioteca **NextAuth**, uma solução **open-source** e **full-stack** que fornece uma maneira simples e flexível de adicionar autenticação a aplicações Next.js.

Essa biblioteca suporta uma variedade de provedores, como:

- Provedores OAuth (GitHub, Google, Facebook, etc.)
- Autenticação baseada em senha
- JWT (JSON Web Tokens)
- Entre outros

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Frameworks e Bibliotecas**:

  - [`next`](https://nextjs.org/)
  - [`next-auth`](https://next-auth.js.org/)
  - [`shadcn/ui`](https://ui.shadcn.com/)
  - [`tailwind`](https://tailwindcss.com/)
  - [`axios`](https://axios-http.com/)
  - [`zod`](https://zod.dev/)
  - [`react-hook-form`](https://react-hook-form.com/)
  - [`json-server`](https://github.com/typicode/json-server)

---

## 💡 Ideias Principais

- Criar páginas de **Login** e **Registro**
- Autenticação via **OAuth** com GitHub
- Armazenar dados de registro com `json-server`
- Validar formulários com **Zod** e **React Hook Form**
- Manter sessão do usuário com **NextAuth**
- Permitir que o usuário:

  - Faça **logout**
  - Visualize informações como: Nome, Email, Senha

- Criar um **Dashboard personalizado** com dados adicionais

---

## 🧱 Estrutura de Diretórios Exemplo

```bash
/src
  /pages
    index.tsx
    login.tsx
    register.tsx
    dashboard.tsx
  /components
    Form.tsx
    Input.tsx
    Header.tsx
  /lib
    auth.ts
    api.ts
```

---

## ⚙️ Desenvolvimento

O projeto foi dividido em **duas etapas principais**:

### 1. 🧠 Organização e Design

- Pesquisa e definição do layout
- Criação de protótipos com [Excalidraw](https://excalidraw.com/)
- Foco em usabilidade e fluidez da experiência de login

### 2. 💻 Implementação e Codificação

#### 🚀 Criação do Projeto

```bash
npx create-next-app@latest github-dashboard
cd github-dashboard
npm install next-auth axios zod react-hook-form json-server
```

#### ✨ Desenvolvimento das Telas

- Página Inicial
- Login
- Registro
- Dashboard

#### ✅ Validação de Formulários

```ts
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
```

#### 💾 Persistência de Dados

```ts
await axios.post("http://localhost:3000/users", {
  email,
  password,
});
```

#### 🔐 Sessão com NextAuth

```ts
// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
```

---

## 📋 Considerações Finais

- Alguns inputs não possuem validação/interação completa.
- A integração com a API do GitHub foi limitada (uso parcial dos endpoints disponíveis).
- O projeto não possui um back-end real: os dados são armazenados localmente via `json-server`.

---