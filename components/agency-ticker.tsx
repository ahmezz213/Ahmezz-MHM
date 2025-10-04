"use client"

import { motion } from "framer-motion"

export default function AgencyTicker() {
  const items = ["MHM", "•", "WOS", "•"] as const

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="w-full bg-white border-b border-purple-200">
      <div className="mx-auto flex h-10 items-center justify-between px-4 md:px-6">
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap text-sm font-semibold"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ willChange: "transform" }}
          >
            {/* Duplicate sequence twice for a seamless marquee */}
            {[...Array(2)].map((_, seq) => (
              <div key={seq} className="flex items-center gap-6 pr-6">
                {items.map((label, i) => {
                  const isDot = label === "•"
                  return isDot ? (
                    <span key={`${seq}-${i}`} className="text-purple-400" aria-hidden="true">
                      {"•"}
                    </span>
                  ) : (
                    <button
                      key={`${seq}-${i}`}
                      onClick={() => scrollTo(label.toLowerCase())}
                      className="text-slate-800 hover:text-purple-700 transition-colors"
                      aria-label={`Go to ${label}`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="ml-3 hidden shrink-0 items-center gap-2 sm:flex">
          <span className="text-[11px] font-medium text-slate-500">AHM</span>
          <span className="text-[11px] text-slate-400">/</span>
          <span className="text-[11px] font-medium text-slate-500">ahmezz</span>
        </div>
      </div>
    </div>
  )
}
