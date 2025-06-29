"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Bot, Cpu, Zap, Clock, Code, Globe, Building, Home, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function MhmSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const openCalendly = () => {
    window.open("https://calendly.com/ahmezz-amz/30min", "_blank")
  }

  const openMhmWebsite = () => {
    window.open("https://v0-mhm-website.vercel.app", "_blank")
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="mhm" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-black">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-blue-900/30 border border-blue-500/30 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                    <Cpu className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white">MHM</h3>
                </div>

                <p className="text-gray-200 mb-6 text-lg">
                  <span className="font-bold text-blue-400">Where Intelligent Agents Are Built.</span>
                </p>

                <p className="text-gray-300 mb-8">
                  Next-generation agency engineered to design, develop, and deploy fully autonomous AI agents that serve
                  as intelligent operational arms for coaches, consultants, and digital enterprises.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                    AI Agents
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                    LLM Integration
                  </span>
                  <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                    Voice Interfaces
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={openCalendly}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-6 py-3 rounded-xl font-semibold"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Get Started
                  </Button>

                  <Button
                    variant="outline"
                    className="border-2 border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 text-lg px-6 py-3 rounded-xl font-semibold bg-transparent"
                    onClick={openMhmWebsite}
                  >
                    Visit MHM Website
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rest of the MHM section content remains the same but with enhanced styling */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8 text-white">Key Capabilities</h2>

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

        {/* AI Agent Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-white text-center">
            AI Agent Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Natural Conversation</h3>
              <p className="text-gray-400">
                Our AI agents engage in natural, human-like conversations that build rapport and trust with your
                customers. They understand context, remember previous interactions, and respond appropriately.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Multi-Channel Presence</h3>
              <p className="text-gray-400">
                Deploy your AI agents across multiple channels including your website, WhatsApp, Telegram, and more.
                Provide consistent service wherever your customers prefer to engage.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-indigo-900/30 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Custom Knowledge Base</h3>
              <p className="text-gray-400">
                Each AI agent is trained on your specific business information, services, and FAQs, ensuring they
                provide accurate and relevant information to your customers.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Automated Task Execution</h3>
              <p className="text-gray-400">
                Our agents don't just talk—they act. They can schedule appointments, update CRMs, send follow-up emails,
                and perform other tasks that typically require human intervention.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Continuous Learning</h3>
              <p className="text-gray-400">
                Our AI agents improve over time by learning from interactions. They adapt to your business needs and
                customer preferences, becoming more effective with each conversation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
              <div className="h-12 w-12 rounded-full bg-indigo-900/30 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Seamless Handoff</h3>
              <p className="text-gray-400">
                When a situation requires human intervention, our agents smoothly transfer the conversation to your
                team, providing full context and conversation history.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Agentic Era Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-white">
              Building for the Agentic Era
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-200 text-lg mb-6">
              Built on agentic architecture, our systems integrate LLMs with real-time task execution, creating digital
              employees that operate 24/7 across voice, text, and web interfaces.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-300">
              We don't just build chatbots - we create intelligent operational arms that think, decide, and act
              autonomously to serve your business needs around the clock.
            </motion.p>
          </div>
        </motion.div>

        {/* Call to Action with Calendly */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center backdrop-blur-sm">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-white">
              Ready to Deploy Your AI Workforce?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Transform your business operations with autonomous AI agents that work 24/7 to engage customers and
              streamline workflows.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={openCalendly}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-xl font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button
                variant="outline"
                onClick={openMhmWebsite}
                className="border-2 border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 text-lg px-8 py-6 rounded-xl font-semibold bg-transparent"
              >
                Explore MHM Platform
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Updated Leadership Section */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-white text-center">
            Leadership
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900/80 to-blue-900/30 rounded-2xl border border-blue-500/30 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">H</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Hamza</h3>
                  <p className="text-blue-400 mb-3">Co-Founder of Ahmezz & Owner of MHM</p>
                  <p className="text-gray-300">
                    As Co-Founder of Ahmezz and Owner of MHM, Hamza leads the development of autonomous AI agents and
                    automation systems. His expertise in AI agent development has established MHM as a leader in the
                    agentic technology space, focusing on creating digital employees that transform business operations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900/80 to-blue-900/30 rounded-2xl border border-blue-500/30 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Gideon</h3>
                  <p className="text-blue-400 mb-3">Service Delivery Specialist at MHM & WOS</p>
                  <p className="text-gray-300">
                    Gideon oversees implementation and ongoing support across both MHM and WOS. At MHM, he ensures
                    seamless AI agent deployments, while at WOS, he manages agency workflow implementations. His
                    cross-platform expertise ensures clients receive consistent, high-quality service delivery across
                    both platforms.
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
