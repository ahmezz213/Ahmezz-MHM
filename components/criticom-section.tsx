"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, BarChart3, Building, Users, FileText, Database } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CriticomSection() {
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
    <section id="criticom" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-white">Industry Solutions</h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Building className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Healthcare Surveys</h4>
                  <p className="text-gray-400">
                    AI-powered survey solutions for clinics and healthcare providers to gather patient feedback and
                    improve services. Our specialized healthcare surveys comply with industry regulations while
                    maximizing response rates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-pink-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Real Estate Data Collection</h4>
                  <p className="text-gray-400">
                    Custom data collection tools for real estate agents to gather market insights and client
                    preferences. Our solutions help agents understand market trends and buyer needs to close more deals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">P2P Business Intelligence</h4>
                  <p className="text-gray-400">
                    Advanced analytics and survey tools for peer-to-peer businesses to optimize operations and customer
                    experience. Our P2P solutions help businesses build trust and improve transaction satisfaction.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Database className="h-5 w-5 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Data Analysis & Visualization</h4>
                  <p className="text-gray-400">
                    Transform raw survey data into actionable insights with our advanced analysis and visualization
                    tools. We help you understand what your data is telling you and how to respond.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-xl opacity-70"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Criticom</h3>
                </div>

                <p className="text-gray-300 mb-6 text-lg">
                  Specializing in{" "}
                  <span className="font-bold text-purple-400">AI-based surveys and data collection solutions</span> for
                  healthcare, real estate, and P2P businesses.
                </p>

                <p className="text-gray-400 mb-8">
                  Our intelligent survey systems help businesses gather actionable insights from customers and
                  stakeholders, enabling data-driven decision making and improved service delivery.
                </p>

                <p className="text-gray-300 mb-6 text-lg font-semibold">
                  Transform your data collection processes with AI-powered solutions that deliver deeper insights and
                  higher response rates.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">AI Surveys</span>
                  <span className="px-3 py-1 bg-pink-900/30 text-pink-400 rounded-full text-sm">Data Analytics</span>
                  <span className="px-3 py-1 bg-indigo-900/30 text-indigo-400 rounded-full text-sm">Healthcare</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">Real Estate</span>
                </div>

                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Contact Criticom
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-white text-center">
            Leadership
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Ayaan</h3>
                  <p className="text-purple-400 mb-3">Co-founder</p>
                  <p className="text-gray-400">
                    Ayaan brings extensive experience in data analytics and survey methodology to Criticom. With a
                    background in statistical analysis and customer insights, he has developed Criticom's core survey
                    technologies and analytics frameworks. His approach combines rigorous data science with practical
                    business applications to deliver actionable insights for clients.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
