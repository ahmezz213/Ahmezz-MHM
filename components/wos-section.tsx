"use client"

import type React from "react"
import { Brain, Mail, PhoneCall, Sparkles, LayoutDashboard, Rocket, LineChart, Calendar, Workflow } from "lucide-react"

const CAL_LINK = "https://calendly.com/ahmezz-mhm/30min"

export default function WosSection() {
  const openCal = () => window.open(CAL_LINK, "_blank", "noopener,noreferrer")

  return (
    <div className="relative bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-purple-200/60 to-transparent blur-2xl"
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        {/* Hero */}
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
            WOS
            <span className="inline-block h-1 w-1 rounded-full bg-purple-400" />
            WebOps Studio • Bengaluru
          </span>

          {/* Owner line (explicit and visible) */}
          <div className="mb-2">
            <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[12px] font-medium text-purple-700">
              Owner: Taufiq Ahmed
            </span>
          </div>

          <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            We build AI systems that actually close deals.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Workflow‑first automation with measurable ROI. Faster follow‑ups. Higher conversions. Full visibility.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={openCal}
              className="inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Demo
            </button>
            <button
              onClick={openCal}
              className="inline-flex items-center rounded-lg border border-purple-200 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-50"
            >
              <Workflow className="mr-2 h-4 w-4" />
              See a Live Workflow
            </button>
          </div>
        </div>

        {/* What We Build */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Brain className="h-5 w-5 text-purple-700" />}
            title="AI‑Powered Lead Generation"
            desc="End‑to‑end outbound workflows that find, qualify, and warm up leads automatically."
          />
          <Feature
            icon={<Mail className="h-5 w-5 text-purple-700" />}
            title="Automated Email Agents"
            desc="Autonomous agents that handle follow‑ups, bookings, and pipeline nurturing."
          />
          <Feature
            icon={<PhoneCall className="h-5 w-5 text-purple-700" />}
            title="NLP Voice Receptionists"
            desc="AI voice agents that answer inbound calls, qualify leads, and schedule demos."
          />
          <Feature
            icon={<Sparkles className="h-5 w-5 text-purple-700" />}
            title="Deep Cold Email Outreach"
            desc="High‑personalization campaigns with real‑time performance tracking."
          />
          <Feature
            icon={<Rocket className="h-5 w-5 text-purple-700" />}
            title="Automated Client Onboarding"
            desc="From signed deal to kickoff — fully automated hand‑offs and tasks."
          />
          <Feature
            icon={<LayoutDashboard className="h-5 w-5 text-purple-700" />}
            title="Custom Front‑End Dashboards"
            desc="Real‑time monitoring of pipeline, lead flow, and automation ROI."
          />
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-slate-900">How It Works</h2>
          <ol className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3">
            <Step step="01" title="Setup" desc="Map your workflow. Integrate tools. Launch the pilot." />
            <Step
              step="02"
              title="Data Tracking"
              desc="Embedded analytics for lead quality, conversions, and time saved."
            />
            <Step step="03" title="Optimize" desc="Iterate fast based on real usage and outcomes." />
          </ol>
        </div>

        {/* Why WOS */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-slate-900">Why WOS</h2>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Pill title="Workflow‑first" />
            <Pill title="ROI‑driven" />
            <Pill title="Fast Execution" />
            <Pill title="Transparent Reporting" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900">Let’s build your engine</h3>
          <p className="mt-2 text-sm text-slate-600">Quick setup. Pilot first. Iterate fast. Measurable outcomes.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={openCal}
              className="inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Demo
            </button>
            <button
              onClick={openCal}
              className="inline-flex items-center rounded-lg border border-purple-200 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-50"
            >
              <LineChart className="mr-2 h-4 w-4" />
              See a Live Workflow
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <LineChart className="h-4 w-4 text-purple-600" />
            <span>{"Embedded analytics • Continuous optimization • Rapid iterations"}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group rounded-xl border border-purple-200 bg-white p-5 shadow-sm transition-colors hover:bg-purple-50">
      <div className="mb-3 inline-flex items-center justify-center rounded-md bg-purple-100 p-2">{icon}</div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  )
}

function Step({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <li className="rounded-xl border border-purple-200 bg-white p-5 text-left">
      <div className="text-xs font-semibold text-purple-700">{step}</div>
      <div className="mt-1 text-base font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </li>
  )
}

function Pill({ title }: { title: string }) {
  return (
    <div className="rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700">
      {title}
    </div>
  )
}
