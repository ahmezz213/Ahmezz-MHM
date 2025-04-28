"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, Globe, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function WhyChooseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 font-extrabold">
              AHM
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
            We bring together specialized expertise to deliver comprehensive solutions that drive results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-4 group-hover:bg-purple-900/40 transition-colors duration-300">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Integrated Expertise</h3>
                <p className="text-gray-400">
                  Access to multiple specialized agencies under one roof, providing seamless collaboration and
                  comprehensive solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-4 group-hover:bg-blue-900/40 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Cutting-Edge Technology</h3>
                <p className="text-gray-400">
                  We leverage the latest AI and digital technologies to create innovative solutions that keep you ahead
                  of the competition.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-green-900/20 flex items-center justify-center mb-4 group-hover:bg-green-900/40 transition-colors duration-300">
                  <Globe className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">End-to-End Solutions</h3>
                <p className="text-gray-400">
                  From strategy to implementation, we provide complete solutions that address all aspects of your
                  business needs.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-4 group-hover:bg-purple-900/40 transition-colors duration-300">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Expert Team</h3>
                <p className="text-gray-400">
                  Our collective of industry experts brings diverse perspectives and specialized knowledge to every
                  project.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
