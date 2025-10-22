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
    <footer className="bg-white text-gray-900 py-12 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="inline-block mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  AHM
                </span>
              </motion.div>
            </div>
            <p className="text-gray-700 mb-6 max-w-md">
              We solve problems with AI. Sales infrastructure, voice agents, and workflow automation for agencies and
              B2B companies.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-blue-600 border border-gray-300 hover:border-blue-300"
                onClick={() => window.open("https://www.instagram.com/ahmezz.in?igsh=ZnNzajRldGc5NmI3", "_blank")}
                aria-label="AHM Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-blue-600 border border-gray-300 hover:border-blue-300"
                onClick={() => window.open("https://x.com/Toufiq674578?t=0R3aC2E3Bi8JidciwI9nQg&s=09", "_blank")}
                aria-label="AHM Twitter/X"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter/X</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#wos" className="text-gray-700 hover:text-blue-600 transition-colors">
                  WOS
                </Link>
              </li>
              <li>
                <Link href="#mhm" className="text-gray-700 hover:text-blue-600 transition-colors">
                  MHM
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AHM / ahmezz. All rights reserved.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-300 bg-white"
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
