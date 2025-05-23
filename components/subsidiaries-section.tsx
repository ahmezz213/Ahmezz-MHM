"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function SubsidiariesSection() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="subsidiaries" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Our Specialized Agencies
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the unique capabilities of each agency in our collaborative hub.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg p-8 border border-gray-800 h-full flex flex-col">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 rounded-full p-2 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-500">MHM</h3>
              <p className="text-gray-400 mb-6 flex-grow">
                Next-generation agency engineered to design, develop, and deploy fully autonomous AI agents for coaches,
                consultants, and digital enterprises.
              </p>
              <ul className="text-gray-500 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Autonomous AI infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  24/7 digital employees
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Multi-channel integration
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection("mhm")}
                variant="outline"
                className="group w-full border-gray-700 hover:bg-gray-800 hover:border-blue-500 mt-auto"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg p-8 border border-gray-800 h-full flex flex-col">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-purple-600 rounded-full p-2 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-500">Criticom</h3>
              <p className="text-gray-400 mb-6 flex-grow">
                Specializing in AI-based surveys and data collection solutions for healthcare, real estate, and P2P
                businesses.
              </p>
              <ul className="text-gray-500 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Intelligent survey systems
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Data-driven insights
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Industry-specific solutions
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection("criticom")}
                variant="outline"
                className="group w-full border-gray-700 hover:bg-gray-800 hover:border-purple-500 mt-auto"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg p-8 border border-gray-800 h-full flex flex-col">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-green-600 rounded-full p-2 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-500">Yapron Visuals</h3>
              <p className="text-gray-400 mb-6 flex-grow">
                Creative marketing agency specializing in visual content creation and editing according to the vision of
                frame.
              </p>
              <ul className="text-gray-500 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Professional video production
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Visual branding expertise
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Strategic marketing content
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection("yapron")}
                variant="outline"
                className="group w-full border-gray-700 hover:bg-gray-800 hover:border-green-500 mt-auto"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-black rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-black rounded-lg p-8 border border-gray-600 h-full flex flex-col">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gray-800 rounded-full p-2 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">WOS | Web Ops Studio</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                AI-powered WebSites/WebApps and operations platform for Agency Owners and Founders, designed to reduce
                stress and operational inefficiencies.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Automated client workflows
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Intelligent lead management
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Marketing automation
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection("wos")}
                variant="outline"
                className="group w-full border-gray-600 hover:bg-gray-800 hover:border-white mt-auto text-white"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
