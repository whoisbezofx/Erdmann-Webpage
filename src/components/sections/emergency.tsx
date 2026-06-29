import { buttonVariants } from "@/components/ui/button";
import { Phone, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmergencySection() {
  return (
    <section
      id="notdienst"
      className="py-16 md:py-20 bg-gradient-to-r from-destructive/10 via-destructive/5 to-orange-500/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex items-start gap-5 max-w-xl">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                24/7 Notdienst
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Rohrbruch, Heizungsausfall oder andere Notfälle? Unser
                Notdienst-Team ist rund um die Uhr für Sie da – schnell,
                kompetent und zuverlässig.
              </p>
            </div>
          </div>

          <a
            href="tel:+4950336063"
            className={cn(
              buttonVariants({ size: "lg", variant: "destructive" }),
              "text-base px-8 shrink-0"
            )}
          >
            <Phone className="mr-2 h-5 w-5" />
            Jetzt Notdienst anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
