import AgencyTicker from "@/components/agency-ticker"
import WosSection from "@/components/wos-section"
import AhmezzTeamSection from "@/components/ahmezz-team-section"
import MhmSection from "@/components/mhm-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Top dynamic names strip - white background */}
      <AgencyTicker />

      {/* WOS: white + purple themed section with full conversion flow */}
      <WosSection />

      {/* Subtle team section */}
      <AhmezzTeamSection />

      {/* MHM on dark canvas so WOS doesn't look odd */}
      <section id="mhm" className="bg-black text-white">
        <MhmSection />
      </section>

      {/* Contact + Footer */}
      <section id="contact" className="bg-black text-white">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
