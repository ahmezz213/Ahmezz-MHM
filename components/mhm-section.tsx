"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MessageSquare, Zap, CheckCircle2, Building2, Users, TrendingUp, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CTA_LINK = "https://calendly.com/ahmezz-mhm/30min"

export default function MhmSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const Capability = ({
    title,
    desc,
    icon,
    index,
  }: {
    title: string
    desc: string
    icon: React.ReactNode
    index: number
  }) => (
    <div
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      className="rounded-xl border border-cyan-200/40 bg-white/40 backdrop-blur-sm p-6 hover:border-blue-400/60 hover:bg-white/60 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex-shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  )

  const Step = ({
    number,
    title,
    desc,
  }: {
    number: string
    title: string
    desc: string
  }) => (
    <div className="rounded-xl border border-cyan-200/40 bg-white/40 backdrop-blur-sm p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold flex-shrink-0">
          {number}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section
      id="mhm"
      className="relative bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 py-20 md:py-32 overflow-hidden"
    >
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d="M0,400 Q300,350 600,400 T1200,400 L1200,0 L0,0 Z" fill="url(#waveGrad1)" className="animate-pulse" />
          <path
            d="M0,500 Q300,450 600,500 T1200,500 L1200,800 L0,800 Z"
            fill="url(#waveGrad1)"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        {/* Hero */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 mx-auto">MHM • @ Ahmezz</Badge>

          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-blue-600">Redefining Business</span>
              <br />
              <span className="text-blue-600">Communication</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">with AI</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent">
                Voice Agents
              </span>
            </h2>
            {/* Play button overlay effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute inset-3 bg-gray-400 rounded-full flex items-center justify-center opacity-20">
                  <Play className="h-8 w-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            AI that speaks, listens, and solves — just like a human.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-base font-semibold"
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-400 text-gray-700 hover:bg-white/80 px-8 py-6 rounded-full text-base font-semibold bg-white"
            >
              <Play className="h-5 w-5 mr-2" />
              Listen to a Voice Agent
            </Button>
          </div>
        </div>

        {/* What We Do */}
        <div className="mt-24 mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">What We Do</h3>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We don't just build chatbots. We build voice infrastructure that plugs directly into your sales system and
            handles every conversation from first touch to booked meeting.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Capability
              index={0}
              icon={<Phone className="h-6 w-6" />}
              title="Inbound Lead Qualification"
              desc="AI agents capture and qualify leads 24/7 with natural, human-like conversations."
            />
            <Capability
              index={1}
              icon={<Zap className="h-6 w-6" />}
              title="Appointment Setting"
              desc="Automated follow-ups, handle objections, and sync with your CRM instantly."
            />
            <Capability
              index={2}
              icon={<MessageSquare className="h-6 w-6" />}
              title="Customer Support"
              desc="Handle FAQs, orders, and follow-ups with intelligent human escalation."
            />
            <Capability
              index={3}
              icon={<TrendingUp className="h-6 w-6" />}
              title="System Integration"
              desc="Seamless CRM, calendar, and backend sync with real-time dashboards."
            />
          </div>
        </div>

        {/* Why MHM */}
        <div className="mt-24 mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why MHM</h3>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: "Service-Based", desc: "We manage your infrastructure, not just sell tools" },
              { title: "Deep Integration", desc: "Wired into CRM, calendars, and full sales stack" },
              { title: "Human-Like Voice", desc: "Advanced NLP that sounds genuine, not robotic" },
              { title: "India-First Design", desc: "Built for Indian B2B sales cycles and culture" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-cyan-200/40 bg-white/40 backdrop-blur-sm p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mt-24 mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Who This Is For</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Building2 className="h-6 w-6 text-blue-600" />,
                title: "B2B Companies",
                desc: "Handle demo requests, qualify enterprise leads, and follow up with prospects automatically.",
              },
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "Agencies",
                desc: "Scale client communication, handle onboarding calls, and qualify leads for clients via voice.",
              },
              {
                icon: <Phone className="h-6 w-6 text-blue-600" />,
                title: "Real Estate",
                desc: "Never miss leads, instant property inquiries, and automatic showing bookings and follow-ups.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-cyan-200/40 bg-white/40 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    {item.icon}
                    <CardTitle className="text-base text-gray-900">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24 mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h3>
          <div className="grid gap-6 md:grid-cols-4">
            <Step
              number="1"
              title="Discovery"
              desc="Audit your communication flow and identify where voice agents add value."
            />
            <Step
              number="2"
              title="Build & Train"
              desc="Custom agent trained on your use cases and integrated with existing systems."
            />
            <Step
              number="3"
              title="Deploy & Test"
              desc="Live deployment with 100 conversations monitored personally by our team."
            />
            <Step
              number="4"
              title="Scale & Optimize"
              desc="Continuous improvement based on conversation data and performance metrics."
            />
          </div>
        </div>

        {/* What You Get */}
        <div className="mt-24 mb-24 rounded-xl border border-cyan-200/50 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 backdrop-blur-sm p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What You Get</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Custom-trained AI voice agents for your specific use case",
              "Full CRM and sales infrastructure integration",
              "24/7 conversation handling across voice, SMS, and chat",
              "Real-time dashboards with conversation metrics and conversions",
              "Ongoing optimization and management",
              "Human escalation protocols for complex conversations",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-3">Ready to deploy voice infrastructure?</h4>
          <p className="text-gray-700 mb-8">Let's talk about how MHM can handle your customer conversations.</p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-base font-semibold"
          >
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Schedule Your Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
