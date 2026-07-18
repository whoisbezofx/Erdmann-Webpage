export interface NewsArticle {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  images?: string[];
  content: { heading?: string; paragraphs: string[] }[];
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "keucoblackselection",
    category: "Bad",
    title: "Schwarze Akzente im Bad",
    subtitle: "KEUCO BLACK SELECTION",
    excerpt:
      "BLACK SELECTION – die schwarz matte Badausstattung von KEUCO – setzt prägnante Akzente im Bad: edel, elegant und zugleich extravagant.",
    image: "/news/keucoblackselection.webp",
    imageAlt: "KEUCO BLACK SELECTION – schwarz matte Badausstattung",
    images: [
      "/news/keuco-1.webp",
      "/news/keuco-2.webp",
      "/news/keuco-3.webp",
      "/news/keuco-4.webp",
      "/news/keuco-5.webp",
    ],
    content: [
      {
        heading: "Kraftvolle Akzente mit schwarz matter Badausstattung",
        paragraphs: [
          "BLACK SELECTION – die schwarz matte Badausstattung von KEUCO – setzt prägnante Akzente im Bad: edel, elegant und zugleich extravagant. In einheitlich durchgängigem Schwarz matt bietet BLACK SELECTION Armaturen, Accessoires und Spiegelschränke.",
          "In Kombination mit hellen Tönen in der Raumgestaltung kommt BLACK SELECTION besonders kraftvoll und perfekt inszeniert zur Geltung. Die tiefschwarzen, seidenmatten Oberflächen der KEUCO Produkte bestechen durch ihre besondere Farbbrillanz, die einen luxuriösen Touch ins Bad bringt. Eine spezielle Lack-Beschichtung macht sie unempfindlich, haltbar und pflegeleicht – ideal sowohl für private Bäder als auch in der trendigen Objektausstattung. Die samtmatte Oberfläche ist haptisch ausgesprochen angenehm.",
        ],
      },
      {
        heading: "BLACK SELECTION Armaturen",
        paragraphs: [
          "In der Dusche und an der Wanne bietet die Armaturenserie IXMO in Schwarz matt Gestaltungsvielfalt und Planungsfreiheit. IXMO bringt eine große Besonderheit mit: Durch die Bündelung von Funktionen bei minimalistischem Erscheinungsbild sind anders als sonst üblich nur noch wenige Armaturen-Elemente auf der Wand erforderlich. Eine ruhige Raumästhetik entsteht.",
          "Am Waschtisch setzt sich der designstarke Look der IXMO Armaturen in Schwarz matt fort. Erhältlich in verschiedenen Ausführungen passen sie dennoch immer zu der universellen Formensprache der IXMO Dusch- und Wannenarmaturen. In den Ausführungen Flat, Soft oder Pure gibt es für unterschiedliche Wohnstile die passenden Waschtischarmaturen, als Einhebelmischer oder Wandauslaufmodell. Außerdem im Sortiment: eine berührungslose IXMO Sensorarmatur für den Waschtisch.",
        ],
      },
      {
        heading: "BLACK SELECTION Accessoires",
        paragraphs: [
          "Die Einrichtung wird immer bewusster inszeniert. Gerade die Details erhalten mehr Aufmerksamkeit, denn sie geben die besondere Note. In der Badgestaltung gehören hochwertige Bad-Accessoires zu einem stimmigen Gesamtbild dazu. Ein ausgewähltes Sortiment der Collection PLAN und Collection REVA steht in Schwarz matt für Liebhaber kräftiger Akzente zur Verfügung. Sie runden das Bild ab, egal ob Duschkorb, Kosmetikspiegel, Lotionspender oder Toilettenpapierhalter.",
        ],
      },
    ],
  },
  {
    slug: "kermi-farbgestaltung",
    category: "Bad",
    title: "Mut zur Farbe",
    subtitle: "Individuelle Farbgestaltung für Duschkabinen | Kermi",
    excerpt:
      "Eine Kermi Duschkabine steht für sich. Das beweist Kermi mit der neuen, noblen Beschlag-Duschkabine MENA.",
    image: "/news/kermi-farbe.webp",
    imageAlt: "Kermi Duschkabine mit individueller Farbgestaltung",
    images: [
      "/news/kermi-farbe-1.webp",
      "/news/kermi-farbe-2.webp",
      "/news/kermi-farbe-3.webp",
      "/news/kermi-farbe-4.webp",
      "/news/kermi-farbe-5.webp",
    ],
    content: [
      {
        heading: "Farbe im Bad – individuelles Flair mit KermiEXTRA",
        paragraphs: [
          "Farbe im Bad – eine tolle Möglichkeit, jedem Badezimmer ein besonderes und individuelles Flair zu verleihen. Mit den Sanitärfarben des KermiEXTRA Programmes kann die Duschkabine farblich an das Ambiente im Badezimmer angepasst werden.",
          "Kermi bietet mit vier verschiedenen Farbeditionen eine große Auswahl an, so dass für jeden Geschmack etwas dabei ist. Jede Farbe hat eine andere Wirkung und ruft verschiedene Stimmungen hervor.",
        ],
      },
      {
        heading: "Die vier Farbeditionen",
        paragraphs: [
          "Oberflächen in Schwarz und Weiß sind der Klassiker in der Badgestaltung und die Edition Black + White beinhaltet diese beiden zeitlosen Trendfarben. Mit der Edition Pastell bekommen die Kermi Duschkabinen eine edelmatte Oberfläche mit einem samtigen, seidigen Softeffekt und verstärken so eine hochwertige Optik.",
          "Die Edition Nature beinhaltet die elementaren Farben der Natur, die frisch und ausdrucksstark wirken. Die stylische Edition Metallic repräsentiert den glanzvollen Retro-Trend der Fünfziger-Jahre mit brillanten Metallic-Oberflächen und setzt trendige Akzente. Zudem sind alle normierten RAL-Farben möglich. KermiEXTRA macht einfach alle Farbwünsche wahr!",
          "Die Farbe Forest aus der Edition Nature verleiht der Duschkabine NICA einen frischen Look und passt prima zum Kermi Badheizkörper Casteo und zum Farbkonzept des Badezimmers.",
        ],
      },
    ],
  },
  {
    slug: "hansastela",
    category: "Bad",
    title: "Die neuen Hingucker im designstarken Badezimmer",
    subtitle: "HANSASTELA 2.0",
    excerpt:
      "Die neue HANSASTELA ist eine trendorientierte Designarmatur, die Ästhetik mit intelligenter Wassernutzung vereint.",
    image: "/news/hansastela.webp",
    imageAlt: "HANSASTELA 2.0 Designarmatur",
    images: [
      "/news/hansastela-1.webp",
      "/news/hansastela-2.webp",
      "/news/hansastela-3.webp",
      "/news/hansastela-4.webp",
      "/news/hansastela-5.webp",
    ],
    content: [
      {
        heading: "Luxuriöses Wassererlebnis bei mehr Nachhaltigkeit und Hygiene",
        paragraphs: [
          "Immer mehr Verbraucher wünschen sich komfortable Produkte, die den eigenen Anspruch an nachhaltiges Handeln unterstützen. Die neue HANSASTELA ist eine trendorientierte Designarmatur, die beide Aspekte mit intelligenter Wassernutzung vereint. Basierend auf geometrischen Formen kreiert das soft-kubische Design und die schlanke Proportionierung dabei eine gleichermaßen moderne wie zeitlos elegante Optik, die perfekt auf moderne Waschtischdesigns abgestimmt ist.",
          "Zusätzliche Bewegungsfreiheit am Waschtisch bieten die aufrechten Varianten mit hoch angesetztem, großzügigem Auslauf im klassischen 90 Grad Winkel, sowie die seitenbedienten Modelle mit schwenkbarem Auslauf.",
        ],
      },
      {
        heading: "Faszinierendes Wasserspiel",
        paragraphs: [
          "Bei der neuen HANSASTELA zieht nicht nur die Armatur selbst, sondern auch der Wasserfluss alle Blicke auf sich. So sind einige Varianten mit breitem Strahlregler ausgestattet, der dem Wasser eine faszinierende und besonders edle Diamantstruktur verleiht. Trotz voluminöser Wasserfall-Optik ist die Durchflussmenge auf sechs Liter pro Minute begrenzt, wodurch ein sparsamer Verbrauch gewährleistet werden kann.",
        ],
      },
      {
        heading: "Sicher, sauber, nachhaltig: die berührungslose HANSASTELA",
        paragraphs: [
          "Neben individuellen Installationsanwendungen und einer sicheren Einstellung der Wassertemperatur sorgt die berührungslose HANSASTELA für maximale Hygiene und mehr Nachhaltigkeit. Dank intelligenter, präziser Sensortechnologie fließt das Wasser nur dann, wenn es tatsächlich benötigt wird, was den Verbrauch um bis zu fünfzig Prozent reduziert, ohne den Komfort einzuschränken.",
          "Die Bluetooth®-fähige Armatur lässt sich mit der kostenlosen HANSA Connect App steuern. Viele Funktionen, wie die Sensorempfindlichkeit, die Wassernachlaufzeit oder ein automatischer Spülplan, sind so schnell und einfach an unterschiedliche Bedürfnisse angepasst.",
        ],
      },
    ],
  },
  {
    slug: "vigour-vogue",
    category: "Bad",
    title: "Elegante Doppelwaschtischschale",
    subtitle: "VIGOUR vogue",
    excerpt:
      "Designer Michael Stein kombiniert bei VIGOUR vogue moderne Linien mit weich fließenden Formen.",
    image: "/news/vigour.webp",
    imageAlt: "VIGOUR vogue Doppelwaschtischschale",
    images: ["/news/vigour-1.webp"],
    content: [
      {
        heading: "Haute Couture für das Bad",
        paragraphs: [
          "Anmut, Ästhetik und Präzision, die Grundbausteine der Haute Couture, kennzeichnen den unverwechselbaren VIGOUR vogue-Look. Designer Michael Stein kombiniert bei VIGOUR vogue moderne Linien mit weich fließenden Formen und setzt mit prägnanten Konturen spannende Akzente. VIGOUR vogue stammt aus einer Designfeder und bietet das Bad aus einem Guss. Das wirkt, denn Harmonie und Einheit sind die zwei wesentlichen Prinzipien von Eleganz.",
        ],
      },
      {
        heading: "Formvollendete Ästhetik",
        paragraphs: [
          "Ein eindrucksvolles Highlight der VIGOUR vogue Designlinie ist ihre Doppelschale mit dem hochwertigen, widerstandsfähigen Obermaterial protectPLUS. Das Design spiegelt das fließende Wasser wider, erinnert an ausgewaschene Steine an Gebirgsbächen und überzeugt mit einer Formensprache, die es so noch nie gegeben hat.",
        ],
      },
    ],
  },
  {
    slug: "gas-hybridheizung",
    category: "Heizung",
    title: "Was ist eine Gas-Hybridheizung?",
    subtitle: "Effizient heizen mit Kombi-Systemen",
    excerpt:
      "Bei einer Gas-Hybridheizung wird eine Erdgasheizung mit erneuerbaren Energien kombiniert – für mehr Effizienz und weniger Kosten.",
    image: "/news/gas-hybrid.webp",
    imageAlt: "Gas-Hybridheizung mit Solarthermie",
    images: [
      "/news/gas-hybrid-1.webp",
      "/news/gas-hybrid-2.webp",
      "/news/gas-hybrid-3.webp",
    ],
    content: [
      {
        paragraphs: [
          "Bei einer Gas-Hybridheizung wird eine Erdgasheizung mit erneuerbaren Energien kombiniert, das kann z. B. mit Solarthermie, einer Wärmepumpe oder Biomasseheizung/Kaminofen sein. Hybridheizung bedeutet also zwei Heizsysteme.",
          "Zusätzlich zu den Gas-Hybridheizungen gibt es noch die EE-Hybridheizungen (EE = Erneuerbare Energien), bei der mindestens zwei erneuerbare Energien kombiniert werden, wie z.B. Pelletheizung mit Solarthermie.",
        ],
      },
      {
        heading: "Welche Gas-Hybridheizungen gibt es?",
        paragraphs: [
          "Gas-Hybridheizung mit Solarthermie: Sehr beliebt ist die Kombination von Erdgasheizung und Solarthermie. Dabei wird Solartechnik zur Unterstützung der Warmwasseraufbereitung verwendet. Bei Immobilien mit Fußbodenheizung kann die Solarthermie auch die Heizung unterstützen.",
          "Gas-Hybridheizung mit Wärmepumpe: In Kombination mit einer Wärmepumpe werden bis zu 80 Prozent der Wärme aus der Umwelt gewonnen. Das kann sowohl eine Luftwärmepumpe wie auch eine Erdwärmepumpe sein. Der Restbedarf wird über Erdgas-Brennwerttechnik erzeugt. So lassen sich Ihre Energiekosten um bis zu 30 Prozent reduzieren.",
          "Gas-Hybridheizung mit Biomasse: Eine weitere Variante ist die Kombination mit einer Biomasseheizung, d.h. einer Pellet- oder Hackschnitzelheizung, einem Pelletofen oder einem Scheitholzvergaserkessel.",
        ],
      },
      {
        heading: "Ihre Vorteile einer Gas-Hybridheizung",
        paragraphs: [
          "Für den Heizungstausch im Altbau sind Gas-Hybridheizungen meist eine günstige Lösung, um erneuerbare Energien einzusetzen. Gerade bei ungedämmten Altbauten sind reine Wärmepumpenanlagen nicht wirtschaftlich, durch Ihren hohen Stromverbrauch. Die Kombination mit der Gas-Brennwerttechnik ist effizienter und nutzt die eingesetzten Energien bestens aus, weil bei geringen Außentemperaturen die Gas-Brennwertheizung zum Einsatz kommt.",
          "Die Nutzung von erneuerbarer Energien ist im Neubau gesetzlich festgeschrieben laut dem Erneuerbare-Energien-Wärmegesetz (EEWärmeG). Das bedeutet entweder ganz auf erneuerbare Energien zu setzen oder sich für eine Kombination wie eine Gas-Hybridheizung zu entscheiden.",
        ],
      },
    ],
  },
  {
    slug: "kermi-mena",
    category: "Bad",
    title: "Nobel duschen",
    subtitle: "Kermi MENA",
    excerpt:
      "Eine Kermi Duschkabine steht für sich. Das beweist Kermi mit der neuen, noblen Beschlag-Duschkabine MENA.",
    image: "/news/kermi-mena.webp",
    imageAlt: "Kermi MENA Duschkabine",
    content: [
      {
        heading: "Kermi: Nobel duschen mit MENA",
        paragraphs: [
          "Eine Kermi Duschkabine steht für sich. Das beweist Kermi mit der neuen, noblen Beschlag-Duschkabine MENA. Denn sie braucht nicht viel um zu wirken.",
          "Vornehme Zurückhaltung. Diese Beschreibung passt ideal zur neuen Duschkabine MENA. Sie erweitert das Sortiment der Beschlag-Duschkabinen von Kermi und zeichnet sich durch ihr nobles, modernes Design aus. MENA gibt es ganz reduziert auf Maß gefertigt mit Wandbeschlag, oder als Serienmodell mit Wandprofil für mehr optischen Halt. Bei einer komplett rahmenlosen Konstruktion kommen die hochwertigen Metallbeschläge besonders gut zur Geltung.",
        ],
      },
      {
        heading: "Hochwertiges Design in jeder Ausführung",
        paragraphs: [
          "Nobel und ohne viel Schnickschnack: Die neue Beschlag-Duschkabine MENA gibt es individuell auf Maß gefertigt mit Wandbeschlag bis zu einer Höhe von 2200 mm. Alle Türen verfügen über einen nach innen und außen öffnenden Pendeltür-Komfort mit Hebe-Senk-Funktion und einen ungehinderten, bodenebenen Einstieg in die Duschkabine.",
          "Optisch überzeugt MENA auf ganzer Linie und passt perfekt in jedes moderne Badezimmer. Beschläge und Profile sind in edlem Chrom bzw. Silber Hochglanz oder auch in der mattlackierten Oberfläche Schwarz Soft erhältlich.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
