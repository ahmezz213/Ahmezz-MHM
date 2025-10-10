"use client"

import { useEffect, useState } from "react"
import { Sparkles, X, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AhmezzSpotlight() {
  const [dismissed, setDismissed] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const isDismissed = typeof window !== "undefined" && localStorage.getItem("ahmezzSpotlightDismissed") === "1"
    setDismissed(isDismissed)
  }, [])

  const dismiss = () => {
    setDismissed(true)
    if (typeof window !== "undefined") localStorage.setItem("ahmezzSpotlightDismissed", "1")
  }

  if (dismissed) return null

  return (
    <>
      {/* Desktop: right-side compact pill + expandable card */}
      <div className="fixed right-4 top-1/3 z-40 hidden lg:flex items-center">
        {/* Pill trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="group flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm hover:bg-white"
          aria-expanded={open}
          aria-controls="ahmezz-spotlight-card"
        >
          <Sparkles className="h-4 w-4 text-purple-600" />
          <span>Ahmezz • Pre‑Launch</span>
        </button>

        {/* Slide-out card */}
        {open && (
          <div
            id="ahmezz-spotlight-card"
            className="ml-3 w-[300px] overflow-hidden rounded-xl border border-purple-200 bg-white/95 shadow-lg backdrop-blur-sm"
            role="dialog"
            aria-label="Ahmezz spotlight"
          >
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader className="py-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-bold text-slate-900">Ahmezz (Pre‑Launch AI Space)</CardTitle>
                  <button
                    onClick={dismiss}
                    className="rounded-md p-1 text-slate-400 hover:bg-purple-50 hover:text-slate-700"
                    aria-label="Dismiss Ahmezz spotlight"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-600">
                  An upcoming consultancy and ecosystem building, implementing, and scaling AI‑driven strategies for
                  businesses, creators, and agencies.
                </p>

                <div className="mt-3 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-800">Current Phase</div>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    <li>• Vision: mapping products, workflows, services</li>
                    <li>• Development: WOS live; MHM in progress</li>
                    <li>• Positioning: authority and brand setup</li>
                  </ul>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-800">Planned Functions</div>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    <li>• AI Automation Solutions (like WOS)</li>
                    <li>• AI Strategy & Consultancy</li>
                    <li>• Knowledge & Content (training, thought leadership)</li>
                  </ul>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 hover:underline"
                  >
                    Talk to Ahmezz <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-[11px] text-slate-500 hover:text-slate-700"
                    aria-label="Close spotlight"
                  >
                    Close
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Mobile: tiny bottom banner */}
      <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full border border-purple-200 bg-white/95 px-3 py-2 text-[11px] text-slate-800 shadow-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="font-semibold">Ahmezz • Pre‑Launch</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-full bg-purple-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-purple-700"
            >
              Learn more
            </a>
            <button
              onClick={dismiss}
              className="rounded-md p-1 text-slate-400 hover:bg-purple-50 hover:text-slate-700"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
