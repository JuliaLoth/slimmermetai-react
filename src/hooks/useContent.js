import { useState, useEffect } from 'react';

// Default content fallbacks
const defaultContent = {
  home: {
    title: "Slimmer Met AI",
    subtitle: "Ontdek hoe Artificial Intelligence jouw business en persoonlijke groei kan versnellen.",
    heroDescription: "Van praktische trainingen tot strategisch advies.",
    services: [
      {
        icon: "🎯",
        title: "AI Trainingen",
        description: "Praktische workshops en trainingen om AI tools effectief in te zetten in jouw dagelijkse werk en bedrijfsprocessen.",
        link: "/trainingen-advies"
      },
      {
        icon: "💡",
        title: "Strategisch Advies",
        description: "Persoonlijk advies over AI implementatie, automatisering en digitale transformatie voor jouw specifieke situatie.",
        link: "/trainingen-advies"
      },
      {
        icon: "📈",
        title: "Business Optimalisatie",
        description: "Ontdek hoe AI jouw bedrijfsprocessen kan verbeteren, kosten kan besparen en nieuwe kansen kan creëren.",
        link: "/trainingen-advies"
      }
    ]
  },
  trainingenAdvies: {
    title: "Trainingen & Advies",
    subtitle: "Persoonlijke begeleiding en praktische trainingen om AI optimaal in te zetten voor jouw specifieke doelen en uitdagingen.",
    services: [
      {
        icon: "🎓",
        title: "AI Trainingen & Workshops",
        tagline: "Van beginner tot expert niveau",
        description: "Praktische, hands-on trainingen waarin je leert hoe je AI tools zoals ChatGPT, Claude, en andere AI-platforms effectief kunt inzetten in jouw dagelijkse werk.",
        features: [
          "Prompt engineering en optimalisatie",
          "AI tools voor productiviteit en creativiteit",
          "Automatisering van repetitieve taken",
          "AI voor content creatie en marketing",
          "Praktijkgericht met echte use cases"
        ]
      },
      {
        icon: "💼",
        title: "Strategisch AI Advies",
        tagline: "Implementatie en transformatie",
        description: "Persoonlijk advies over hoe AI jouw bedrijf of carrière naar het volgende niveau kan tillen. Van strategie tot implementatie, we helpen je de juiste stappen te zetten.",
        features: [
          "AI readiness assessment",
          "Strategische implementatieplannen",
          "ROI analyse en business case ontwikkeling",
          "Change management en teamtraining",
          "Ongoing support en optimalisatie"
        ]
      },
      {
        icon: "🚀",
        title: "Persoonlijke Coaching",
        tagline: "One-on-one begeleiding",
        description: "Individuele coaching sessies waarin we samen jouw specifieke AI doelen en uitdagingen aanpakken. Perfect voor professionals die snel vooruitgang willen boeken.",
        features: [
          "Gepersonaliseerde leertrajecten",
          "Directe feedback en optimalisatie",
          "Flexibele planning en locatie",
          "Focus op jouw specifieke doelen",
          "Praktische implementatie support"
        ]
      }
    ]
  },
  overMij: {
    name: "Julia Loth",
    role: "AI Training & Advies Specialist",
    bio: "Ik help professionals en bedrijven om de kracht van Artificial Intelligence te benutten voor productiviteit, innovatie en groei. Met praktische training en strategisch advies maak ik AI toegankelijk voor iedereen.",
    email: "julia@loth.nl",
    quote: "De toekomst behoort toe aan degenen die AI niet zien als vervanging, maar als een krachtige partner in hun groei en succes.",
    missionItems: [
      {
        icon: "🎯",
        title: "Toegankelijke AI",
        description: "AI hoeft niet complex te zijn. Ik maak geavanceerde technologie begrijpelijk en toepasbaar voor professionals in elke sector."
      },
      {
        icon: "🚀",
        title: "Praktische Resultaten",
        description: "Geen theoretische verhalen, maar concrete tools en technieken die je direct kunt toepassen in je dagelijkse werk."
      },
      {
        icon: "🤝",
        title: "Persoonlijke Begeleiding",
        description: "Elke persoon en organisatie is uniek. Daarom bied ik maatwerk training en advies aangepast aan jouw specifieke situatie."
      }
    ],
    skills: [
      {
        title: "Prompt Engineering",
        description: "Optimale communicatie met AI tools voor betere resultaten"
      },
      {
        title: "Business Automatisering",
        description: "Processen stroomlijnen met AI-gedreven oplossingen"
      },
      {
        title: "Content Strategie",
        description: "AI inzetten voor efficiënte en effectieve content creatie"
      },
      {
        title: "Training & Coaching",
        description: "Praktijkgerichte workshops en persoonlijke begeleiding"
      },
      {
        title: "Digitale Transformatie",
        description: "Strategische implementatie van AI in bedrijfsprocessen"
      },
      {
        title: "Change Management",
        description: "Teams begeleiden bij de adoptie van nieuwe AI tools"
      }
    ],
    education: [
      {
        title: "MA Internationale betrekkingen in historisch perspectief",
        institution: "Universiteit",
        description: "Master's degree in internationale betrekkingen met focus op historisch perspectief"
      }
    ],
    certifications: [
      {
        title: "AI & Machine Learning Specialist",
        issuer: "Diverse tech platforms",
        description: "Gecertificeerd in moderne AI-tools en implementatiestrategieën"
      }
    ]
  },
  settings: {
    siteTitle: "Slimmer Met AI",
    siteDescription: "Ontdek de kracht van AI voor jouw persoonlijke en professionele groei",
    contactEmail: "julia@loth.nl",
    substackUrl: "https://slimmermetai.substack.com",
    linkedinUrl: "https://www.linkedin.com/in/julialoth",
    navigation: [
      { label: "Home", url: "/" },
      { label: "Trainingen & Advies", url: "/trainingen-advies" },
      { label: "Nieuws", url: "/nieuws" },
      { label: "Over Mij", url: "/over-mij" }
    ]
  }
};

// Function to load content from markdown files (when CMS is set up)
const loadContentFromFile = async (path) => {
  try {
    // In a real implementation, this would fetch from the CMS
    // For now, return default content
    return null;
  } catch (error) {
    console.log('CMS content not found, using defaults');
    return null;
  }
};

// Custom hook to manage content loading
export const useContent = (contentType) => {
  const [content, setContent] = useState(defaultContent[contentType] || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        // Try to load from CMS first
        const cmsContent = await loadContentFromFile(contentType);
        
        if (cmsContent) {
          setContent(cmsContent);
        } else {
          // Fall back to default content
          setContent(defaultContent[contentType] || {});
        }
      } catch (err) {
        setError(err);
        setContent(defaultContent[contentType] || {});
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentType]);

  return { content, loading, error };
};

export default useContent;