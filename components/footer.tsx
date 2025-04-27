"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp, ExternalLink, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Ahmezz
                </span>
                <span className="text-2xl font-extrabold ml-1 text-white">TAGG</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-2">
              <span className="text-white font-medium">T</span>echnology{" "}
              <span className="text-white font-medium">A</span>dvancement &{" "}
              <span className="text-white font-medium">G</span>rowth <span className="text-white font-medium">G</span>
              roup
            </p>
            <p className="text-gray-400 mb-6 max-w-md">
              A collaborative hub for specialized agencies in AI, marketing, and digital solutions, working together to
              deliver exceptional results.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                onClick={() => window.open("https://www.instagram.com/ahmezz.in?igsh=ZnNzajRldGc5NmI3", "_blank")}
                aria-label="Ahmezz TAGG Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                onClick={() => window.open("https://x.com/Toufiq674578?t=0R3aC2E3Bi8JidciwI9nQg&s=09", "_blank")}
                aria-label="Ahmezz TAGG Twitter/X"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter/X</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Agencies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#mhm" className="text-gray-400 hover:text-white transition-colors">
                  MHM
                </Link>
              </li>
              <li>
                <Link href="#criticom" className="text-gray-400 hover:text-white transition-colors">
                  Criticom
                </Link>
              </li>
              <li>
                <Link href="#yapron" className="text-gray-400 hover:text-white transition-colors">
                  Yapron Visuals
                </Link>
              </li>
              <li>
                <Link
                  href="https://yapronvisuals.framer.media"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yapron Website
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-purple-400 text-sm font-medium">More agencies coming soon...</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Team</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/amdtaufiq.w?igsh=MXhhOTRnam13d3UxeA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Taufiq Ahmed
                  <Instagram className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/khvn.hamza?igsh=MW9senJndDRoajF0ZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Hamza
                  <Instagram className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ahmezz TAGG. All rights reserved.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-gray-600"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
