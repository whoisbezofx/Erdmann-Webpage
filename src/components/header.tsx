"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu, Clock } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-primary text-primary-foreground text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Mo–Do: 08:00–16:00 | Fr: 08:00–12:00
          </span>
        </div>
        <a
          href="tel:+4950336063"
          className="flex items-center gap-1.5 font-medium hover:underline"
        >
          <Phone className="h-3.5 w-3.5" />
          05033 / 60 63
        </a>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Erdmann Sanitär- und Heizungsbau Wartungsdienst"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+4950336063"
            className={cn(buttonVariants({ size: "sm" }), "ml-3")}
          >
            <Phone className="mr-1.5 h-3.5 w-3.5" />
            Anrufen
          </a>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" size="icon" />}
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
    </header>
  );
}
