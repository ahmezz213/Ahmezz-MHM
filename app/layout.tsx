import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahmezz | AMZ - AI Systems for Agencies (WOS + MHM)",
  description:
    "WOS and MHM help agencies scale with AI sales systems, autonomous agents, and operations workflow automation.",
  keywords: [
    "AI automation agency",
    "AI systems agency",
    "sales automation",
    "AI agents",
    "workflow automation",
    "Bengaluru",
    "marketing agencies",
  ],
  openGraph: {
    title: "Ahmezz | AMZ - AI Systems for Agencies",
    description:
      "WOS (WebOps Studio) and MHM deliver AI-driven sales workflows, autonomous email agents, voice receptionists, and more.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('theme') === 'light' || (!localStorage.getItem('theme') && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.remove('dark')
              } else {
                document.documentElement.classList.add('dark')
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange>
          {children}
        </ThemeProvider>

        <Script id="bootstrap-datalayer" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>

        <Script id="schema-wos" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "WOS (WebOps Studio)",
            description:
              "AI systems agency that builds workflow-first, ROI-driven sales automation for marketing and creative agencies.",
            areaServed: "IN",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bengaluru",
              addressCountry: "IN",
            },
            serviceType: "AI Automation Agency",
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Lead Generation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automated Email Sales Agents" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "NLP Voice Receptionists" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cold Email Outreach" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automated Client Onboarding Systems" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Front-End Dashboards" } },
            ],
          })}
        </Script>
      </body>
    </html>
  )
}
