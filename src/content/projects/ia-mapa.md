---
title: "IAMapa"
description: "Projeto que utiliza de algoritimos de busca para encontrar o melhor caminho"
github_link: "https://github.com/RelancioBorgesDev/IA-Mapa"
web_link: ""
categories: ["Fullstack"]
year: "2023"
banner_image: "../../assets/projects/images/ia-mapa.png"
banner_video: "../../assets/projects/videos/ia-mapa.gif"
langs:
  - lang: "React"
  - lang: "Spring"
  - lang: "Java"

---

A ideia deste projeto foi desenvolver um exemplo de um "Google Maps" usando os algoritmos de busca. O projeto fez parte dos estudos de Inteligência Artificial durante meu curso de Engenharia da Computação.

### Desenvolvimento

#### Back-end

O back-end foi desenvolvido usando Java/Spring. A ideia do back-end era colocar como endpoints os algoritmos de busca, e cada endpoint vem acoplado com qual o continente a pessoa gostaria de buscar o caminho e quais os pontos de partida e chegada.

O back-end apresenta 3 endpoints principais:

      - GET /api/algoritmos/${algoritmo}/${continente}/${inicio}/${chegada} (Retorna o caminho em formato de JSON)
      - Exemplo de chamada: /api/algoritmos/amplitude/americano/Guatemala/Brasil
      - GET /api/paises/ (Retorna todos os países)
      - GET /api/metodos/ (Retorna todos os possíveis métodos)

Estes endpoints fornecem informações sobre os algoritmos disponíveis, os países suportados e os métodos de busca disponíveis, respectivamente.

#### Front-end

O front-end foi desenvolvido usando React (Vite + Typescript). A ideia era de alguma maneira mostrar a eficiência dos métodos de busca, então, como um pensamento diferente de aplicar os métodos, resolvi desenvolver uma forma mais simplificada de um "Google Maps", onde o usuário pode escolher os pontos de partida até o ponto de chegada e dentro de um mapa exibir um caminho.

## Considerações

- O projeto não utiliza um banco de dados, então as relações de países, suas fronteiras e outros pontos que seriam buscados em um banco de dados, estão escritos em arquivos de texto.
- Por conta de não existir a busca de dados em um banco de dados, pode acontecer de alguns países ficarem faltando ou algo do tipo.
- Os métodos não foram feitos para serem 100% reais assim como aplicativos como o Google Maps; os caminhos às vezes podem parecer algo absurdo.
