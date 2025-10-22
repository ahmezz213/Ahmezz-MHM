"use client"

import type React from "react"
import {
  Brain,
  Mail,
  PhoneCall,
  LayoutDashboard,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Users,
  Target,
  Bot,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CTA_LINK = "https://calendly.com/ahmezz-mhm/30min"

type Workflow = {
  icon: React.ReactNode
  title: string
  goal: string
  features: string[]
  outcome: string
}

const WORKFLOWS: Workflow[] = [
  {
    icon: <Mail className="h-5 w-5 text-purple-600" />,
    title: "AI-Powered Cold Outreach System",
    goal: "Automate outbound lead generation with personalized follow-ups that actually convert.",
    features: [
      "Automated lead sourcing and AI-driven personalization",
      "Intelligent follow-ups that adapt to response patterns",
      "Calendar-integrated booking system",
      "Real-time performance dashboards",
    ],
    outcome: "Predictable flow of qualified meetings with zero manual outreach.",
  },
  {
    icon: <Target className="h-5 w-5 text-purple-600" />,
    title: "Inbound Lead Qualifier & Router",
    goal: "Turn every inbound lead into an immediate response and qualified opportunity.",
    features: [
      "AI-driven lead scoring based on fit and intent",
      "Automatic CRM tagging and team assignment",
      "Instant follow-up within minutes of inquiry",
      "Smart Slack alerts for hot leads",
    ],
    outcome: "Every lead gets qualified and routed before your team starts their day.",
  },
  {
    icon: <Bot className="h-5 w-5 text-purple-600" />,
    title: "Inbound Reply Automation",
    goal: "Handle email replies like a seasoned SDR would—faster and smarter.",
    features: [
      "AI classifies intent: interested, neutral, or objection",
      "Generates contextual, human-like responses automatically",
      "Books meetings directly from email thread",
      "Auto-updates CRM with conversation data",
    ],
    outcome: "Emails answered and meetings booked while you sleep.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-purple-600" />,
    title: "Automated Client Onboarding",
    goal: "Transform onboarding from chaotic to seamless in 4 weeks.",
    features: [
      "Auto-creates portal and sends welcome sequences",
      "Collects all required info without manual chasing",
      "Notifies team when onboarding is complete",
      "Reduces back-and-forth emails by 90%",
    ],
    outcome: "Clients feel supported from day one. Your team saves 10+ hours/week.",
  },
  {
    icon: <PhoneCall className="h-5 w-5 text-purple-600" />,
    title: "Post-Call Follow-Up & Deal Tracking",
    goal: "Never let a conversation momentum die.",
    features: [
      "AI generates meeting notes and action items automatically",
      "Updates deal stage in CRM based on conversation",
      "Sends personalized follow-up emails within minutes",
      "Surfaces next-step actions for your team",
    ],
    outcome: "No manual admin work. Deals move faster because nothing slips through.",
  },
  {
    icon: <LayoutDashboard className="h-5 w-5 text-purple-600" />,
    title: "Sales Ops Dashboard & ROI Tracking",
    goal: "See exactly what's working and where to optimize next.",
    features: [
      "Tracks outreach, replies, meetings, and conversions end-to-end",
      "Shows automation ROI and time saved in real time",
      "Identifies top-performing workflows at a glance",
      "Benchmarks performance month-over-month",
    ],
    outcome: "Full visibility into pipeline health and automation impact.",
  },
]

export default function WosSection() {
  const Feature = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
    <Card className="border-purple-200/60 bg-white/90 hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-100">{icon}</div>
        <CardTitle className="text-base text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{desc}</p>
      </CardContent>
    </Card>
  )

  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2 text-sm text-slate-700">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-600 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )

  return (
    <section id="wos" className="relative bg-white py-20 md:py-32">
      {/* Subtle accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 h-32 bg-gradient-to-b from-purple-100/40 to-transparent blur-3xl"
      />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        {/* Hero - Compact & Powerful */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">WOS • @ Ahmezz</Badge>
            <span className="text-xs text-slate-600">Problem Solver</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Sales infrastructure that actually scales
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Most teams lose deals to slow responses and manual processes. We automate the entire sales engine—from
            outreach to onboarding—so you close more deals in less time.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
            >
              <a href="https://woslive.lovable.app" target="_blank" rel="noopener noreferrer">
                See Live Workflow
              </a>
            </Button>
          </div>
        </div>

        {/* What We Build */}
        <div className="mt-20 mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Workflows That Move Deals Forward</h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Each system is custom-built for your workflow and integrated with your existing stack.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORKFLOWS.map((wf) => (
              <Card key={wf.title} className="border-slate-200 bg-white/95 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">{wf.icon}</div>
                    <CardTitle className="text-base text-slate-900">{wf.title}</CardTitle>
                  </div>
                  <p className="text-xs text-purple-700 font-semibold">{wf.goal}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {wf.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
                    <p className="text-xs font-semibold text-purple-900">
                      <span className="text-purple-700">→ </span>
                      {wf.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Problem & Solution (Subtle Social Proof) */}
        <div className="mt-20 mb-20 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-purple-50/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">The Reality</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <strong>40% of leads</strong> never get a response in the first hour
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <strong>Manual follow-ups</strong> consume 6+ hours/week per team member
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <strong>Deal pipeline visibility</strong> is fragmented across tools
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">What Changes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <strong>Leads responded to in 5 minutes</strong> automatically
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <strong>10+ hours/week saved</strong> on admin work per team member
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <strong>Real-time visibility</strong> into every lead and conversation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who We Work With - Outcomes Focused */}
        <div className="mt-20 mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">Built for Growth Teams</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "B2B & SaaS Companies",
                problem: "Losing deals to slow response times",
                solution: "Scale outreach without hiring SDRs",
                outcome: "3–5× more qualified demos booked",
              },
              {
                title: "Agencies & Service Firms",
                problem: "Manual onboarding chaos and follow-ups",
                solution: "Automate client communication workflows",
                outcome: "Seamless client experience, 10+ hrs/week saved",
              },
              {
                title: "Consulting & Coaching",
                problem: "Discovery calls and follow-ups slip through cracks",
                solution: "Automated discovery call booking and nurturing",
                outcome: "No missed leads, consistent pipeline fill",
              },
            ].map((segment, i) => (
              <Card key={i} className="border-slate-200 bg-white hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-base text-slate-900">{segment.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-600 uppercase">The Problem</p>
                    <p className="text-sm text-slate-700 mt-1">{segment.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600 uppercase">Our Solution</p>
                    <p className="text-sm text-slate-700 mt-1">{segment.solution}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs font-semibold text-purple-700 uppercase">Expected Outcome</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">{segment.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works - Streamlined */}
        <div className="mt-20 mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Implementation Timeline</h3>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: "Week 1", title: "Discovery", desc: "Map your sales process and priorities" },
              { step: "Weeks 2-3", title: "Build & Test", desc: "Custom workflows built and tested" },
              { step: "Week 4", title: "Launch", desc: "Live with team training and support" },
              { step: "Ongoing", title: "Optimize", desc: "Data-driven improvements and scaling" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-md transition-all text-center"
              >
                <p className="text-sm font-bold text-purple-600 mb-2">{item.step}</p>
                <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose WOS */}
        <div className="mt-20 mb-20 rounded-xl border border-slate-200 bg-gradient-to-br from-purple-50/30 to-white p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why WOS</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Brain className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Problem-First Approach</h4>
                <p className="text-sm text-slate-600">
                  We don't sell tools. We solve your specific sales bottleneck with workflows that fit your business.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Transparent ROI Tracking</h4>
                <p className="text-sm text-slate-600">
                  See exactly how much time and money you're saving. We track every metric that matters.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Done-For-You Service</h4>
                <p className="text-sm text-slate-600">
                  We build, deploy, manage, and optimize. You just focus on closing deals.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Built for Your Stack</h4>
                <p className="text-sm text-slate-600">
                  Seamless integration with your existing CRM, calendar, and communication tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ - Addressing Objections Subtly */}
        <div className="mt-20 mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Common Questions</h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly will we see results?",
                a: "Most teams see 3× faster lead responses within week 1. Full ROI typically appears by week 4.",
              },
              {
                q: "Will this actually fit our workflow?",
                a: "Yes. We map your exact process and build custom workflows. You're not forcing your business into a tool.",
              },
              {
                q: "What if something breaks?",
                a: "We manage the entire system. Human escalation protocols ensure nothing slips through.",
              },
              {
                q: "Can we cancel anytime?",
                a: "You can, but most teams stay for 18+ months because the ROI becomes obvious quickly.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-base text-slate-900">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-purple-50/50 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to automate your sales engine?</h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Let's talk about your current bottlenecks and where WOS can create the most impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-6 rounded-lg">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Book a 30-Min Call
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 rounded-lg bg-transparent"
            >
              <a href="https://woslive.lovable.app" target="_blank" rel="noopener noreferrer">
                See Live Workflows
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
