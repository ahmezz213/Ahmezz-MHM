"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function AhmezzSpotlight() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  return (
    <>
      {/* Desktop - Fixed Pill */}
      <div className="hidden md:block fixed right-6 bottom-6 z-50">
        {isExpanded ? (
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 w-80 shadow-2xl text-white animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Ahmezz</h3>
              <button onClick={() => setIsExpanded(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-white/90 mb-4">
              The parent agency behind WOS and MHM. We build efficient workflows that transform how agencies operate.
            </p>
            <button
              onClick={() => window.open("https://ahmezz.com", "_blank")}
              className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-white/90 transition-colors"
            >
              Learn More
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Ahmezz ✨
          </button>
        )}
      </div>

      {/* Mobile - Bottom Banner */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 z-50 flex justify-between items-center gap-2">
        <div>
          <p className="text-xs font-semibold">Ahmezz</p>
          <p className="text-xs opacity-90">Parent agency behind WOS & MHM</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => window.open("https://ahmezz.com", "_blank")}
            className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Learn More
          </button>
          <button onClick={() => setIsDismissed(true)} className="text-white/80 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>
    </>
  )
}
