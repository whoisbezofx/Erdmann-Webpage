import { Droplets, Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Droplets className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">
                  H.G. Erdmann
                </span>
                <span className="text-[11px] leading-tight text-background/60">
                  Sanitär- und Heizungsbau GmbH
                </span>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Ihr zuverlässiger Partner für Sanitär, Heizung und Lüftung in
              Hagenburg und Umgebung.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>
                  Am Torfdamm 13
                  <br />
                  31558 Hagenburg
                </span>
              </li>
              <li>
                <a
                  href="tel:+4950336063"
                  className="flex items-center gap-2.5 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  05033 / 60 63
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sanitaer-erdmann.de"
                  className="flex items-center gap-2.5 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  info@sanitaer-erdmann.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Mo – Do</span>
                <span>08:00 – 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Freitag</span>
                <span>08:00 – 12:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span className="text-primary font-medium">Notdienst</span>
                <span className="text-primary font-medium">auf Anfrage</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <p>
            &copy; {new Date().getFullYear()} H.G. Erdmann Sanitär- und
            Heizungsbau GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background/80 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-background/80 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
