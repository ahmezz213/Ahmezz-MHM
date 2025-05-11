"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Bot, Cpu, Zap, Clock, Code, Globe, Building, Home } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function MhmSection() {
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
    <section id="mhm" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl opacity-70"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                    <Cpu className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">MHM</h3>
                </div>

                <p className="text-gray-300 mb-6 text-lg">
                  Next-generation agency engineered to{" "}
                  <span className="font-bold text-blue-400">
                    design, develop, and deploy fully autonomous AI agents
                  </span>{" "}
                  that serve as intelligent operational arms for coaches, consultants, and digital enterprises.
                </p>

                <p className="text-gray-400 mb-8">
                  Built on agentic architecture, our systems integrate LLMs with real-time task execution, creating
                  digital employees that operate 24/7 across voice, text, and web interfaces.
                </p>

                <p className="text-gray-300 mb-6 text-lg font-semibold">
                  We are not another chatbot company—we are building{" "}
                  <span className="font-bold text-blue-400">autonomous infrastructure for the agentic era</span>.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">AI Agents</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">
                    LLM Integration
                  </span>
                  <span className="px-3 py-1 bg-indigo-900/30 text-indigo-400 rounded-full text-sm">
                    Voice Interfaces
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">Automation</span>
                </div>

                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Contact MHM
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Key Capabilities</h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Bot className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Autonomous AI Agents</h4>
                  <p className="text-gray-400">
                    Fully autonomous AI agents that can handle complex tasks and workflows without human intervention.
                    Our agents can manage customer inquiries, schedule appointments, and execute business processes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Agentic Architecture</h4>
                  <p className="text-gray-400">
                    Advanced architecture that enables AI agents to make decisions, execute tasks, and learn from
                    interactions. Our systems continuously improve through real-world usage.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">24/7 Operation</h4>
                  <p className="text-gray-400">
                    Digital employees that work around the clock across voice, text, and web interfaces, ensuring your
                    business is always available to customers and prospects.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Code className="h-5 w-5 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Custom Integration</h4>
                  <p className="text-gray-400">
                    Seamless integration with your existing tools and platforms, including CRMs, scheduling systems, and
                    communication channels for a unified workflow.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Industry Solutions Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-white text-center">
            Industry Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Aesthetic & Medical Clinics</h3>
              <p className="text-gray-400 mb-4">
                Specialized AI agents for aesthetic and medical clinics that handle appointment scheduling, patient
                inquiries, and follow-ups. Our solutions help clinics improve patient engagement and streamline
                administrative tasks.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Automated appointment scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Patient inquiry management
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Treatment information and FAQs
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Real Estate Agents</h3>
              <p className="text-gray-400 mb-4">
                AI solutions for real estate professionals that qualify leads, answer property questions, and schedule
                viewings. Our agents help real estate professionals focus on closing deals rather than administrative
                tasks.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Lead qualification and nurturing
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Property information delivery
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Viewing scheduling automation
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-indigo-900/30 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Remodeling & Construction</h3>
              <p className="text-gray-400 mb-4">
                Digital solutions for remodeling and construction businesses that handle client inquiries, project
                updates, and scheduling. Our AI agents help streamline communication and project management.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Project inquiry handling
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Client communication automation
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Scheduling and project updates
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-white text-center">
            Leadership
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Taufiq Ahmed</h3>
                  <p className="text-blue-400 mb-3">Co-founder</p>
                  <p className="text-gray-400">
                    As co-founder of MHM, Taufiq focuses on sales and company representation. His primary
                    responsibilities include client acquisition, relationship management, and representing the company
                    in business contexts. He works closely with the service delivery team to ensure client needs are
                    understood and communicated effectively.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">H</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Hamza</h3>
                  <p className="text-blue-400 mb-3">Co-founder</p>
                  <p className="text-gray-400">
                    Hamza co-founded MHM and oversees company management and outreach strategies. With a focus on
                    operational efficiency and business development, he ensures that MHM maintains strong client
                    relationships while expanding its market presence.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Gideon</h3>
                  <p className="text-blue-400 mb-3">Service Delivery Specialist</p>
                  <p className="text-gray-400">
                    Gideon oversees the implementation and ongoing support of MHM's AI agent deployments. His methodical
                    approach ensures clients receive solutions that align with their operational needs and business
                    objectives.
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
