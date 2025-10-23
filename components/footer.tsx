"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="inline-block mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  AHM / ahmezz
                </span>
              </motion.div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building efficient AI-powered workflows and automation for modern teams.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                onClick={() => window.open("https://www.instagram.com/ahmezz.in?igsh=ZnNzajRldGc5NmI3", "_blank")}
                aria-label="AHM Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                onClick={() => window.open("https://x.com/Toufiq674578?t=0R3aC2E3Bi8JidciwI9nQg&s=09", "_blank")}
                aria-label="AHM Twitter/X"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter/X</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Agencies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#wos" className="text-gray-400 hover:text-white transition-colors">
                  WOS (WebOps Studio)
                </Link>
              </li>
              <li>
                <Link href="#mhm" className="text-gray-400 hover:text-white transition-colors">
                  MHM
                </Link>
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
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AHM / ahmezz. All rights reserved.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 bg-transparent"
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
