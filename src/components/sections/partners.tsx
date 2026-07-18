const partners = [
  "KEUCO",
  "Kermi",
  "VIGOUR",
  "Geberit",
  "HANSA",
  "KALDEWEI",
  "burgbad",
  "Vaillant",
  "Viessmann",
  "Buderus",
  "Brötje",
  "WOLF",
  "Vallox",
  "Kludi",
  "COSMO",
  "Helios",
];

export function PartnersSection() {
  return (
    <section className="py-10 border-y bg-muted/20 overflow-hidden">
      <div className="relative flex">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* scrolling track – items duplicated for seamless loop */}
        <div className="animate-marquee flex shrink-0 items-center gap-0">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={i}
              className="shrink-0 px-10 text-base font-semibold tracking-wide text-muted-foreground/60 uppercase select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
