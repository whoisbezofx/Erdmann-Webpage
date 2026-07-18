import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import { newsArticles, getArticleBySlug } from "@/lib/news";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-8">
            <Badge
              variant="secondary"
              className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              {article.category}
            </Badge>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h1>
            <p className="text-white/80 mt-1 text-lg">{article.subtitle}</p>
          </div>
        </div>

        {/* Article body */}
        <article className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-3xl">
          <Link
            href="/#aktuelles"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Image gallery */}
          {article.images && article.images.length > 0 && (
            <div className="mt-10 mb-12">
              <h2 className="text-lg font-semibold mb-4 text-foreground">
                Bildergalerie
              </h2>
              <div
                className={
                  article.images.length === 1
                    ? "grid grid-cols-1"
                    : article.images.length === 2
                    ? "grid grid-cols-2 gap-3"
                    : "grid grid-cols-2 md:grid-cols-3 gap-3"
                }
              >
                {article.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted"
                  >
                    <Image
                      src={src}
                      alt={`${article.title} – Bild ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="p-6 md:p-8 rounded-2xl bg-muted/50 border border-border/50">
            <h3 className="text-lg font-semibold mb-2">
              Haben Sie Interesse? Sprechen Sie uns an!
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Unsere Experten beraten Sie gerne persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#kontakt"
                className={cn(buttonVariants(), "text-sm")}
              >
                Beratung anfragen
              </Link>
              <a
                href="tel:+4950336063"
                className={cn(buttonVariants({ variant: "outline" }), "text-sm")}
              >
                <Phone className="mr-2 h-4 w-4" />
                05033 / 60 63
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
