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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            Über uns
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Unser Versprechen an Sie
          </h2>
          <p className="text-muted-foreground text-lg">
            Sechs Werte, die unsere Arbeit leiten – und die Sie bei jedem
            Projekt spüren werden.
          </p>
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
