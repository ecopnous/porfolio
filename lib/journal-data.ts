export type JournalCategory = "Design" | "Produit" | "Carnet de bord" | "Technologie"

export interface JournalArticle {
  slug: string
  title: string
  excerpt: string
  category: JournalCategory
  date: string
  readTime: string
  number: string
  featured?: boolean
  intro: string
  sections: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }[]
  quote: string
  takeaways: string[]
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "concevoir-des-produits-qui-laissent-une-trace",
    title: "Concevoir des produits qui laissent une trace",
    excerpt:
      "Un produit mémorable ne se résume pas à ses fonctionnalités. Il crée une relation claire, sensible et durable avec les personnes qui l'utilisent.",
    category: "Design",
    date: "18 juin 2026",
    readTime: "6 min",
    number: "01",
    featured: true,
    intro:
      "Les produits qui comptent ne cherchent pas à occuper toute l'attention. Ils font une chose avec justesse, puis laissent à la personne l'espace de poursuivre son intention. C'est dans cette économie de gestes que l'expérience devient mémorable.",
    sections: [
      {
        eyebrow: "Le point de départ",
        title: "Une empreinte, pas une interruption",
        paragraphs: [
          "Nous confondons parfois visibilité et valeur. Pourtant, une interface peut être très présente tout en restant peu utile. À l'inverse, une expérience discrète peut devenir essentielle parce qu'elle réduit l'effort, clarifie un choix ou évite une erreur.",
          "Le travail de conception commence donc avant l'écran : observer le contexte, écouter le vocabulaire des personnes et repérer les moments où une décision devient difficile. Le rôle du produit est de rendre ces moments plus simples, pas de les remplir.",
        ],
      },
      {
        eyebrow: "La méthode",
        title: "Faire de la clarté une matière première",
        paragraphs: [
          "Pour chaque fonctionnalité, une question aide à garder le cap : quelle action humaine cette interface rend-elle plus évidente ? Si la réponse est floue, l'expérience le sera aussi. Cette discipline permet de retirer le superflu avant qu'il ne devienne de la dette.",
          "La cohérence n'est pas une contrainte esthétique. C'est une promesse tenue : les mêmes intentions produisent les mêmes signaux, les mêmes actions et la même qualité d'attention, quelle que soit la partie du produit.",
        ],
      },
      {
        eyebrow: "Ce que l'on retient",
        title: "La relation se construit dans les détails",
        paragraphs: [
          "Un état vide bien écrit, une erreur expliquée avec respect ou une transition qui confirme une action : ces détails ne sont pas décoratifs. Ils construisent progressivement la confiance.",
          "La meilleure expérience ne cherche pas à impressionner à chaque instant. Elle donne le sentiment que tout a été pensé pour que la personne puisse avancer avec assurance.",
        ],
      },
    ],
    quote:
      "Un produit devient désirable lorsqu'il respecte autant le temps que l'intelligence de la personne qui l'utilise.",
    takeaways: [
      "Partir du contexte réel avant de dessiner l'interface.",
      "Retirer ce qui n'aide pas une décision ou une action.",
      "Traiter les micro-interactions comme des signes de confiance.",
    ],
  },
  {
    slug: "ce-que-le-terrain-ma-appris-sur-les-systemes-simples",
    title: "Ce que le terrain m'a appris sur les systèmes simples",
    excerpt:
      "Derrière les interfaces les plus fluides se cache souvent une décision exigeante : enlever tout ce qui n'aide pas vraiment.",
    category: "Carnet de bord",
    date: "02 juin 2026",
    readTime: "4 min",
    number: "02",
    intro: "La simplicité n'arrive jamais par hasard. Elle est le résultat de nombreuses conversations, de compromis assumés et d'un regard honnête sur ce dont les personnes ont réellement besoin.",
    sections: [
      { eyebrow: "Sur le terrain", title: "Observer avant d'organiser", paragraphs: ["Les outils les plus utilisés sont souvent ceux qui épousent déjà les habitudes du terrain. Avant de proposer un système, il faut comprendre les détours qui existent et la raison pour laquelle ils perdurent.", "Cette observation révèle rarement un besoin de plus de fonctions. Elle révèle un besoin de repères plus fiables."] },
      { eyebrow: "Le choix", title: "Réduire sans appauvrir", paragraphs: ["Simplifier ne consiste pas à enlever arbitrairement. Il s'agit de préserver l'essentiel, d'assumer une hiérarchie et de rendre visibles les conséquences d'une action.", "Un système simple laisse moins de place à l'ambiguïté et davantage à l'autonomie."] },
    ],
    quote: "La simplicité est une décision de responsabilité, pas une absence de complexité.",
    takeaways: ["Observer les usages réels.", "Hiérarchiser avant d'ajouter.", "Rendre les conséquences lisibles."],
  },
  {
    slug: "lia-utile-commence-par-une-intention-precise",
    title: "L'IA utile commence par une intention précise",
    excerpt:
      "Avant de choisir un modèle, il faut comprendre l'action humaine que la technologie doit réellement amplifier.",
    category: "Technologie",
    date: "22 mai 2026",
    readTime: "7 min",
    number: "03",
    intro: "L'intelligence artificielle est pertinente lorsqu'elle augmente une capacité concrète : repérer, résumer, comparer ou décider. Sans cette intention, elle devient vite un effet de surface.",
    sections: [
      { eyebrow: "L'intention", title: "Commencer par le geste humain", paragraphs: ["Un modèle n'est pas un produit. La première étape consiste à définir le geste qui mérite d'être accéléré, éclairé ou sécurisé.", "Cette précision évite de construire une démonstration technique à la place d'une expérience utile."] },
      { eyebrow: "La confiance", title: "Rendre l'assistance compréhensible", paragraphs: ["Une recommandation ne vaut que si la personne peut la situer, la vérifier et la contester. L'interface doit donc montrer l'origine de l'aide et préserver la décision finale.", "L'IA la plus élégante est celle qui sait se faire oublier quand elle n'est pas nécessaire."] },
    ],
    quote: "L'automatisation devient utile lorsqu'elle laisse la responsabilité à la bonne personne.",
    takeaways: ["Identifier une action précise.", "Garder la décision humaine visible.", "Évaluer la qualité dans le contexte d'usage."],
  },
  {
    slug: "du-brief-au-produit-garder-le-cap",
    title: "Du brief au produit : garder le cap",
    excerpt:
      "Une méthode concrète pour transformer une ambition floue en décisions de produit cohérentes et mesurables.",
    category: "Produit",
    date: "08 mai 2026",
    readTime: "5 min",
    number: "04",
    intro: "Un bon brief n'est pas une liste de demandes. C'est une direction partagée, assez claire pour guider les arbitrages et assez ouverte pour apprendre au contact du réel.",
    sections: [
      { eyebrow: "Le cadrage", title: "Transformer l'ambition en choix", paragraphs: ["Une ambition devient actionnable quand elle relie un public, un problème et un changement attendu. C'est ce cadre qui permet de décider ce que le produit ne fera pas.", "Les métriques n'arrivent qu'après : elles vérifient la direction, elles ne la remplacent pas."] },
      { eyebrow: "Le rythme", title: "Apprendre sans perdre le fil", paragraphs: ["Chaque itération doit répondre à une question explicite. Sans cela, le produit s'enrichit peut-être, mais il n'avance pas forcément.", "Garder le cap, c'est faire de la place aux retours tout en protégeant l'intention initiale."] },
    ],
    quote: "La stratégie produit est l'art de rester fidèle à une intention tout en apprenant du réel.",
    takeaways: ["Formuler le changement attendu.", "Choisir les questions à tester.", "Mesurer sans perdre le sens."],
  },
]

export function getArticleBySlug(slug: string) {
  return journalArticles.find((article) => article.slug === slug)
}

export function getAdjacentArticles(slug: string) {
  const index = journalArticles.findIndex((article) => article.slug === slug)
  return {
    prev: index > 0 ? journalArticles[index - 1] : null,
    next: index >= 0 && index < journalArticles.length - 1 ? journalArticles[index + 1] : null,
  }
}
