import Link from "next/link";
import Image from "next/image";
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

const news = [
  {
    slug: "keucoblackselection",
    icon: Sparkles,
    category: "Bad",
    title: "Schwarze Akzente im Bad",
    subtitle: "KEUCO BLACK SELECTION",
    excerpt:
      "BLACK SELECTION – die schwarz matte Badausstattung von KEUCO – setzt prägnante Akzente im Bad: edel, elegant und zugleich extravagant.",
    image: "/news/keucoblackselection.webp",
    accent: "bg-zinc-500/10 text-zinc-700",
  },
  {
    slug: "kermi-farbgestaltung",
    icon: Palette,
    category: "Bad",
    title: "Mut zur Farbe",
    subtitle: "Individuelle Farbgestaltung für Duschkabinen | Kermi",
    excerpt:
      "Eine Kermi Duschkabine steht für sich. Das beweist Kermi mit der neuen, noblen Beschlag-Duschkabine MENA.",
    image: "/news/kermi-farbe.webp",
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    slug: "hansastela",
    icon: Droplet,
    category: "Bad",
    title: "Die neuen Hingucker im designstarken Badezimmer",
    subtitle: "HANSASTELA 2.0",
    excerpt:
      "Die neue HANSASTELA ist eine trendorientierte Designarmatur, die Ästhetik mit intelligenter Wassernutzung vereint.",
    image: "/news/hansastela.webp",
    accent: "bg-cyan-500/10 text-cyan-600",
  },
  {
    slug: "vigour-vogue",
    icon: Bath,
    category: "Bad",
    title: "Elegante Doppelwaschtischschale",
    subtitle: "VIGOUR vogue",
    excerpt:
      "Designer Michael Stein kombiniert bei VIGOUR vogue moderne Linien mit weich fließenden Formen.",
    image: "/news/vigour.webp",
    accent: "bg-indigo-500/10 text-indigo-600",
  },
  {
    slug: "gas-hybridheizung",
    icon: Flame,
    category: "Heizung",
    title: "Was ist eine Gas-Hybridheizung?",
    subtitle: "Effizient heizen mit Kombi-Systemen",
    excerpt:
      "Bei einer Gas-Hybridheizung wird eine Erdgasheizung mit erneuerbaren Energien kombiniert – für mehr Effizienz und weniger Kosten.",
    image: "/news/gas-hybrid.webp",
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    slug: "kermi-mena",
    icon: ShowerHead,
    category: "Bad",
    title: "Nobel duschen",
    subtitle: "Kermi MENA",
    excerpt:
      "Eine Kermi Duschkabine steht für sich. Das beweist Kermi mit der neuen, noblen Beschlag-Duschkabine MENA.",
    image: "/news/kermi-mena.webp",
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
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group block"
            >
              <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2.5 mb-1">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.accent}`}
                    >
                      <item.icon className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-medium text-primary">{item.subtitle}</p>
                  </div>
                  <CardTitle className="text-base leading-snug">
                    {item.title}
                  </CardTitle>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
