import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  GraduationCap,
  Eye,
  Handshake,
  Award,
  Heart,
} from "lucide-react";

const promises = [
  {
    icon: Shield,
    title: "Verlässlichkeit",
    description: "Pünktlich, zuverlässig und verbindlich – darauf können Sie zählen.",
  },
  {
    icon: GraduationCap,
    title: "Kompetenz",
    description: "Fachlich geschult und stets auf dem neuesten Stand der Technik.",
  },
  {
    icon: Eye,
    title: "Transparenz",
    description: "Klare Kommunikation und faire Preise ohne versteckte Kosten.",
  },
  {
    icon: Handshake,
    title: "Partnerschaft",
    description: "Wir arbeiten mit Ihnen zusammen – nicht nur für Sie.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Hochwertige Materialien und sorgfältige Ausführung bei jedem Projekt.",
  },
  {
    icon: Heart,
    title: "Zufriedenheit",
    description: "Ihr Wohlbefinden ist unser Maßstab – vor, während und nach dem Projekt.",
  },
];

export function PromisesSection() {
  return (
    <section id="ueber-uns" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
          <div className="relative w-full max-w-md lg:max-w-sm shrink-0">
            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
              <Image
                src="/team.webp"
                alt="Die Geschäftsführer von H.G. Erdmann Sanitär- und Heizungsbau"
                width={640}
                height={427}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <Badge variant="outline" className="mb-4">
              Über uns
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Unser Versprechen an Sie
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Als Familienbetrieb in Hagenburg stehen wir für persönliche
              Beratung und handwerkliche Qualität. Sechs Werte leiten unsere
              Arbeit – und die spüren Sie bei jedem Projekt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
                <promise.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{promise.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
