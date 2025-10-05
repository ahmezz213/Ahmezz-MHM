"use client"

import { Card, CardContent } from "@/components/ui/card"

type Member = {
  name: string
  role: string
  initials: string
  note?: string
}

const members: Member[] = [
  { name: "Taufiq Ahmed", role: "Owner • WOS", initials: "TA", note: "Lead ops architect" },
  { name: "Ayaan", role: "Backend Manager • AHMEZZ", initials: "AY", note: "Systems, integrations" },
  { name: "Hamza", role: "Founder • MHM", initials: "H", note: "Product & AI agents" },
]

export default function AhmezzTeamSection() {
  return (
    <section id="team" className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-semibold text-slate-900">AHMEZZ Team</h3>
          <p className="mt-2 text-sm text-slate-600">Small, senior, and hands‑on. We build from scratch.</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
          {members.map((m) => (
            <Card key={m.name} className="border-slate-200 bg-white">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700">
                  {m.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{m.name}</div>
                  <div className="text-xs text-slate-600">{m.role}</div>
                  {m.note ? <div className="mt-1 text-xs text-slate-500">{m.note}</div> : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
