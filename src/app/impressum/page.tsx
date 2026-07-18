import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Impressum | H.G. Erdmann Sanitär- und Heizungsbau GmbH",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Impressum
          </h1>

          <section className="space-y-8 text-sm leading-relaxed text-foreground">
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="font-medium">H.G. Erdmann Sanitär u. Heizungsbau GmbH</p>
              <p>Am Torfdamm 13</p>
              <p>31558 Hagenburg</p>
              <p>Deutschland</p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Kontakt</h2>
              <p>
                Telefon:{" "}
                <a href="tel:+4950336063" className="text-primary hover:underline">
                  05033 / 60 63
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@sanitaer-erdmann.de"
                  className="text-primary hover:underline"
                >
                  info@sanitaer-erdmann.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://sanitaer-erdmann.de"
                  className="text-primary hover:underline"
                >
                  https://sanitaer-erdmann.de
                </a>
              </p>
            </div>

            {/* Handelsregister */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Registereintrag</h2>
              <p>Registernummer: HRB 309</p>
              <p>Registergericht: Amtsgericht Stadthagen</p>
            </div>

            {/* Geschäftsführer */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Geschäftsführer</h2>
              <p>
                Herr Marc Erdmann –{" "}
                <a href="mailto:marc@sanitaer-erdmann.de" className="text-primary hover:underline">
                  marc@sanitaer-erdmann.de
                </a>
              </p>
              <p>
                Herr Matthias Erdmann –{" "}
                <a href="mailto:info@sanitaer-erdmann.de" className="text-primary hover:underline">
                  info@sanitaer-erdmann.de
                </a>
              </p>
            </div>

            {/* USt */}
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p>USt-IdNr.: 234444/211/16040</p>
            </div>

            {/* Aufsichtsbehörde */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Aufsichtsbehörde</h2>
              <p>Handwerkskammer Hannover</p>
              <p>Berliner Allee 17</p>
              <p>30175 Hannover</p>
              <p>
                Telefon:{" "}
                <a href="tel:+495113485900" className="text-primary hover:underline">
                  0511 348590
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@hwk-hannover.de" className="text-primary hover:underline">
                  info@hwk-hannover.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.hwk-hannover.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.hwk-hannover.de
                </a>
              </p>
            </div>

            {/* Inhaltlich Verantwortlicher */}
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Inhaltlich Verantwortlicher gemäß § 18 MStV
              </h2>
              <p>Marc Erdmann (Anschrift wie oben)</p>
            </div>

            {/* Alternative Streitbeilegung */}
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Alternative Streitbeilegung
              </h2>
              <p className="text-muted-foreground">
                Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle sind wir nicht verpflichtet und
                nicht bereit.
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Haftungsausschluss</h2>
              <p className="text-muted-foreground mb-3">
                Alle Informationen und sonstigen Angaben auf dieser Website sind
                unverbindlich und unterliegen dem Vorbehalt der jederzeitigen
                Änderung. Jede Haftung für die Richtigkeit und Vollständigkeit
                der Informationen sind ausgeschlossen. Alle auf unseren
                Internetseiten veröffentlichten Informationen wurden nach bestem
                Wissen und Gewissen erstellt. Trotzdem gelten diese als
                unverbindlich und bilden keinerlei Rechtsansprüche insbesondere
                nicht für unmittelbare oder mittelbare Folgeschäden.
              </p>

              <h3 className="font-semibold mb-2">
                Haftungsausschluss für externe Inhalte und Links
              </h3>
              <p className="text-muted-foreground mb-3">
                Unsere Website enthält Inhalte von Drittanbietern sowie Links zu
                externen Websites. Beim Zugriff auf solche Inhalte oder beim
                Anklicken externer Links verlassen Sie den
                Verantwortungsbereich unserer Website. Wir übernehmen keine
                Verantwortung für die Inhalte, die Verfügbarkeit oder die
                Datenschutzpraktiken externer Websites oder eingebundener
                Drittinhalte. Sollten uns Rechtsverletzungen bekannt werden,
                werden wir die entsprechenden Inhalte oder Links umgehend
                entfernen.
              </p>

              <h3 className="font-semibold mb-2">Urheberschutz</h3>
              <p className="text-muted-foreground">
                Der gesamte Inhalt dieser Website ist urheberrechtlich
                geschützt. Weitergabe, Veränderung, gewerbliche Nutzung,
                Vervielfältigung, Übermittlung oder Verwendung auf anderen
                Webseiten ist ohne ausdrückliche schriftliche Genehmigung
                untersagt.
              </p>
            </div>

            {/* Allgemeines */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Allgemeines</h2>
              <p className="text-muted-foreground mb-2">
                Für die Ausführung und Abwicklung von Aufträgen gelten unsere
                Allgemeinen Geschäftsbedingungen, die Ihnen auf Wunsch
                zugestellt werden.
              </p>
              <p className="text-muted-foreground">
                Soweit unser Leistungsspektrum auch Arbeiten aus anderen
                Gewerken wie zum Beispiel Elektro oder Fliesen umfasst, werden
                diese Arbeiten durch von uns beauftragte Meisterbetriebe
                ausgeführt.
              </p>
            </div>

            {/* Bildquellen */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Bildquellen</h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                VIGOUR GmbH, KEUCO GmbH &amp; Co. KG, Bette GmbH &amp; Co. KG,
                Gessi S.p.A., Geberit Vertriebs GmbH, burgbad Aktiengesellschaft,
                Kermi GmbH, Vaillant Deutschland GmbH &amp; Co. KG, Helios
                Ventilatoren GmbH + Co KG, Easy Sanitary Solutions GmbH, Kludi
                GmbH &amp; Co. KG, August Brötje GmbH, Buderus / Bosch
                Thermotechnik GmbH, WOLF GMBH, COSMO GmbH, Vallox GmbH, Hansa
                Armaturen GmbH, Adobe Stock: Adobe Systems Software Ireland
                Limited, Viessmann Climate Solutions SE, ETA Heiztechnik GmbH,
                ÖkoFEN Heiztechnik GmbH, rcphotostock.com.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
