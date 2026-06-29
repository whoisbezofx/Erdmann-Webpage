import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H.G. Erdmann Sanitär- und Heizungsbau GmbH | Hagenburg",
  description:
    "Ihr Fachbetrieb für Badsanierung, Heizungsbau, Lüftung und Notdienst in Hagenburg. Seit Generationen zuverlässig und kompetent.",
  keywords: [
    "Sanitär",
    "Heizungsbau",
    "Badsanierung",
    "Hagenburg",
    "Notdienst",
    "Erdmann",
    "barrierefrei",
    "Wärmepumpe",
  ],
  openGraph: {
    title: "H.G. Erdmann Sanitär- und Heizungsbau GmbH",
    description:
      "Badsanierung und Heizungsbau in Hagenburg – Verlässlich, kompetent, transparent.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
