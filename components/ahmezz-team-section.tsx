import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Cpu, Server } from "lucide-react"

type Member = {
  name: string
  role: string
  blurb: string
  avatar?: string
  initials: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const TEAM: Member[] = [
  {
    name: "Taufiq Ahmed",
    role: "Owner • WOS (WebOps Studio)",
    blurb: "Founder-led execution. Workflow-first systems with a clear path to ROI.",
    avatar: "/portrait-taufiq-ahmed.jpg",
    initials: "TA",
    icon: Crown,
  },
  {
    name: "Ayaan",
    role: "Backend Manager • AHMEZZ",
    blurb: "Resilient backends and clean integrations. Stable, scalable, and fast.",
    avatar: "/portrait-ayaan-backend-engineer.jpg",
    initials: "AY",
    icon: Server,
  },
  {
    name: "Hamza",
    role: "Founder • MHM",
    blurb: "Agentic automation and AI infrastructure that operates 24/7.",
    avatar: "/portrait-hamza-ai-founder.jpg",
    initials: "H",
    icon: Cpu,
  },
]

export default function AhmezzTeamSection() {
  return (
    <section id="ahmezz-team" className="relative bg-white py-16 md:py-24" aria-labelledby="ahmezz-team-title">
      {/* soft halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-purple-100/60 to-transparent blur-2xl"
      />
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 id="ahmezz-team-title" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            AHMEZZ Team
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            A focused group building efficient AI workflows and systems. Subtle craft, measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <Card
              key={m.name}
              className="border border-purple-200/50 bg-white/80 backdrop-blur-sm transition-shadow hover:shadow-sm"
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-14 w-14 ring-1 ring-purple-200">
                      <AvatarImage className="opacity-0 shadow-none" src={m.avatar || "/placeholder.svg"} alt={`${m.name} avatar`} />
                      <AvatarFallback className="bg-purple-50 text-purple-700">{m.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-base font-semibold text-slate-900">{m.name}</h3>
                      <m.icon className="h-4 w-4 text-purple-600" aria-hidden="true" />
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-purple-700/80">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{m.blurb}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* subtle brand note */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
            AHM / ahmezz
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            Team
          </span>
        </div>
      </div>
    </section>
  )
}
