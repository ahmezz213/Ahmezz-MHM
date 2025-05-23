import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhyChooseSection from "@/components/why-choose-section"
import SubsidiariesSection from "@/components/subsidiaries-section"
import MhmSection from "@/components/mhm-section"
import CriticomSection from "@/components/criticom-section"
import YapronSection from "@/components/yapron-section"
import ComingSoonSection from "@/components/coming-soon-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
        <HeroSection />
        <WhyChooseSection />
        <SubsidiariesSection />
        <MhmSection />
        <CriticomSection />
        <YapronSection />
        <ComingSoonSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </main>
  )
}
