"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#aktuelles", label: "Aktuelles" },
  { href: "#notdienst", label: "Notdienst" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        {/* Mobile: logo left, hamburger right */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Erdmann Sanitär- und Heizungsbau Wartungsdienst"
              width={140}
              height={47}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={scrolled ? "" : "text-white hover:bg-white/20"}
                />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menü öffnen</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-base font-medium text-foreground rounded-md hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <a
                    href="tel:+4950336063"
                    className={cn(buttonVariants(), "w-full")}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    05033 / 60 63
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop: all links + button centered */}
        <nav className="hidden md:flex items-center justify-center gap-1 w-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+4950336063"
            className={
              scrolled
                ? cn(buttonVariants({ size: "sm" }), "ml-3")
                : "ml-3 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md border border-white/40 text-white bg-white/10 hover:bg-white/20 transition-colors"
            }
          >
            <Phone className="h-3.5 w-3.5" />
            Anrufen
          </a>
        </nav>
      </div>
    </header>
  );
}
