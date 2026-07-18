import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Datenschutzerklärung | H.G. Erdmann Sanitär- und Heizungsbau GmbH",
};

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          <section className="space-y-10 text-sm leading-relaxed text-foreground">
            <div>
              <h2 className="text-lg font-semibold mb-3">1. Verantwortlicher</h2>
              <p className="text-muted-foreground">
                H.G. Erdmann Sanitär- und Heizungsbau GmbH<br />
                Am Torfdamm 13<br />
                31558 Hagenburg<br />
                Telefon: 05033 / 60 63<br />
                E-Mail: info@sanitaer-erdmann.de
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p className="text-muted-foreground mb-3">
                Beim Besuch unserer Website werden durch den Webserver automatisch folgende Daten
                (sog. Server-Logfiles) gespeichert:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Vom Nutzer verwendeter Browser und ggf. das Betriebssystem</li>
                <li>Hostname des zugreifenden Rechners</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs
                der Website und zur Verbesserung unseres Angebots verwendet. Eine Weitergabe an
                Dritte findet nicht statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigte Interessen).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">3. Kontaktformular und E-Mail-Kontakt</h2>
              <p className="text-muted-foreground">
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben
                (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
                (berechtigte Interessen). Die Daten werden gelöscht, sobald sie für die Erfüllung
                des Zwecks nicht mehr erforderlich sind.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">4. Cookies</h2>
              <p className="text-muted-foreground">
                Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den
                Betrieb der Website erforderlich sind. Es werden keine Tracking- oder
                Analyse-Cookies eingesetzt.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">5. Externe Links</h2>
              <p className="text-muted-foreground">
                Unsere Website enthält Links zu externen Websites. Für die Inhalte dieser externen
                Seiten sind ausschließlich deren Betreiber verantwortlich. Beim Anklicken eines
                externen Links verlassen Sie unsere Website; deren Datenschutzbestimmungen gelten
                dann für Sie.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">6. Ihre Rechte</h2>
              <p className="text-muted-foreground mb-3">
                Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a
                  href="mailto:info@sanitaer-erdmann.de"
                  className="text-primary hover:underline"
                >
                  info@sanitaer-erdmann.de
                </a>
              </p>
              <p className="text-muted-foreground mt-3">
                Zudem haben Sie das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde
                zu beschweren. Die zuständige Aufsichtsbehörde in Niedersachsen ist:
              </p>
              <p className="text-muted-foreground mt-2">
                Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
                Prinzenstraße 5<br />
                30159 Hannover<br />
                Tel.: 0511 120-4500<br />
                E-Mail: poststelle@lfd.niedersachsen.de
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="text-muted-foreground">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2025. Durch
                die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
                Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
