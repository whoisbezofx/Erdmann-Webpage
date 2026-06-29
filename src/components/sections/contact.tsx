import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            Kontakt
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Wir sind für Sie da
          </h2>
          <p className="text-muted-foreground text-lg">
            Haben Sie Fragen oder möchten ein Projekt besprechen? Kontaktieren
            Sie uns – wir beraten Sie gerne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <Phone className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Telefon</CardTitle>
                <CardDescription>Mo–Do 8–16, Fr 8–12 Uhr</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+4950336063"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  05033 / 60 63
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <Mail className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">E-Mail</CardTitle>
                <CardDescription>
                  Wir antworten innerhalb von 24h
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@sanitaer-erdmann.de"
                  className="text-sm font-semibold text-primary hover:underline break-all"
                >
                  info@sanitaer-erdmann.de
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <MapPin className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Adresse</CardTitle>
                <CardDescription>Besuchen Sie uns vor Ort</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">
                  Am Torfdamm 13
                  <br />
                  31558 Hagenburg
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <Clock className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Öffnungszeiten</CardTitle>
                <CardDescription>Büro & Empfang</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mo – Do</span>
                    <span className="font-medium">08:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Freitag</span>
                    <span className="font-medium">08:00 – 12:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 overflow-hidden">
            <div className="h-full min-h-[300px] lg:min-h-full bg-muted relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.5!2d9.3337!3d52.4397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI2JzIyLjkiTiA5wrAyMCcwMS4zIkU!5e0!3m2!1sde!2sde!4v1"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort H.G. Erdmann Sanitär- und Heizungsbau GmbH"
              />
              <div className="absolute bottom-4 left-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Am+Torfdamm+13+31558+Hagenburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "secondary" }),
                    "shadow-lg"
                  )}
                >
                  <Navigation className="mr-1.5 h-3.5 w-3.5" />
                  Route planen
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
