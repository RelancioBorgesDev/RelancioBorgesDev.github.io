---
title: "Plot Semaforo"
description: "Projeto que transforma os sinais de um semáforo em gráficos"
github_link: ""
web_link: ""
categories: ["Aplicação Web"]
year: "2024"
banner_image: "../../assets/projects/images/plot.png"
banner_video: "../../assets/projects/videos/plot.gif"
langs:
  - lang: "Typescript"
  - lang: "Firebase"
  - lang: "Next JS"
---

O objetivo deste projeto foi criar uma interface web que apresenta os dados de um semáforo em diferentes formas visuais, proporcionando uma compreensão clara do seu estado atual. Esta aplicação web interativa permite visualizar os dados de um semáforo em tempo real, utilizando um Raspberry Pi como fonte de dados.

### Desenvolvimento

**Funcionalidades Implementadas:**

1. **Conexão com o Raspberry Pi:**

   - Estabelecemos uma conexão entre a aplicação web e o Raspberry Pi para receber os dados do semáforo em tempo real.

2. **Visualização de Dados:**

   - Desenvolvemos diferentes formas de visualização dos dados do semáforo, incluindo representações gráficas e simbólicas.
   - Os dados são apresentados em formato de array, onde cada valor representa uma cor do semáforo: `{0,0,1}` para vermelho, amarelo e verde, respectivamente.

3. **Atualização em Tempo Real:**
   - Os dados do semáforo são atualizados dinamicamente na interface web, refletindo qualquer alteração no estado do semáforo em tempo real.

**Tecnologias Utilizadas:**

- Next.js: Utilizamos o Next.js como framework principal para o desenvolvimento da aplicação web, aproveitando suas capacidades de renderização rápida e roteamento eficiente.
- Raspberry Pi: Integramos o Raspberry Pi como a fonte de dados do semáforo, fornecendo os dados necessários para a visualização na interface web.
- Firebase para armazenar os dados do semáforo e para ser chamado no front end
