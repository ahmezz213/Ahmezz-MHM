"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plus, AlertCircle } from "lucide-react"

export default function ComingSoonSection() {
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
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Expanding Our TAGG Network
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
            New specialized agencies will be joining the Ahmezz TAGG hub soon.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 shadow-xl"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <Plus className="h-10 w-10 text-white" />
              </div>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">New Agencies Coming Soon</h3>
              <p className="text-gray-400 mb-6">
                We're in discussions with several specialized agencies that will be joining our collaborative hub in the
                near future. Each new agency will bring unique expertise and capabilities to enhance our service
                offerings.
              </p>

              <div className="flex justify-center mb-8">
                <div className="flex items-center px-4 py-2 bg-blue-900/20 rounded-full">
                  <AlertCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm text-blue-400">Stay tuned for announcements</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="h-10 w-10 rounded-full bg-gray-700 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-gray-400 text-lg font-bold">?</span>
                  </div>
                  <p className="text-gray-500">Digital Marketing</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="h-10 w-10 rounded-full bg-gray-700 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-gray-400 text-lg font-bold">?</span>
                  </div>
                  <p className="text-gray-500">Web Development</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="h-10 w-10 rounded-full bg-gray-700 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-gray-400 text-lg font-bold">?</span>
                  </div>
                  <p className="text-gray-500">E-commerce Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
