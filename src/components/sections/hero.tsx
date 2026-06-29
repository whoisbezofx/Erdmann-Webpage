import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
      <Image
        src="/hero-bad.webp"
        alt="Modernes Badezimmer mit freistehender Badewanne"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <Badge
            variant="secondary"
            className="mb-6 px-3 py-1 text-xs font-medium bg-white/15 text-white border-white/20 backdrop-blur-sm"
          >
            <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
            Meisterbetrieb aus Hagenburg
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Badsanierung &{" "}
            <span className="text-blue-300">Heizungsbau</span>
            <br />
            <span className="font-normal text-3xl md:text-4xl lg:text-5xl text-white/80">
              auf den Sie sich verlassen können.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
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
                "text-base inline-flex shrink-0 items-center justify-center rounded-lg h-9 gap-1.5 px-2.5 text-sm font-medium border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              05033 / 60 63
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Kostenlose Erstberatung
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Förderberatung inklusive
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Notdienst auf Anfrage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
