"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Bot, Cpu, Zap, Clock, Code, Globe } from "lucide-react"
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Service Delivery Excellence</h4>
                  <p className="text-gray-400">
                    Led by our specialist Gideon, our service delivery team ensures smooth implementation and ongoing
                    support for all AI agent deployments.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
