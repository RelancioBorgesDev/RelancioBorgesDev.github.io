---
title: "Quiz"
description: "Projeto de um quiz sobre o livro sociedade do cansaço."
github_link: "https://github.com/RelancioBorgesDev/Quiz"
web_link: ""
categories: ["Aplicação Web"]
year: "2024"
banner_image: "../../assets/projects/images/quiz-banner.png"
banner_video: "../../assets/projects/videos/quiz-banner.gif"
langs:
  - lang: "Typescript"
  - lang: "Next JS"
  - lang: "Tailwind"
  - lang: "Framer Motion"
  - lang: "shadcn/ui"
---

A ideia deste projeto foi desenvolver um quiz que tem como base criar uma forma de fazer a turma interagir a com a apresentação sobre o Livro "Sociedade do Cansaço" de Byung-Chul Han. O projeto se desenvolveu durante a aula de Humanidades, o problema era além de realizar uma apresentação ainda tinhamos que criar uma forma de fazer com que toda a turma de alguma forma interagisse com a apresentação, então sabendo desse problema dei a ideia para o grupo de desenvolver um quiz com algumas perguntas sobre a nossa apresentação e no final todos poderiam ver o quanto eles prestaram atenção durante a nossa apresentação.

### Desenvolvimento

#### Front-end

O front-end foi desenvolvido usando React (Next JS + Typescript). A aplicação consiste em 3 páginas principais

- "/": Página inicial onde existem 2 opções, jogar e menu de opções.
- "/games": Página onde é exibida os jogos, no caso so existe a opção de multipla escolha
- "/games/multipla-escolha": Página onde começa o quiz.

O quiz consiste em 10 perguntas, existem verificação se o usuário selecionou a questão ou não para ele poder avançar no quiz. No final existe um feedback que apresenta qual a pergunta, qual a resposta do usuário selecionou e qual a resposta correta, é apresentado tambem quantas questões foram corretas e qual a porcentagem de acerto.

A perguntas estão armazenadas em um JSON. Poderia ter sido utilizado a "API Routes" do Next JS, porém como a ideia do projeto era ser algo simples e menos complicado foi escrito em um JSON.

## Considerações

- A página de jogos, foi feita com base no menu de jogos do jogo "Overwatch".

- As animações foram feitas usando framer-motion.
