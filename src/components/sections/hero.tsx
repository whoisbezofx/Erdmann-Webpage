import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />
      <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <Badge
            variant="secondary"
            className="mb-6 px-3 py-1 text-xs font-medium"
          >
            <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
            Meisterbetrieb aus Hagenburg
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Badsanierung &{" "}
            <span className="text-primary">Heizungsbau</span>
            <br />
            <span className="text-muted-foreground font-normal text-3xl md:text-4xl lg:text-5xl">
              auf den Sie sich verlassen können.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            H.G. Erdmann steht für Qualität, Transparenz und Zuverlässigkeit
            – bei der Badmodernisierung, Heizungswartung oder dem
            Notdienst auf Anfrage.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className={cn(buttonVariants({ size: "lg" }), "text-base")}
            >
              Beratung anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="tel:+4950336063"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "text-base"
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              05033 / 60 63
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Kostenlose Erstberatung
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Förderberatung inklusive
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Notdienst auf Anfrage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
