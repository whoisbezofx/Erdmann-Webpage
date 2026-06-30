import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Palette,
  Droplet,
  Bath,
  Flame,
  ShowerHead,
  Sparkles,
  ArrowUpRight,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";

const BASE_URL = "https://sanitaer-erdmann.de";

const news = [
  {
    icon: Sparkles,
    category: "Bad",
    title: "Schwarze Akzente im Bad",
    subtitle: "KEUCO BLACK SELECTION",
    excerpt:
      "BLACK SELECTION – die schwarz matte Badausstattung von KEUCO – setzt prägnante Akzente im Bad: edel, elegant und zugleich extravagant.",
    href: `${BASE_URL}/news/keucoblackselection`,
    accent: "bg-zinc-500/10 text-zinc-700",
  },
  {
    icon: Palette,
    category: "Bad",
    title: "Mut zur Farbe",
    subtitle: "Individuelle Farbgestaltung für Duschkabinen | Kermi",
    excerpt:
      "Eine Kermi Duschkabine steht für sich. Das beweist Kermi mit der neuen, noblen Beschlag-Duschkabine MENA.",
    href: `${BASE_URL}/kermi-individuelle-farbgestaltung-duschkabinen`,
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Droplet,
    category: "Bad",
    title: "Die neuen Hingucker im designstarken Badezimmer",
    subtitle: "HANSASTELA 2.0",
    excerpt:
      "Die neue HANSASTELA ist eine trendorientierte Designarmatur, die Ästhetik mit intelligenter Wassernutzung vereint.",
    href: `${BASE_URL}/news/hansastela`,
    accent: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Bath,
    category: "Bad",
    title: "Elegante Doppelwaschtischschale",
    subtitle: "VIGOUR vogue",
    excerpt:
      "Designer Michael Stein kombiniert bei VIGOUR vogue moderne Linien mit weich fließenden Formen.",
    href: `${BASE_URL}/news/vigourvoguedoppelwaschtischschale`,
    accent: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Flame,
    category: "Heizung",
    title: "Was ist eine Gas-Hybridheizung?",
    subtitle: "Effizient heizen mit Kombi-Systemen",
    excerpt:
      "Bei einer Gas-Hybridheizung wird eine Erdgasheizung mit erneuerbaren Energien kombiniert – für mehr Effizienz und weniger Kosten.",
    href: `${BASE_URL}/news/gas-hybridheizung`,
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: ShowerHead,
    category: "Bad",
    title: "Nobel duschen",
    subtitle: "Kermi MENA",
    excerpt:
      "Eine Kermi Duschkabine steht für sich. Das beweist Kermi mit der neuen, noblen Beschlag-Duschkabine MENA.",
    href: `${BASE_URL}/news/kerminobelduschenmitmena`,
    accent: "bg-emerald-500/10 text-emerald-600",
  },
];

export function NewsSection() {
  return (
    <section id="aktuelles" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            <Newspaper className="mr-1.5 h-3.5 w-3.5" />
            Aktuelles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Neuigkeiten & Trends
          </h2>
          <p className="text-muted-foreground text-lg">
            Neue Produkte, Trends und Wissenswertes rund um Bad und Heizung –
            immer aktuell für Sie zusammengestellt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.accent}`}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-snug">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-primary">
                    {item.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-1.5 transition-all">
                    Weiterlesen
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={`${BASE_URL}/aktuelles`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base gap-2")}
          >
            Alle Neuigkeiten ansehen
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
