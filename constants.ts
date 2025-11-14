import type { SlideData } from './types';

export const SLIDES_DATA: SlideData[] = [
  // 1. Title
  {
    type: 'title',
    source: '',
    content: {
      title: "mydays Outdoor-Erlebnisse: Eine strategische Analyse",
      subtitle: "Entscheidungsgrundlage für den Markteintritt der Exclusiva Sport GmbH",
      author: "Präsentiert von Exclusiva Sport GmbH"
    },
  },
  // 2. Project Goal
  {
    type: 'assignment_brief',
    source: 'Quelle: Internes Strategie-Meeting, Exclusiva Sport GmbH',
    content: {
      title: "Unser Projektziel: Vom Verkauf zur Erlebniswelt",
      subtitle: "Analyse des mydays-Modells als Blaupause für Exclusiva Sport",
      workOrder: {
        title: "Der Auftrag",
        text: "Bewerten Sie das Geschäftsmodell von mydays im Segment 'Outdoor & Sport', um Synergien und eine Markteintrittsstrategie für Exclusiva Sport GmbH zu entwickeln."
      },
      guidingQuestions: {
        title: "Strategische Leitfragen",
        intro: "Unsere Analyse fokussiert sich auf folgende Kernpunkte:",
        points: [
          "Welche Synergien gibt es zwischen Ausrüstungsverkauf und Erlebnissen?",
          "Wie kann Exclusiva Sport seine Markenkompetenz nutzen?",
          "Was sind die Erfolgsfaktoren und Risiken im Erlebnismarkt?"
        ]
      },
      focusStatement: "mydays dient als Best-Practice-Beispiel für die erfolgreiche Vermarktung von Sport-Erlebnissen."
    },
  },
  // 3. Intro to Outdoor Market
  {
    type: 'active_travel_intro',
    source: 'Quelle: Branchenanalyse & Markttrends im Sport- und Freizeitsektor.',
    content: {
      title: 'Der Markt für Outdoor- & Sport-Erlebnisse',
      description: "Der Wunsch nach aktiver Freizeitgestaltung in der Natur wächst stetig. Dieser Trend schafft einen lukrativen Markt, der perfekt zur Kernkompetenz von Exclusiva Sport – der Bereitstellung von hochwertiger Sportausrüstung – passt.",
      stats: [
        { value: '25%+', label: 'Wachstum bei Outdoor-Aktivitäten' },
        { value: 'Synergie', label: 'Ausrüstung & Erlebnis' },
      ],
    }
  },
  // 4. Competitive Landscape
  {
    type: 'competitive_landscape',
    source: 'Quelle: Branchenanalyse aus verschiedenen Marktberichten.',
    content: {
      title: "Wer sind die Hauptakteure?",
      description: "Der Markt für Erlebnisgeschenke ist durch starke Marken und unterschiedliche Geschäftsmodelle geprägt. mydays konkurriert sowohl mit direkten Anbietern als auch mit größeren Reiseplattformen.",
      competitors: [
        {
          name: 'Jochen Schweizer',
          logoUrl: 'https://images.seeklogo.com/logo-png/49/1/jochen-schweizer-logo-png_seeklogo-496269.png',
          description: 'Historisch der größte Konkurrent mit einer extrem starken Marke für Abenteuer, Action und Outdoor-Sport.',
          brandColor: '#ff6600'
        },
        {
          name: 'mydays',
          logoUrl: 'https://images.seeklogo.com/logo-png/35/1/mydays-logo-png_seeklogo-357684.png',
          description: 'Fokus auf Geschenk-Charakter und breites, zugängliches Portfolio. Starke Positionierung bei Paaren und Familien.',
          brandColor: '#e4003a'
        },
        {
          name: 'GetYourGuide',
          logoUrl: 'https://images.seeklogo.com/logo-png/49/1/getyourguide-logo-png_seeklogo-499167.png',
          description: 'Konkurriert um das Freizeitbudget mit einem Fokus auf Touren und Aktivitäten, oft mit geringerer Anforderung an Spezialausrüstung.',
          brandColor: '#007fad'
        },
      ]
    }
  },
  // 5. Transition to mydays
  {
    type: 'focus_competitor',
    source: '',
    content: {
      title: 'Analysefokus: mydays Outdoor & Sport',
      description: "Wir analysieren gezielt, wie mydays sein Segment für Outdoor-Aktivitäten und Sporterlebnisse strukturiert, vermarktet und welche Lehren wir für Exclusiva Sport daraus ziehen können.",
      logoUrl: 'https://images.seeklogo.com/logo-png/35/1/mydays-logo-png_seeklogo-357684.png'
    }
  },
  // 6. Intro to mydays Outdoor
  {
    type: 'intro',
    source: 'Quelle: Unternehmensinformationen der Jochen Schweizer mydays Group.',
    content: {
      title: "mydays im Outdoor-Segment",
      points: [
        "Bietet hunderte Erlebnisse in Kategorien wie 'Action & Natur'.",
        "Fungiert als Vermittler zwischen Kunden und spezialisierten Outdoor-Partnern.",
        "Fokus liegt auf der einfachen Buchbarkeit und dem Geschenk-Charakter.",
        "Nutzt eine etablierte Plattform für breite Kundenansprache."
      ],
      stat: {
        value: "1.000+",
        label: "Outdoor-Erlebnisse"
      }
    },
  },
  // 7. Profile
  {
    type: 'competitor_profile',
    source: 'Quelle: Analyse basierend auf der mydays-Plattform und AGBs.',
    content: {
      title: "Zielgruppe & Angebotsstruktur",
      subtitle: "mydays adressiert Gelegenheits-Sportler und Erlebnis-Suchende.",
      comparisonPoints: [
        {
          icon: 'target',
          title: "Zielgruppe",
          text: "Personen, die ein besonderes Outdoor-Erlebnis suchen oder verschenken wollen, oft ohne eigene Spezialausrüstung. Geringere Einstiegshürde."
        },
        {
          icon: 'price',
          title: "Preisstrategie",
          text: "Paketpreise, die oft Guide und Leih-Ausrüstung beinhalten. Provision-basiertes Modell mit lokalen Partnern. Der Wert liegt in der einfachen Buchung."
        },
        {
          icon: 'terms',
          title: "Gutscheinbedingungen",
          text: "Hohe Flexibilität bei Umbuchung und Gutscheingültigkeit. Wichtig bei wetterabhängigen Outdoor-Aktivitäten."
        }
      ]
    }
  },
  // 8. Strategy
  {
    type: 'competitor_strategy',
    source: 'Quelle: Analyse des Marketings und der Plattform-UX/UI von mydays.',
    content: {
      title: "Vermarktung von Outdoor-Erlebnissen",
      strategyPoints: [
        {
          icon: 'distribution',
          title: 'Vertriebskanäle',
          text: "Starke Online-Präsenz mit gezieltem SEO/SEM für Keywords wie 'Kletterkurs' oder 'Kajak-Tour'. Physische Boxen im Handel als Geschenkartikel."
        },
        {
          icon: 'communication',
          title: 'Kundenkommunikation',
          text: "Emotionales Marketing, das Abenteuer und Naturerlebnis zeigt. Fokus auf 'unvergessliche Momente' statt auf technischer sportlicher Leistung."
        },
      ],
      checkout: {
        title: "Niedrigschwellige Buchung",
        description: "Der Prozess ist auf Einfachheit optimiert, um auch Kunden ohne Vorerfahrung anzusprechen. Die technische Komplexität des Sports wird abstrahiert."
      }
    }
  },
  // 9. Messaging
  {
    type: 'competitor_messaging',
    source: 'Quelle: mydays Unternehmenswebsite und Werbekampagnen.',
    content: {
      title: 'Markenbotschaft im Sport-Kontext',
      messagingPoints: [
        {
          icon: 'communication',
          title: 'Werbebotschaft',
          text: `"Zeit für Abenteuer. Zeit für dich." Die Botschaft fokussiert auf die persönliche Auszeit und das Erlebnis, nicht auf die sportliche Höchstleistung.`
        },
        {
          icon: 'mission',
          title: 'Leitbild',
          text: `Die Mission, "außergewöhnliche Freizeit" zu gestalten, wird im Outdoor-Bereich durch zugängliche Abenteuer und Naturerlebnisse für jedermann umgesetzt.`
        }
      ]
    }
  },
  // 10. SWOT Definition
  {
    type: 'definition',
    source: 'Quelle: Adaptiert für die strategische Analyse von Exclusiva Sport GmbH.',
    content: {
      title: "Was ist eine SWOT-Analyse?",
      description: "Ein strategisches Werkzeug, um die internen Stärken/Schwächen von mydays' Outdoor-Sparte und die externen Chancen/Risiken im Markt zu bewerten.",
      items: [
        { letter: 'S', name: 'Stärken', desc: 'Interne Eigenschaften, die einen Vorteil verschaffen.', color: 'text-green-300' },
        { letter: 'W', name: 'Schwächen', desc: 'Interne Eigenschaften, die einen Nachteil darstellen.', color: 'text-yellow-300' },
        { letter: 'O', name: 'Chancen', desc: 'Externe Faktoren, die genutzt werden können.', color: 'text-violet-300' },
        { letter: 'T', name: 'Risiken', desc: 'Externe Faktoren, die Probleme verursachen könnten.', color: 'text-rose-300' },
      ]
    },
  },
  // 11. SWOT Overview
  {
    type: 'overview',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      title: "mydays Outdoor-SWOT: Eine Übersicht",
      quadrants: [
        { title: "Stärken", points: ["Etablierte Plattform & Marke", "Erprobtes Partner-Netzwerk", "Expertise in Gutschein-Logistik"], color: "bg-green-500/10 hover:bg-green-500/20", targetSlide: 11 },
        { title: "Schwächen", points: ["Fehlende 'Sport-Experten'-Marke", "Abhängigkeit von Partner-Qualität", "Geringe Kundenbindung an Partner"], color: "bg-yellow-500/10 hover:bg-yellow-500/20", targetSlide: 12 },
        { title: "Chancen", points: ["Synergie: Ausrüstung & Erlebnis", "Wachsender Markt für Mikro-Abenteuer", "B2B-Events & Incentives"], color: "bg-violet-500/10 hover:bg-violet-500/20", targetSlide: 13 },
        { title: "Risiken", points: ["Haftungs- & Sicherheitsrisiken", "Wetterabhängigkeit", "Konkurrenz durch Spezialanbieter"], color: "bg-rose-500/10 hover:bg-rose-500/20", targetSlide: 14 },
      ]
    },
  },
  // 12. Strengths Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Stärken',
        color: 'border-green-400',
        branches: [
          { title: "Etablierte Plattform & Marke", description: "Hohe Reichweite und Vertrauen bei Kunden, die Erlebnisse suchen. Starke Online-Sichtbarkeit." },
          { title: "Erprobtes Partner-Netzwerk", description: "Bestehende Infrastruktur und Prozesse zur Anbindung und Verwaltung von hunderten kleinen Erlebnis-Partnern." },
          { title: "Expertise in Gutschein-Logistik", description: "Effiziente Abwicklung von Verkauf, Buchung und Abrechnung, was für Kunden und Partner attraktiv ist." },
          { title: "Hoher Bekanntheitsgrad", description: "Starke Positionierung im Geschenke-Markt, was eine breite, kaufkräftige Zielgruppe anspricht." },
        ]
      }
    },
  },
  // 13. Weaknesses Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Schwächen',
        color: 'border-yellow-400',
        branches: [
          { title: "Fehlende 'Sport-Experten'-Marke", description: "mydays wird als Generalist für 'nette Erlebnisse' wahrgenommen, nicht als Marke für ernsthaften Sport." },
          { title: "Qualität der Partner", description: "Die Qualität des Erlebnisses hängt von Dritten ab und ist schwer zu kontrollieren, was ein Reputationsrisiko darstellt." },
          { title: "Preisdruck", description: "Kunden können oft günstiger direkt beim Anbieter buchen, mydays muss seinen Mehrwert klar kommunizieren." },
          { title: "Geringe Kundenbindung", description: "Kunden buchen ein spezifisches Erlebnis, nicht die 'Marke' mydays. Die Loyalität gilt oft dem lokalen Anbieter." },
        ]
      }
    },
  },
  // 14. Opportunities Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Chancen',
        color: 'border-violet-400',
        branches: [
          { title: "Synergie: Ausrüstung & Erlebnis", description: "Perfekte Cross-Selling-Möglichkeiten: Verkauf von Ausrüstung an Erlebnis-Kunden und umgekehrt." },
          { title: "Markt für 'Mikro-Abenteuer'", description: "Wachsender Trend zu kurzen, lokalen Outdoor-Erlebnissen, die leicht zugänglich sind." },
          { title: "B2B-Markt für Outdoor-Events", description: "Steigende Nachfrage nach aktiven Team-Events und Mitarbeiter-Incentives in der Natur." },
          { title: "Positionierung als Kurator", description: "Eine starke Marke kann als vertrauenswürdiger Filter für qualitativ hochwertige und sichere Erlebnisse dienen." },
        ]
      }
    },
  },
  // 15. Threats Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Risiken',
        color: 'border-rose-400',
        branches: [
          { title: "Haftungs- & Sicherheitsrisiken", description: "Bei Sportaktivitäten bestehen erhöhte Unfallrisiken. Klare Haftungsregeln und Versicherungen sind essenziell." },
          { title: "Starke Wetterabhängigkeit", description: "Outdoor-Events sind anfällig für Ausfälle oder Verschiebungen, was zu unzufriedenen Kunden führen kann." },
          { title: "Konkurrenz durch Spezialanbieter", description: "Lokale Guides oder Nischen-Plattformen können oft authentischere oder günstigere Erlebnisse anbieten." },
          { title: "Partner-Fehler", description: "Negative Bewertungen aufgrund von schlechtem Service eines Partners fallen direkt auf die Marke mydays zurück." },
        ]
      }
    },
  },
  // 16. Strategic Implications
  {
    type: 'implications',
    source: 'Quelle: Strategische Ableitung für Exclusiva Sport GmbH.',
    content: {
      title: "Strategische Imperative für Exclusiva Sport GmbH",
      description: "Ableitungen aus der mydays-Analyse für unseren erfolgreichen Markteintritt.",
      quadrants: {
        S: { title: "Stärken", color: "green", textColor: "text-green-300", borderColor: "border-green-400", shadowColor: "shadow-green-500/30" },
        W: { title: "Schwächen", color: "yellow", textColor: "text-yellow-300", borderColor: "border-yellow-400", shadowColor: "shadow-yellow-500/30" },
        O: { title: "Chancen", color: "violet", textColor: "text-violet-300", borderColor: "border-violet-400", shadowColor: "shadow-violet-500/30" },
        T: { title: "Risiken", color: "rose", textColor: "text-rose-300", borderColor: "border-rose-400", shadowColor: "shadow-rose-500/30" },
      },
      strategies: [
        { 
          title: "Synergien heben: Ausrüstung & Erlebnis-Pakete", 
          description: "Bieten Sie Kombi-Pakete aus Leih-/Kauf-Ausrüstung und geführten Touren an. Nutzen Sie die mydays-Plattform als Vorbild für die Vermarktung.",
          poweredBy: [
            { type: "S", text: "Etablierte Plattform & Marke" },
            { type: "O", text: "Synergie: Ausrüstung & Erlebnis" }
          ] 
        },
        { 
          title: "Marke als Qualitätsgarant etablieren", 
          description: "Positionieren Sie Exclusiva Sport als Experten-Marke, die nur geprüfte, hochwertige Touren mit zertifizierten Guides anbietet.",
          poweredBy: [
            { type: "W", text: "Fehlende 'Sport-Experten'-Marke" },
            { type: "O", text: "Positionierung als Kurator" }
          ] 
        },
        { 
          title: "Fokus auf ausrüstungsintensive Nischen", 
          description: "Konzentrieren Sie sich auf Sportarten (z.B. Klettern, Skitouren), bei denen die Ausrüstungs-Qualität entscheidend ist, um sich von Generalisten abzuheben.",
          poweredBy: [
            { type: "S", text: "Expertise in Gutschein-Logistik" },
            { type: "T", text: "Haftungs- & Sicherheitsrisiken" }
          ] 
        },
        { 
          title: "Community-Aufbau zur Kundenbindung", 
          description: "Schaffen Sie eine Community um Ihre Erlebnisse (z.B. durch Events im Store), um die Kundenbindung zu stärken und dem Preisvergleich zu entgehen.",
          poweredBy: [
            { type: "W", text: "Geringe Kundenbindung an Partner" },
            { type: "T", text: "Konkurrenz durch Spezialanbieter" }
          ] 
        }
      ]
    },
  },
  // 17. Conclusion
  {
    type: 'conclusion',
    source: '',
    content: {
      title: "Fazit: Ein strategischer Fit für Exclusiva Sport?",
      summaryPoints: [
        "Der Markt für Outdoor-Erlebnisse bietet enormes Wachstumspotenzial und passt perfekt zur Marke Exclusiva Sport.",
        "Ein reiner Vermittler-Ansatz wie bei mydays ist riskant; die Stärke liegt in der Kombination von Produkt- und Erlebnis-Kompetenz.",
        "Erfolgsentscheidend sind ein rigoroses Qualitätsmanagement der Partner und die Positionierung als vertrauenswürdige Experten-Marke.",
      ],
      finalThought: "Der Einstieg in den Erlebnismarkt ist eine logische und vielversprechende Expansion, wenn Exclusiva Sport seine Markenidentität als Qualitätsführer für Ausrüstung konsequent auf die Erlebniswelt überträgt."
    },
  },
];