"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const scrollToSubsidiaries = () => {
    const element = document.getElementById("subsidiaries")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20 -z-10" />

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* Additional animated elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/2 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10 -z-5" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Animated logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-xl"></div>
              <span className="relative text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient">
                AHM
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              AI-Powered Agency Collective
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
            Uniting specialized AI workflow agencies to deliver transformative digital solutions for businesses seeking
            innovation and growth.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button
                size="lg"
                onClick={scrollToSubsidiaries}
                className="relative group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Explore Our Agencies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-gray-700 hover:bg-gray-900"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
