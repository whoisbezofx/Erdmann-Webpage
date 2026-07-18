import Image from "next/image";

const partners = [
  { name: "KEUCO", src: "/partners/keuco.png" },
  { name: "Kermi", src: "/partners/kermi.png" },
  { name: "KALDEWEI", src: "/partners/kaldewei.png" },
  { name: "VIGOUR", src: "/partners/vigour.png" },
  { name: "burgbad", src: "/partners/burgbad.png" },
  { name: "Geberit", src: "/partners/geberit.png" },
  { name: "HANSA", src: "/partners/hansa.png" },
  { name: "Vallox", src: "/partners/vallox.png" },
  { name: "Buderus", src: "/partners/buderus.png" },
  { name: "Stiebel Eltron", src: "/partners/stiebel.png" },
  { name: "COSMO", src: "/partners/cosmo.png" },
  { name: "Fröling", src: "/partners/froeling.png" },
  { name: "Dallmer", src: "/partners/dallmer.png" },
  { name: "HEWI", src: "/partners/hewi.png" },
  { name: "elements", src: "/partners/elements.png" },
  { name: "Schell", src: "/partners/schell.png" },
  { name: "KESSEL", src: "/partners/kessel.png" },
  { name: "Rosenberg", src: "/partners/rosenberg.png" },
];

export function PartnersSection() {
  return (
    <section className="py-8 border-y bg-muted/20 overflow-hidden">
      <div className="relative flex">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* scrolling track – items duplicated for seamless loop */}
        <div className="animate-marquee flex shrink-0 items-center gap-0">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center px-10"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={120}
                height={48}
                className="h-9 w-auto object-contain opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
