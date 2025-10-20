"use client"

import type React from "react"
import {
  Brain,
  Mail,
  PhoneCall,
  Sparkles,
  LayoutDashboard,
  Rocket,
  CheckCircle2,
  Timer,
  ShieldCheck,
  Users,
  Target,
  HelpCircle,
  Bot,
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
    goal: "Automate outbound lead generation, nurturing, and meeting booking.",
    features: [
      "Automated lead sourcing and enrichment",
      "Personalized cold emails powered by AI",
      "Smart follow-ups that adapt to responses",
      "Calendar-integrated booking system",
      "Real-time outreach performance dashboard",
    ],
    outcome: "A predictable flow of qualified meetings without manual outreach.",
  },
  {
    icon: <Target className="h-5 w-5 text-purple-600" />,
    title: "Inbound Lead Qualifier & Router",
    goal: "Instantly qualify and route inbound leads to the right team member.",
    features: [
      "AI-driven lead scoring based on intent and fit",
      "Automatic CRM tagging and ownership assignment",
      "Smart Slack alerts with lead summaries",
      "Instant personalized follow-up within minutes",
    ],
    outcome: "Every inbound lead is responded to, prioritized, and handled fast.",
  },
  {
    icon: <Bot className="h-5 w-5 text-purple-600" />,
    title: "Inbound Reply Automation",
    goal: "Handle inbound email responses with AI-powered classification and booking.",
    features: [
      "Classifies intent (interested / neutral / objection)",
      "Generates contextual, human-like responses",
      "Books meetings directly from email thread",
      "Auto-updates CRM with interaction data",
    ],
    outcome: "Smart responses + automatic booking—we optimize for your tone over 30 days.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-purple-600" />,
    title: "Automated Client Onboarding System",
    goal: "Replace manual onboarding steps with a seamless automated process.",
    features: [
      "Auto-creates client portal upon deal closure",
      "Sends personalized welcome and onboarding instructions",
      "Collects brand info, access credentials, and contracts",
      "Notifies internal team when onboarding is complete",
    ],
    outcome: "Fast, consistent, and hands-free onboarding for every new client.",
  },
  {
    icon: <PhoneCall className="h-5 w-5 text-purple-600" />,
    title: "Post-Call Follow-Up & Deal Tracker",
    goal: "Automate call summaries, CRM updates, and next-step follow-ups.",
    features: [
      "AI-generated meeting notes and action items",
      "Auto-updates deal stage in CRM",
      "Sends personalized follow-up emails right after calls",
    ],
    outcome: "No manual admin work — calls turn into follow-ups instantly.",
  },
  {
    icon: <LayoutDashboard className="h-5 w-5 text-purple-600" />,
    title: "Sales Ops Dashboard",
    goal: "Give teams a unified, transparent view of the sales pipeline and ROI.",
    features: [
      "Tracks outreach, replies, meetings, and conversions",
      "Visualizes performance across campaigns and sources",
      "Calculates automation ROI and time saved",
      "Monitors key metrics in real time",
    ],
    outcome: "Full visibility into what’s working — and where to improve.",
  },
]

export default function WosSection() {
  const Feature = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
    <Card className="border-purple-200/60 bg-white/90">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-100">{icon}</div>
        <CardTitle className="text-base text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{desc}</p>
      </CardContent>
    </Card>
  )

  const Pill = ({ title }: { title: string }) => (
    <div className="rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700">
      {title}
    </div>
  )

  const Step = ({
    step,
    title,
    desc,
    time,
  }: {
    step: string
    title: string
    desc: string
    time?: string
  }) => (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-left">
      <div className="text-xs font-semibold text-purple-700">{step}</div>
      <div className="mt-1 text-base font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
      {time ? (
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500">
          <Timer className="h-3.5 w-3.5 text-purple-600" />
          <span>{time}</span>
        </div>
      ) : null}
    </div>
  )

  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2 text-sm text-slate-700">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-600" />
      <span>{children}</span>
    </li>
  )

  const CaseCard = ({
    title,
    before,
    after,
  }: {
    title: string
    before: string
    after: string
  }) => (
    <Card className="border-slate-200 bg-white/90">
      <CardHeader>
        <CardTitle className="text-sm font-semibold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-3">
            <div className="text-xs font-semibold text-slate-500">Before</div>
            <p className="mt-1 text-sm text-slate-700">{before}</p>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
            <div className="text-xs font-semibold text-purple-700">After</div>
            <p className="mt-1 text-sm text-purple-900">{after}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="wos" className="relative bg-white py-16 md:py-24">
      {/* subtle purple bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-purple-100/70 to-transparent blur-2xl"
      />
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">WOS • @ Ahmezz</Badge>
            <span className="text-xs text-slate-500">Owner: Taufiq Ahmed</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Smarter systems. More clients. Less effort
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We build done-for-you sales infrastructure for B2B agencies and service businesses. Our systems automate
            outbound campaigns, inbound responses, and client onboarding—so you can focus on closing deals, not managing
            processes.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Book a demo with WOS">
                Book Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
            >
              <a
                href="https://woslive.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="See a live workflow"
              >
                See a Live Workflow
              </a>
            </Button>
          </div>
        </div>

        {/* Problem / Pain Points */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">Common Roadblocks We Remove</h3>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Pill title="Manual follow‑ups" />
            <Pill title="Data silos" />
            <Pill title="Slow lead response" />
            <Pill title="Ops overhead" />
          </div>
        </div>

        {/* What We Build (Done-For-You Systems) */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">What We Build (Done-For-You Systems)</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
            All systems are custom-built for your workflow, integrated with your tools, and optimized based on real
            performance data.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<Brain className="h-5 w-5 text-purple-600" />}
              title="Lead Generation Engine"
              desc="Outbound systems that find, qualify, and warm up leads — predictable meetings, less manual work."
            />
            <Feature
              icon={<Mail className="h-5 w-5 text-purple-600" />}
              title="Autonomous Email Follow‑ups"
              desc="Context‑aware replies and booking that keep deals moving without babysitting threads."
            />
            <Feature
              icon={<Bot className="h-5 w-5 text-purple-600" />}
              title="Inbound Reply Automation"
              desc="Handle inbound email responses with AI-powered classification and booking."
            />
            <Feature
              icon={<Rocket className="h-5 w-5 text-purple-600" />}
              title="Onboarding Automation"
              desc="Hands‑free onboarding from ‘closed won’ to kickoff — consistent and fast."
            />
            <Feature
              icon={<PhoneCall className="h-5 w-5 text-purple-600" />}
              title="Voice Intake & Scheduling"
              desc="Reception that answers, qualifies, and books — no missed calls, no missed leads."
            />
            <Feature
              icon={<Sparkles className="h-5 w-5 text-purple-600" />}
              title="Deep Personalization"
              desc="High‑signal outreach at scale with adaptive follow‑ups and measurable lift."
            />
            <Feature
              icon={<LayoutDashboard className="h-5 w-5 text-purple-600" />}
              title="Sales Ops Visibility"
              desc="Dashboards that show pipeline health, ROI, and where to optimize next."
            />
          </div>
        </div>

        {/* The Four Core Systems */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">The Four Core Systems</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
            Sales infrastructure built specifically for your workflow, integrated with your tools, deployed in weeks.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKFLOWS.map((wf) => (
              <Card key={wf.title} className="border-slate-200 bg-white/90">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    {wf.icon}
                    <CardTitle className="text-base text-slate-900">{wf.title}</CardTitle>
                  </div>
                  <div className="mt-2 text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">Goal:</span> {wf.goal}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="mb-1 text-xs font-semibold text-slate-700">Core Features</div>
                    <ul className="space-y-1.5">
                      {wf.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-600" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-purple-200 bg-purple-50 p-3 text-xs text-purple-900">
                    <span className="font-semibold">Outcome: </span>
                    {wf.outcome}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">Who We Work With</h3>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3">
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <Target className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-base">Marketing & Creative Agencies</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Automate outbound prospecting, handle inbound instantly, streamline client onboarding.
                <div className="mt-3 text-xs font-semibold text-purple-600">
                  Result: 3–5× more meetings, zero admin bottlenecks
                </div>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <Users className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-base">B2B SaaS Companies</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Scale personalized outreach without hiring SDRs. Qualify inbound leads 24/7. Track pipeline performance.
                <div className="mt-3 text-xs font-semibold text-purple-600">Result: Lower CAC, faster sales cycles</div>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-base">Consulting & Service Businesses</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Automate discovery call booking, instant response to inquiries, seamless client onboarding.
                <div className="mt-3 text-xs font-semibold text-purple-600">
                  Result: More time selling, less time on operations
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You Get — Deliverables, Timeline, Not Included (kept) */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-base">What You Get</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <ListItem>Built‑for‑you workflows (no DIY)</ListItem>
                <ListItem>Integration with your CRM, calendar, and comms</ListItem>
                <ListItem>Custom prompts and routing logic for agents</ListItem>
                <ListItem>Dashboard for pipeline and performance</ListItem>
                <ListItem>Support and optimization for 60–90 days</ListItem>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-base">Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <ListItem>Week 1: Discovery, mapping, success metrics</ListItem>
                <ListItem>Weeks 2–3: Build core workflow + agent</ListItem>
                <ListItem>Week 4: Pilot launch + tracking</ListItem>
                <ListItem>Weeks 5–6: Iterate, optimize, handover</ListItem>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-base">What’s Not Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <ListItem>Buying third‑party tools or seats on your behalf</ListItem>
                <ListItem>Cold data lists (we’ll integrate your sources)</ListItem>
                <ListItem>Done‑for‑you copywriting beyond initial flows</ListItem>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How It Works / Process (kept) */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">How It Works</h3>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Step step="01" title="Discovery" desc="Goals, data, constraints" time="~2 days" />
            <Step step="02" title="Design" desc="Workflow + agent spec" time="~3 days" />
            <Step step="03" title="Build" desc="Integrations, routing, QA" time="~1–2 weeks" />
            <Step step="04" title="Launch" desc="Pilot with tracking" time="~3 days" />
            <Step step="05" title="Optimize" desc="Iterate on real usage" time="~1–2 weeks" />
          </div>
        </div>

        {/* Proof / Mini Case Stories (kept) */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">Proof</h3>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2">
            <CaseCard
              title="Creative Agency • Lead Intake"
              before="Manual email follow‑ups; slow replies; untracked demos"
              after="3× quicker responses; auto‑booking; 28% lift in qualified demos in 60 days"
            />
            <CaseCard
              title="Performance Agency • Onboarding"
              before="Fragmented forms; unclear status; repeat questions"
              after="Unified onboarding; 10+ hours/week saved; fewer back‑and‑forth emails"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Ask for case studies">
                Ask for a Case Study
              </a>
            </Button>
          </div>
        </div>

        {/* Why WOS / Why Ahmezz (kept) */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">Why WOS</h3>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Pill title="Problem‑first" />
            <Pill title="Workflow‑led" />
            <Pill title="ROI‑driven" />
            <Pill title="Transparent Reporting" />
          </div>
        </div>

        {/* Packages / Pricing (kept) */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">Packages</h3>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base">Pilot</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                One workflow + basic dashboard. Ideal to validate quickly. Starting at $X.
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base">Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Multi‑workflow system + optimization. Best for scaling teams. Starting at $X.
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base">Enterprise</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Custom stack + reporting + advanced automations. Quote on request.
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Get a custom proposal">
                Get a Custom Proposal
              </a>
            </Button>
          </div>
        </div>

        {/* FAQ (kept) */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900">FAQ</h3>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2">
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <HelpCircle className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-base">Are you an AI agency?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                No. We’re a problem‑solving partner. We install sales infrastructure and use AI only where it gives you
                speed and reliability.
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <HelpCircle className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-base">Do you build it or do we?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                We build it for you end‑to‑end. You get docs, training, and optimization support post‑launch.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA (kept) */}
        <div className="mt-16 rounded-xl border border-purple-200 bg-purple-50 p-6 text-center">
          <h4 className="text-lg font-semibold text-purple-900">Let’s build your engine</h4>
          <p className="mt-1 text-sm text-purple-800">Quick intro call. 30 minutes. Actionable next steps.</p>
          <div className="mt-4">
            <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Book a 30 minute call">
                Book a 30‑min Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
