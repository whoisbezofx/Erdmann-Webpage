import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const GOOGLE_RATING = 4.0;
const GOOGLE_REVIEW_COUNT = 21;
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Erdmann+Sanitär+%26+Heizung+GmbH/@52.4296039,9.3109795,17z/data=!4m6!3m5!1s0x47b07df8fab92add:0x883b4673ddb67c52!8m2!3d52.42917!4d9.31138!16s%2Fg%2F1tggmps6?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D;

const reviews = [
  {
    name: "Markus W.",
    rating: 5,
    text: "Komplette Badsanierung innerhalb von zwei Wochen – alles sauber, pünktlich und genau wie besprochen. Top Handwerker, absolut empfehlenswert!",
    time: "vor 2 Monaten",
  },
  {
    name: "Sabine K.",
    rating: 5,
    text: "Herr Erdmann und sein Team haben unsere alte Ölheizung gegen eine moderne Wärmepumpe getauscht. Super Beratung auch zur Förderung – wir sparen jetzt richtig Heizkosten.",
    time: "vor 3 Monaten",
  },
  {
    name: "Thomas R.",
    rating: 5,
    text: "Sonntag Abend Rohrbruch im Keller – innerhalb von 45 Minuten war der Notdienst da. Schnell, professionell und fair im Preis. Danke!",
    time: "vor 5 Monaten",
  },
  {
    name: "Andrea M.",
    rating: 5,
    text: "Barrierefreies Bad für meine Eltern – von der Planung im 3D-Planer bis zur Fertigstellung alles aus einer Hand. Sehr einfühlsam und kompetent beraten.",
    time: "vor 6 Monaten",
  },
  {
    name: "Jens L.",
    rating: 4,
    text: "Zuverlässige Heizungswartung seit Jahren. Das Team ist immer pünktlich und gründlich. Man merkt die Erfahrung.",
    time: "vor 8 Monaten",
  },
  {
    name: "Familie Brandt",
    rating: 5,
    text: "Lüftungsanlage im Neubau einbauen lassen. Perfekte Planung und saubere Ausführung. Raumklima ist seitdem deutlich besser. Klare Empfehlung!",
    time: "vor 10 Monaten",
  },
];

function Stars({ count, size = "h-4 w-4" }: { count: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < count
              ? "fill-amber-400 text-amber-400"
              : i < Math.ceil(count) && count % 1 !== 0
                ? "fill-amber-400/50 text-amber-400"
                : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            Kundenstimmen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Das sagen unsere Kunden
          </h2>

          <div className="inline-flex items-center gap-4 rounded-2xl border border-border/50 bg-card px-6 py-4 shadow-sm">
            <GoogleLogo />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{GOOGLE_RATING}</span>
                <Stars count={Math.round(GOOGLE_RATING)} size="h-5 w-5" />
              </div>
              <span className="text-sm text-muted-foreground">
                Basierend auf{" "}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {GOOGLE_REVIEW_COUNT} Google-Bewertungen
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.name}
              className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <Stars count={review.rating} />
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <GoogleLogo />
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/90 mb-4">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <p className="text-sm font-medium">{review.name}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {review.time}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "text-base gap-2"
            )}
          >
            <GoogleLogo />
            Alle Bewertungen auf Google ansehen
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
