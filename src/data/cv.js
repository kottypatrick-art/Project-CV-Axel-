/**
 * TOUT le contenu textuel et structurel du portfolio de Paul Axel KOTTY.
 * Modifiez ce fichier pour mettre à jour vos coordonnées, expériences,
 * compétences ou formations sans toucher au code des composants React.
 */

export const cvData = {
  identity: {
    name: "KOTTY Paul Axel",
    initials: "PK",
    title: "Téléconseiller / Conseiller Clientèle",
    tagline: "« Au service du client. Passionné d'automobile. »",
    location: "Koumassi, Abidjan – Côte d'Ivoire",
    age: "29 ans",
    phone: "+225 07 59 08 29 62",
    phoneRaw: "+2250759082962",
    email: "kottypaulaxel@gmail.com",
    whatsappUrl: "https://wa.me/2250759082962",
    photoUrl: "/photo.jpg",
    cvUrl: "/cv.pdf",
    statusBadge: "Disponible pour opportunités automobile",
    currentBadge: "INTELCIA CI • En poste actif",
  },

  navigation: [
    { id: "hero", label: "Accueil" },
    { id: "a-propos", label: "À propos" },
    { id: "experience", label: "Expérience" },
    { id: "competences", label: "Compétences" },
    { id: "formation", label: "Formation" },
    { id: "projet", label: "Projets" },
    { id: "contact", label: "Contact" },
  ],

  hero: {
    badge: "Secteur Automobile • Relation Client d'Excellence",
    description:
      "Conseiller clientèle rigoureux en centre de contact omnicanal chez INTELCIA Côte d'Ivoire. Je combine maîtrise stricte des indicateurs KPI (DMT, FCR, qualité), sens aigu de la diplomatie et affinité pour l'univers automobile pour représenter dignement les plus grandes marques auprès d'une clientèle exigeante.",
    chips: [
      { icon: "MapPin", text: "Koumassi, Abidjan • CI" },
      { icon: "Clock", text: "29 ans • Disponible" },
      { icon: "Layers", text: "Téléphone • Chat • Email • CRM" },
    ],
    ctaContact: "Me contacter",
    ctaResume: "Télécharger mon CV",
  },

  about: {
    badge: "Vision & Engagement",
    quote:
      "« Téléconseiller expérimenté, actuellement chez INTELCIA Côte d'Ivoire (Abidjan) depuis février 2026. Rigoureux, à l'écoute et doté d'un fort sens du service, je gère avec professionnalisme des situations client sensibles par téléphone, chat et email. Curieux des nouvelles technologies, notamment de l'intelligence artificielle, je souhaite mettre mes compétences relationnelles et techniques au service du secteur automobile, un domaine qui me passionne. »",
    body:
      "Chaque point de contact avec un client est l'occasion de valoriser l'image de marque d'un constructeur ou d'un concessionnaire. Qu'il s'agisse d'un diagnostic d'urgence, d'une prise de rendez-vous après-vente, ou de la prise en charge d'une réclamation complexe, mon engagement repose sur l'empathie active, le respect scrupuleux des protocoles et une résolution rapide au premier contact.",
    stats: [
      {
        number: "2",
        label: "Expériences clés en relation client",
        subtext: "INTELCIA & NATURALIS",
      },
      {
        number: "3",
        label: "Canaux omnicanaux maîtrisés",
        subtext: "Téléphone • Chat • Email",
      },
      {
        number: "2025",
        label: "En centre d'appels",
        subtext: "Pratique continue & rigueur",
      },
    ],
    automotiveFocus: {
      title: "Pourquoi le secteur automobile ?",
      description:
        "Le secteur automobile exige une rigueur opérationnelle sans faille : gestion des urgences, compréhension des attentes des conducteurs, précision des informations techniques et fidélisation haut de gamme. C'est précisément l'environnement où mon sens du détail, ma passion mécanique et ma discipline des KPI apportent une valeur immédiate.",
    },
  },

  experiences: [
    {
      id: "intelcia",
      role: "Téléconseiller / Conseiller Clientèle",
      company: "INTELCIA CÔTE D'IVOIRE",
      location: "Abidjan",
      period: "Depuis Février 2026",
      isCurrent: true,
      badge: "En poste",
      missions: [
        "Réception et émission d'appels : information et assistance client de premier niveau",
        "Gestion de la relation client à distance (téléphone, chat, email)",
        "Suivi rigoureux des dossiers via outils CRM",
        "Respect des indicateurs de performance (KPI, qualité, temps de traitement)",
        "Montée en compétences continue, adaptation rapide aux nouveaux outils et process",
      ],
    },
    {
      id: "naturalis",
      role: "Téléconseiller",
      company: "NATURALIS",
      location: "",
      period: "Août 2025 – Décembre 2025",
      isCurrent: false,
      badge: null,
      missions: [
        "Réception et émission d'appels : information et assistance",
        "Accompagnement des clients sur des produits médicaux sensibles",
        "Résolution rapide de problèmes techniques et administratifs",
        "Suivi et mise à jour des dossiers clients via CRM",
        "Respect des indicateurs : temps de traitement, satisfaction, qualité d'appel",
        "Gestion de situations complexes avec calme et professionnalisme",
      ],
    },
    {
      id: "projet-web",
      role: "Auto-formation & Réalisation Digitale",
      company: "Projet Indépendant",
      location: "En parallèle",
      period: "Depuis 2024",
      isCurrent: false,
      badge: null,
      missions: [
        "Formation autodidacte approfondie en informatique (programmation, outils numériques)",
        "Conception et développement d'un site internet pour une entreprise locale",
        "Aisance numérique supérieure permettant une adaptation immédiate aux logiciels CRM et process digitaux",
      ],
    },
  ],

  skills: {
    badge: "Savoir-Faire & Posture",
    title: "Compétences clés",
    subtitle:
      "Évaluations qualitatives concrètes : Maîtrisé (3/3), Solide (2/3) et En progression (1/3).",
    categories: [
      {
        id: "relation-client",
        title: "Relation Client",
        icon: "Headphones",
        items: [
          { name: "Appels entrants et sortants", level: "Maîtrisé", score: 3 },
          { name: "Techniques de communication téléphonique", level: "Maîtrisé", score: 3 },
          { name: "Respect des objectifs (KPI, qualité, temps de réponse)", level: "Maîtrisé", score: 3 },
          { name: "Gestion de situations sensibles & réclamations", level: "Solide", score: 2 },
          { name: "Gestion multicanale (Téléphone, Chat, Email)", level: "Maîtrisé", score: 3 },
        ],
      },
      {
        id: "outils-digital",
        title: "Outils & Digital",
        icon: "Laptop",
        items: [
          { name: "CRM (prise en main rapide, ticketing)", level: "Maîtrisé", score: 3 },
          { name: "Word, Excel, PowerPoint & Google Sheets", level: "Maîtrisé", score: 3 },
          { name: "Très bonne orthographe & rédaction soignée", level: "Maîtrisé", score: 3 },
          { name: "Bases de programmation & création web", level: "Solide", score: 2 },
          { name: "Sensibilité Intelligence Artificielle & automatisation", level: "Solide", score: 2 },
        ],
      },
      {
        id: "savoir-etre",
        title: "Savoir-Être",
        icon: "HeartHandshake",
        items: [
          { name: "Patience et calme olympien", level: "Maîtrisé", score: 3 },
          { name: "Organisation et rigueur méthodique", level: "Maîtrisé", score: 3 },
          { name: "Esprit d'équipe & solidarité", level: "Maîtrisé", score: 3 },
          { name: "Adaptabilité & réactivité opérationnelle", level: "Solide", score: 2 },
          { name: "Gestion du stress & ouverture à l'apprentissage", level: "Maîtrisé", score: 3 },
        ],
      },
    ],
    languages: [
      {
        code: "FR",
        language: "Français",
        level: "Langue maternelle",
        detail: "Diction soignée, élocution fluide & orthographe irréprochable",
      },
      {
        code: "EN",
        language: "Anglais",
        level: "Niveau intermédiaire (B1)",
        detail: "En cours d'apprentissage actif pour accueil de clientèle internationale",
      },
    ],
  },

  education: {
    badge: "Socle & Diplômes",
    title: "Formation & Diplômes",
    subtitle:
      "Un socle scientifique et informatique complété par des certifications en relation client et marketing.",
    items: [
      {
        degree: "Licence 2 Informatique",
        school: "UNISAT",
        period: "2019 – 2022",
        description:
          "Développement de l'esprit d'analyse, logique algorithmique, compréhension des architectures de données et aisance avec les systèmes d'information.",
      },
      {
        degree: "Baccalauréat Scientifique (Série D)",
        school: "Lycée Moderne de Grand-Bassam",
        period: "2018",
        description:
          "Raisonnement scientifique, méthodologie de travail rigoureuse et esprit de synthèse appliqué aux problèmes complexes.",
      },
      {
        degree: "Marketing Digital",
        school: "OpenClassrooms",
        period: "2023 (En ligne)",
        description:
          "Compréhension des parcours clients numériques, analyse des points de contact, techniques de fidélisation et valorisation de marque en ligne.",
      },
      {
        degree: "Communication commerciale",
        school: "Coursera",
        period: "3 mois (En ligne)",
        description:
          "Techniques d'écoute active, posture de persuasion éthique, argumentation commerciale et traitement des objections clients complexes.",
      },
    ],
  },

  project: {
    badge: "Initiative & Réalisation",
    title: "Projet & Centres d'intérêt",
    subtitle:
      "Preuve d'autonomie technique et curiosité constante qui nourrissent ma performance au quotidien.",
    showcase: {
      title: "Conception & Développement d'un site internet pour une entreprise locale",
      urlLabel: "https://entreprise-locale.ci • Réalisé par Paul Axel KOTTY",
      description:
        "Conception complète de l'architecture, du design et du code pour moderniser la visibilité d'un commerce ivoirien. Optimisation mobile, rapidité de chargement et intégration d'un canal direct de prise de rendez-vous et contact client.",
      placeholderText: "Emplacement pour la capture d'écran et le lien du projet",
      tags: [
        "HTML5 / CSS3",
        "JavaScript",
        "Design Responsive",
        "Expérience Utilisateur",
        "Prise de contact directe",
      ],
    },
    interests: [
      {
        title: "Passion Automobile",
        icon: "Car",
        description:
          "Suivi passionné de l'actualité des constructeurs, technologies hybrides et électriques, finitions intérieures et standards des concessions de luxe.",
      },
      {
        title: "Nouvelles Technologies & IA",
        icon: "Cpu",
        description:
          "Veille constante sur l'intelligence artificielle générative et son utilisation pour assister les conseillers clientèle et fluidifier le traitement CRM.",
      },
      {
        title: "Lecture de développement personnel",
        icon: "BookOpen",
        description:
          "Livres axés sur la maîtrise de soi, la psychologie comportementale, la communication bienveillante et la productivité personnelle.",
      },
      {
        title: "Débats & Échanges oraux",
        icon: "MessageSquare",
        description:
          "Entraînement régulier à l'art oratoire, argumentation structurée, écoute active des points de vue opposés et recherche de consensus constructif.",
      },
    ],
  },

  contact: {
    badge: "Opportunités Professionnelles",
    headline: "Parlons de votre prochain recrutement.",
    subtitle:
      "Vous recherchez un conseiller rigoureux, éloquent et immédiatement opérationnel pour votre concession, votre hotline automobile ou votre marque ? Contactez-moi directement.",
    methods: [
      {
        type: "phone",
        title: "Appel Direct",
        value: "+225 07 59 08 29 62",
        href: "tel:+2250759082962",
        hint: "Disponible pour un entretien téléphonique",
        icon: "Phone",
      },
      {
        type: "email",
        title: "Email Professionnel",
        value: "kottypaulaxel@gmail.com",
        href: "mailto:kottypaulaxel@gmail.com",
        hint: "Réponse assurée sous 24h ouvrées",
        icon: "Mail",
      },
      {
        type: "whatsapp",
        title: "WhatsApp Direct",
        value: "+225 07 59 08 29 62",
        href: "https://wa.me/2250759082962",
        hint: "Discussion et prise de contact instantanée",
        icon: "MessageCircle",
      },
    ],
    details: {
      location: "Koumassi, Abidjan – Côte d'Ivoire",
      availability: "Immédiate pour opportunités automobile",
      cvLabel: "Télécharger la version PDF du CV",
      cvFileName: "CV_Paul_Axel_KOTTY.pdf",
    },
    form: {
      title: "Prise de contact rapide",
      description:
        "Que ce soit pour un poste en centre de relation client automobile, en concession ou pour une mission spécifique, je serai ravi d'échanger avec vous.",
      fields: {
        name: { label: "Votre Nom & Entreprise", placeholder: "Ex. Marc Dupont (Concession Automobile)" },
        email: { label: "Votre Adresse Email", placeholder: "recrutement@entreprise.com" },
        subject: { label: "Objet du message", placeholder: "Opportunité Conseiller Clientèle Automobile" },
        message: { label: "Votre Message", placeholder: "Bonjour Paul Axel, nous aimerions échanger sur un poste..." },
      },
      submitLabel: "Envoyer via Email",
    },
  },

  footer: {
    copyright: "© 2026 Paul Axel KOTTY",
    role: "Téléconseiller / Conseiller Clientèle Automobile",
    rights: "Tous droits réservés.",
    backToTopLabel: "Retour en haut",
  },
};
