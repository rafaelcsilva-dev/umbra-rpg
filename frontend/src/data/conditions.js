export const conditions = [
  {
    title: "Abalado",
    description:
      "O personagem sofre -1d20 O em testes. Se ficar abalado novamente, em vez disso fica apavorado. Condição de medo.",
  },

  {
    title: "Agarrado",
    description:
      "O personagem fica desprevenido e imóvel, sofre -1d20 em testes de ataque e só pode atacar com armas leves. Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra agarrar tem 50% de chance de acertar o alvo errado. Condição de paralisia.",
  },

  {
    title: "Alquebrado",
    description:
      "O custo em pontos de esforço das habilidades e dos rituais do personagem aumenta em +1. Condição mental.",
  },

  {
    title: "Apavorado",
    description:
      "O personagem sofre -2d20 em testes de perícia e deve fugir da fonte do medo da maneira mais eficiente possível (mas pode parar de fazê-lo assim que a perder de vista ou se afastar mais do que alcance médio). Se não puder, poderá agir, mas não poderá se aproximar voluntariamente da fonte do medo. Condição de medo.",
  },

  {
    title: "Asfixiado",
    description:
      "O personagem não pode respirar. Um personagem asfixiado pode prender seu fôlego por um total de rodadas igual ao seu valor de Vigor +1 e, a cada vez que sofre dano enquanto está nesta condição, reduz este valor em 1. Ao final de seu turno na última dessas rodadas, o personagem fica morrendo.",
  },

  {
    title: "Atordoado",
    description:
      "O personagem fica desprevenido e não pode fazer ações. Condição mental.",
  },

  {
    title: "Caído",
    description:
      "Deitado no chão. O personagem sofre -2d20 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre -5 na Defesa contra ataques corpo a corpo, mas recebe +5 na Defesa contra ataques à distância.",
  },

  {
    title: "Cego",
    description:
      "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre -2d20 em testes de perícias baseadas em Agilidade ou Força. Todos os alvos de seus ataques recebem camuflagem total. Considerado cego enquanto estiver em escuridão total, a menos que algo permita perceber no escuro. Condição de sentidos.",
  },

  {
    title: "Confuso",
    description:
      "O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar o ser mais próximo, ou a si mesmo se estiver sozinho (role apenas o dano); 6) A condição termina e pode agir normalmente. Condição mental.",
  },

  {
    title: "Debilitado",
    description:
      "O personagem sofre -2d20 em testes de Agilidade, Força e Vigor. Se ficar debilitado novamente, em vez disso fica inconsciente.",
  },

  {
    title: "Desprevenido",
    description:
      "Despreparado para reagir. O personagem sofre -5 na Defesa e -1d20 em Reflexos. Fica desprevenido contra inimigos que não possa perceber.",
  },

  {
    title: "Doente",
    description: "Sob efeito de uma doença.",
  },

  {
    title: "Em Chamas",
    description:
      "O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. Pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.",
  },

  {
    title: "Enjoado",
    description:
      "O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada.",
  },

  {
    title: "Enredado",
    description:
      "O personagem fica lento, vulnerável e sofre -1d20 em testes de ataque. Condição de paralisia.",
  },

  {
    title: "Envenenado",
    description:
      "O efeito varia de acordo com o veneno. Pode ser outra condição (ex: fraco ou enjoado) ou dano recorrente (ex: 1d12 por rodada). A descrição do veneno determina a duração. Dano recorrente se acumula.",
  },

  {
    title: "Esmorecido",
    description:
      "O personagem sofre -2d20 em testes de Intelecto e Presença. Condição mental.",
  },

  {
    title: "Exausto",
    description:
      "O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente. Condição de fadiga.",
  },

  {
    title: "Fascinado",
    description:
      "Com a atenção presa em algo. Sofre -2d20 em Percepção e não pode agir, exceto observar aquilo que o fascinou. Qualquer ação hostil anula esta condição. Balançar o personagem para tirá-lo do estado gasta uma ação padrão. Condição mental.",
  },

  {
    title: "Fatigado",
    description:
      "O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto. Condição de fadiga.",
  },

  {
    title: "Fraco",
    description:
      "O personagem sofre -1d20 em testes de Agilidade, Físico e Vigor. Se ficar fraco novamente, em vez disso fica debilitado.",
  },

  {
    title: "Frustrado",
    description:
      "O personagem sofre -1d20 em testes de Intelecto e Presença. Se ficar frustrado novamente, em vez disso fica esmorecido. Condição mental.",
  },

  {
    title: "Imóvel",
    description:
      "Todas as formas de deslocamento do personagem são reduzidas a 0m. Condição de paralisia.",
  },

  {
    title: "Inconsciente",
    description:
      "O personagem fica indefeso e não pode fazer ações, incluindo reações. Balançar o personagem para acordá-lo gasta uma ação padrão.",
  },

  {
    title: "Indefeso",
    description:
      "O personagem é considerado desprevenido, sofre -10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.",
  },

  {
    title: "Lento",
    description:
      "Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e não pode correr ou fazer investidas. Condição de paralisia.",
  },

  {
    title: "Machucado",
    description:
      "O personagem tem menos da metade de seus pontos de vida totais.",
  },

  {
    title: "Morrendo",
    description:
      "Com 0 pontos de vida. Um personagem morrendo fica inconsciente e, se terminar mais de três rodadas na mesma cena, morre. Esta condição se encerra se voltar a ter pelo menos 1 PV.",
  },

  {
    title: "Ofuscado",
    description:
      "O personagem sofre -1d20 em testes de ataque e de Percepção. Condição de sentidos.",
  },

  {
    title: "Paralisado",
    description:
      "O personagem fica imóvel e indefeso e só pode realizar ações puramente mentais. Condição de paralisia.",
  },

  {
    title: "Pasmo",
    description: "O personagem não pode fazer ações. Condição mental.",
  },

  {
    title: "Petrificado",
    description:
      "O personagem fica inconsciente e recebe resistência a dano 10.",
  },

  {
    title: "Sangrando",
    description:
      "Com um ferimento aberto. No início de seus turnos, deve fazer um teste de Vigor (DT 20). Se passar, estabiliza e remove a condição. Se falhar, perde 1d6 PV e continua sangrando.",
  },

  {
    title: "Surdo",
    description:
      "O personagem não pode fazer testes de Percepção para ouvir e sofre -2d20 em testes de Iniciativa. Considerado em condição ruim para lançar rituais. Condição de sentidos.",
  },

  {
    title: "Surpreendido",
    description:
      "Não ciente de seus inimigos. O personagem fica desprevenido e não pode fazer ações.",
  },

  {
    title: "Vulnerável",
    description: "O personagem sofre -5 na Defesa.",
  },
];
