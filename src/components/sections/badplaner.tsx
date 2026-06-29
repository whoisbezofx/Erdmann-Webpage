import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Monitor, ExternalLink } from "lucide-react";
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

        <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 bg-card">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.elements-show.de/3d-badplaner#u=4hmwbkvx2n"
              className="absolute inset-0 w-full h-full border-0"
              allow="fullscreen"
              loading="lazy"
              title="3D-Badplaner – H.G. Erdmann"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="https://www.elements-show.de/3d-badplaner#u=4hmwbkvx2n"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "text-base"
            )}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Im Vollbild öffnen
          </a>
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
