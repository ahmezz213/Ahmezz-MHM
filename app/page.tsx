import AgencyTicker from "@/components/agency-ticker"
import WosSection from "@/components/wos-section"
import MhmSection from "@/components/mhm-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AhmezzTeamSection from "@/components/ahmezz-team-section"

export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Top dynamic names strip - white background */}
      <AgencyTicker />

      {/* WOS: white + purple themed section */}
      <section id="wos" className="bg-white text-slate-900">
        <WosSection />
      </section>

      {/* AHMEZZ Team: subtle, white to match WOS */}
      <section className="bg-white text-slate-900">
        <AhmezzTeamSection />
      </section>

      {/* MHM: keep existing styling, wrapped on a dark canvas so WOS doesn't look odd */}
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
