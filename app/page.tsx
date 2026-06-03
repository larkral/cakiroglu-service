import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { EmergencyCallButton } from "@/components/emergency-call-button";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <EmergencyCallButton />
    </main>
  )
}
