"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Zap, Users, Target, Workflow, BarChart3, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function WosSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const openCalendly = () => {
    window.open("https://calendly.com/ahmezz-amz/30min", "_blank")
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
    <section id="wos" className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-600/30 to-white/10 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-gradient-to-br from-black to-gray-900 border-2 border-gray-600 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-gray-700 to-white flex items-center justify-center mr-4">
                    <Globe className="h-7 w-7 text-black" />
                  </div>
                  <h3 className="text-4xl font-bold text-white">WOS | Web Ops Studio</h3>
                </div>

                <p className="text-gray-200 mb-6 text-lg">
                  <span className="font-bold text-white">AI-powered WebSites/WebApps and operations platform</span> for
                  Agency Owners and Founders
                </p>

                <p className="text-gray-300 mb-8">
                  Tailored for creative and personal branding agencies, WOS is designed to reduce stress and operational
                  inefficiencies while enabling agencies to focus more on creative delivery.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium border border-white/30">
                    Agency Operations
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 text-gray-200 rounded-full text-sm font-medium border border-gray-600">
                    Workflow Automation
                  </span>
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium border border-white/30">
                    Lead Management
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={openCalendly}
                    className="bg-white text-black hover:bg-gray-200 text-lg px-6 py-3 rounded-xl font-semibold"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </Button>

                  <Button
                    variant="outline"
                    className="border-2 border-gray-600 hover:bg-gray-800 text-white text-lg px-6 py-3 rounded-xl font-semibold"
                    onClick={() => window.open("https://kzmkxay08ve8dgmtjeix.lite.vusercontent.net/#tech", "_blank")}
                  >
                    View Full Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Core Features</h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-start p-4 bg-gray-900 rounded-lg border border-gray-700"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <Workflow className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Automated Client Onboarding</h4>
                  <p className="text-gray-300">
                    Streamlined workflows that automate the entire client onboarding process, reducing manual work and
                    ensuring consistency across all new client engagements.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900 rounded-lg border border-gray-700"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Intelligent Lead Capture & Management</h4>
                  <p className="text-gray-300">
                    AI-powered lead capture system that intelligently qualifies prospects and manages them through your
                    sales funnel with automated follow-ups and nurturing sequences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900 rounded-lg border border-gray-700"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Marketing Automation Integration</h4>
                  <p className="text-gray-300">
                    Seamlessly integrated marketing automation that connects with your backend operations, ensuring
                    marketing efforts translate directly into operational efficiency.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900 rounded-lg border border-gray-700"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Streamlined Project Management</h4>
                  <p className="text-gray-300">
                    Comprehensive project and task management system designed specifically for creative agencies, with
                    built-in templates and workflows for common agency deliverables.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-white text-center">
            Why Choose WOS?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-700 p-6">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Time Savings</h3>
              <p className="text-gray-300">
                Saves significant time by automating repetitive tasks, allowing your team to focus on what they do best
                — creating exceptional work for clients.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-700 p-6">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Operational Efficiency</h3>
              <p className="text-gray-300">
                Improves operational efficiency and consistency across all agency processes, ensuring quality delivery
                every time.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-700 p-6">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Creative Focus</h3>
              <p className="text-gray-300">
                Enables agencies to focus more on creative delivery by handling the operational complexities behind the
                scenes.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-700 p-6">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Scalable Growth</h3>
              <p className="text-gray-300">
                Scales agency workflows smoothly without increasing overhead, supporting sustainable business growth.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Target Audience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-white text-center">
            Perfect For
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-700 p-6">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Creative Agencies</h3>
              <p className="text-gray-300 mb-4">
                Design studios, branding agencies, and creative consultancies looking to streamline their operations
                while maintaining creative excellence.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Brand design agencies
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Digital creative studios
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Marketing agencies
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-700 p-6">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Agency Founders</h3>
              <p className="text-gray-300 mb-4">
                Visionary leaders who want to focus on strategy and growth rather than getting bogged down in
                operational details.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Startup agency founders
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Scaling agency owners
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Creative entrepreneurs
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-700 p-6">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Personal Branding Agencies</h3>
              <p className="text-gray-300 mb-4">
                Specialized agencies focused on building personal brands for executives, entrepreneurs, and thought
                leaders.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Executive branding
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Thought leadership
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Influencer management
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action with Calendly */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-8 text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Agency Operations?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how WOS can streamline your workflows and help you focus on what you do best — creating
              exceptional work for your clients.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={openCalendly}
                className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-xl font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-600 hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-xl font-semibold"
                onClick={() => window.open("https://kzmkxay08ve8dgmtjeix.lite.vusercontent.net/#tech", "_blank")}
              >
                Explore Full Platform
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
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-gray-700 p-6"
            >
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-gray-700 to-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-black">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Taufiq Ahmed</h3>
                  <p className="text-gray-300 mb-3">Founder of Ahmezz & Founder of WOS</p>
                  <p className="text-gray-300">
                    As the Founder of Ahmezz and Founder of WOS, Taufiq established the agency collective vision and
                    created WOS to solve operational challenges faced by creative agencies. His leadership brings
                    together specialized agencies under one hub while developing innovative solutions for agency
                    operations and workflow automation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-gray-700 p-6"
            >
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-gray-700 to-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-black">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Gideon</h3>
                  <p className="text-gray-300 mb-3">Service Delivery Specialist at WOS & MHM</p>
                  <p className="text-gray-300">
                    Gideon specializes in service delivery across both WOS and MHM platforms. At WOS, he ensures smooth
                    implementation of agency workflow solutions and client onboarding processes. His dual expertise
                    allows him to provide comprehensive support for agencies utilizing both AI agents and operational
                    automation systems.
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
