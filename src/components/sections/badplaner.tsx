import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Monitor, ExternalLink, MousePointerClick, Palette, Box } from "lucide-react";
import { cn } from "@/lib/utils";

export function BadplanerSection() {
  return (
    <section id="badplaner" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="outline" className="mb-4">
            <Monitor className="mr-1.5 h-3.5 w-3.5" />
            3D-Planung
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Planen Sie Ihr Traumbad in 3D
          </h2>
          <p className="text-muted-foreground text-lg">
            Mit unserem interaktiven 3D-Badplaner gestalten Sie Ihr neues Bad
            ganz nach Ihren Wünschen – probieren Sie verschiedene Fliesen,
            Sanitärobjekte und Layouts aus.
          </p>
        </div>

        <a
          href="https://www.elements-show.de/3d-badplaner#u=4hmwbkvx2n"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 lg:p-16">
            <div className="flex h-32 w-32 md:h-40 md:w-40 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
              <Box className="h-16 w-16 md:h-20 md:w-20" strokeWidth={1.2} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">
                3D-Badplaner starten
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg">
                Gestalten Sie Ihr Traumbad interaktiv in 3D. Wählen Sie aus
                verschiedenen Fliesen, Armaturen und Sanitärobjekten und sehen
                Sie das Ergebnis in Echtzeit.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Palette className="h-4 w-4 text-primary" />
                  Fliesen & Farben
                </span>
                <span className="flex items-center gap-1.5">
                  <Box className="h-4 w-4 text-primary" />
                  Raumplanung
                </span>
                <span className="flex items-center gap-1.5">
                  <MousePointerClick className="h-4 w-4 text-primary" />
                  Einfache Bedienung
                </span>
              </div>

              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Jetzt Badplaner öffnen
                <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </div>
        </a>

        <div className="flex justify-center mt-8">
          <a
            href="#kontakt"
            className={cn(buttonVariants({ size: "lg" }), "text-base")}
          >
            Beratungstermin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
