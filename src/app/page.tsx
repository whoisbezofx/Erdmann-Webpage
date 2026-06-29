import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { BadplanerSection } from "@/components/sections/badplaner";
import { PromisesSection } from "@/components/sections/promises";
import { ReviewsSection } from "@/components/sections/reviews";
import { EmergencySection } from "@/components/sections/emergency";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BadplanerSection />
        <PromisesSection />
        <ReviewsSection />
        <EmergencySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
