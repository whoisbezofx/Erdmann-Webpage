"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent");
    if (!choice) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
            Diese Website verwendet ausschließlich technisch notwendige Cookies.
            Weitere Informationen findest du in unserer{" "}
            <Link href="/datenschutz" className="text-primary underline underline-offset-2 hover:no-underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={decline}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className={cn(buttonVariants({ size: "sm" }))}
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
