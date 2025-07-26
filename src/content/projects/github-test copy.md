---
title: "Github Analytics"
description: "A powerful tool for sharing code snippets with additional features. Share beautiful screenshots of your code on your social media platforms. Supports multiple languages and themes."
categories: ["Development", "Design"]
year: "2024"
image: "../../assets/user_auth/GithubAnalytics.png"
langs:
  - lang: "React"
  - lang: "Node.js"
---

O Projeto "Github Dashboard" surgiu como uma ideia de estudar e praticar a autenticação em websites que utilizam o framework Next JS. Para realizar esse projeto escolhi a biblioteca Next Auth, uma biblioteca open source e full stack que oferece uma maneira simples e flexível de adicionar autenticação a aplicativos Next.js, suportando uma variedade de provedores de autenticação, como provedores OAuth (Google, Facebook, GitHub, etc.), provedores de autenticação de senha, JWT e muito mais.

### Tecnologias Utilizadas

- **Linguagens de Programação**: TypeScript
- **Frameworks e Bibliotecas**:
  - shadcn/ui
  - axios
  - json-server
  - next
  - next-auth
  - react-hook-form
  - tailwind
  - zod

### Ideias Principais

- Criar duas páginas responsáveis pelo Login e Registro do Usuário.
- Utilizar opções de login com OAuth usando o Github.
- Armazenar os dados de Registro do Usuário em um db, no caso, foi usado json-server para simular chamadas de registro do usuário.
- Fazer a validação do formulário.
- Criar uma sessão para o usuário e ao fazer o login permitir que o usuário:
  - Faça Logout
  - Veja suas informações (Nome de usuário, Email, Senha)
- Criar um dashboard personalizado para o usuário com algumas informações adicionais.

## Desenvolvimento

O desenvolvimento do projeto foi dividido em 2 etapas, cada uma focada em aspectos específicos do projeto.

1. **Organização e Desenho de Ideias**: Nesta fase, levei um tempo para pensar qual seria o melhor design para as duas principais páginas do projeto, bem como para o dashboard. Realizei uma pesquisa em alguns sites e, em seguida, decidi desenhar um protótipo da tela de login na ferramenta online Excalidraw.

2. **Criação do Projeto e Desenvolvimento**:

   - **Criação do Projeto**: A ideia principal é estudar a biblioteca Next Auth, então escolhi o Next.js (Versão 14.1.0) como framework do React para criar o projeto. Para estilizar o projeto, optei pelo TailwindCSS, um framework que facilita muito o desenvolvimento, especialmente em aspectos como responsividade e manipulação de variáveis globais.
   - **Etapas de Criação das Telas**:
     - Página Inicial
     - Login
     - Registro
     - Dashboard
   - **Adição de Validação nos Campos dos Formulários**: Utilizei Zod e React-Hook-Form para adicionar validação nos campos dos formulários.
   - **Persistência de Dados no json-server**: Utilizei axios para persistir os dados no json-server.
   - **Criação da Sessão do Usuário com Next Auth**: Baseado nas informações de registro do usuário, criei a sessão do usuário.
   - **Exibição dos Dados Acessados na Sessão no Dashboard**.

## Considerações

- Existem alguns inputs que não possuem interação.
- Nem todos os endpoints que o Github permite foram usados na aplicação.
- Não foi utilizado um back end, as informações são armazenadas em arquivo JSON usando json-server.
