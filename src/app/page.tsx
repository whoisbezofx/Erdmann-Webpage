import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { PromisesSection } from "@/components/sections/promises";
import { EmergencySection } from "@/components/sections/emergency";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PromisesSection />
        <EmergencySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
