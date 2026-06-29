import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShowerHead,
  Flame,
  Wind,
  Building2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShowerHead,
    title: "Bad",
    description: "Komplettlösungen für Ihr Traumbad – von der Planung bis zur Fertigstellung.",
    features: [
      "Badmodernisierung",
      "Barrierefreie Bäder",
      "3D-Badplanung",
      "Förderberatung",
    ],
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Flame,
    title: "Heizung",
    description: "Effiziente Heizsysteme für Wärme und Sparsamkeit – modern und zukunftssicher.",
    features: [
      "Heizungsmodernisierung",
      "Regeneratives Heizen",
      "Wartung & Service",
      "Gas- & Ölheizung",
    ],
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Wind,
    title: "Lüftung",
    description: "Frische Luft und gesundes Raumklima mit modernen Lüftungssystemen.",
    features: [
      "Dezentrale Lüftung",
      "Zentrale Lüftung",
      "Raumklimatisierung",
      "Energieeffizient",
    ],
    accent: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Building2,
    title: "Gewerbe",
    description: "Maßgeschneiderte Lösungen für gewerbliche Sanitär- und Heizungsanlagen.",
    features: [
      "Sanitäranlagen",
      "Heizsysteme",
      "Regenerative Energien",
      "Kältetechnik",
    ],
    accent: "bg-emerald-500/10 text-emerald-600",
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            Unsere Leistungen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der Badsanierung über den Heizungsbau bis zur Lüftungstechnik
            – wir bieten Ihnen umfassende Kompetenz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.accent}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
