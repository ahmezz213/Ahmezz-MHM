"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toast } = useToast()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactClick = () => {
    scrollToSection("contact")
    toast({
      title: "Let's collaborate!",
      description: "Reach out to us to learn more about our agency hub.",
    })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient">
                Ahmezz | AMZ
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.05, color: "#8B5CF6" }}
              onClick={() => scrollToSection("why-choose")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Why Choose Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#8B5CF6" }}
              onClick={() => scrollToSection("subsidiaries")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Our Agencies
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#8B5CF6" }}
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Team
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                onClick={handleContactClick}
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Contact Us
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("why-choose")}
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("subsidiaries")}
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Our Agencies
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Team
            </button>
            <Button
              onClick={handleContactClick}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
