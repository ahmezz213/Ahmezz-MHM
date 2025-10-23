"use client"

import HeroSection from "@/components/hero-section"
import WorkflowSection from "@/components/workflow-section"
import ServicesSection from "@/components/services-section"
import WOSSection from "@/components/wos-section"
import MHMSection from "@/components/mhm-section"
import SubsidiariesSection from "@/components/subsidiaries-section"
import AgenciesSection from "@/components/agencies-section"
import AhmezzTeamSection from "@/components/ahmezz-team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AhmezzSpotlight from "@/components/ahmezz-spotlight"

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WorkflowSection />
      <ServicesSection />
      <WOSSection />
      <MHMSection />
      <SubsidiariesSection />
      <AgenciesSection />
      <AhmezzTeamSection />
      <ContactSection />
      <Footer />
      <AhmezzSpotlight />
    </main>
  )
}
