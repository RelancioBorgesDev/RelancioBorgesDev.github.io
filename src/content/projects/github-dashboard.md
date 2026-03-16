---
title: "Github Dashboard"
description: "Projeto que simula dashboard para o github"
github_link: "https://github.com/RelancioBorgesDev/UserAuth"
web_link: ""
categories: ["Front-End"]
year: "2024"
banner_image: "../../assets/projects/images/github-dashboard.png"
banner_video: "../../assets/projects/videos/github-dashboard.gif"
langs:
  - lang: "TypeScript"
  - lang: "React"
  - lang: "Next JS"
  - lang: "Next Auth"
  - lang: "Tailwind"
---

O projeto **Github Dashboard** nasceu da iniciativa de aprofundar meus conhecimentos em autenticação web com **Next.js**. A principal proposta foi integrar **NextAuth.js**, uma poderosa biblioteca open source que simplifica a implementação de autenticação full stack, oferecendo suporte a diversos provedores como GitHub, Google, e autenticação com credenciais (e-mail/senha).

O sistema simula o processo completo de registro e login de usuários, utilizando autenticação OAuth com GitHub, além de armazenar dados localmente com `json-server`. O projeto também inclui um painel (dashboard) personalizado para cada usuário autenticado.

---

### 💡 Principais Funcionalidades

- Páginas de **Login** e **Registro** com design responsivo.
- Autenticação com **OAuth (GitHub)** via NextAuth.
- Registro de usuário com persistência dos dados simulada via `json-server`.
- Validação de formulário com **Zod** e **React Hook Form**.
- Sessão autenticada com dados acessíveis no Dashboard:
  - Visualização do nome de usuário, e-mail e senha (simulada).
  - Possibilidade de logout.

- Dashboard estilizado com componentes visuais personalizados.

---

### ⚙️ Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Framework principal**: Next.js (v14.1.0)
- **Bibliotecas e Ferramentas**:
  - NextAuth.js
  - Tailwind CSS
  - React Hook Form
  - Zod
  - Axios
  - json-server
  - shadcn/ui

---

### 🛠️ Etapas do Desenvolvimento

1. **Planejamento e prototipagem**
   Iniciei o projeto com a definição da estrutura de páginas e layout. Usei o **Excalidraw** para desenhar um esboço da interface de login e dashboard, inspirando-me em modelos modernos de UI/UX.

2. **Implementação técnica**
   - Criação das rotas principais: Home, Login, Registro e Dashboard.
   - Configuração do Tailwind CSS para estilo responsivo e acessível.
   - Implementação da lógica de autenticação com **NextAuth**.
   - Integração com `json-server` para simular chamadas de API.
   - Validação dos formulários de autenticação com **React Hook Form** + **Zod**.
   - Renderização condicional dos dados da sessão no Dashboard.

---

### 📌 Observações

- O projeto é **100% front-end**, com persistência local via `json-server`.
- Alguns inputs estão desativados ou sem ações de backend, pois o foco foi o estudo de autenticação e sessões com NextAuth.
- Nem todos os endpoints da API do GitHub foram utilizados, mas a estrutura permite fácil expansão futura.

---
