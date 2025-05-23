"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TeamSection() {
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

  const teamMembers = [
    {
      name: "Taufiq Ahmed",
      role: "Founder of Ahmezz & Founder of WOS",
      bio: "Visionary leader who established the Ahmezz agency hub and founded WOS to revolutionize agency operations. Taufiq brings together specialized agencies to create comprehensive solutions while developing innovative platforms for creative workflow automation.",
      color: "from-purple-600 to-blue-600",
      initial: "T",
    },
    {
      name: "Hamza",
      role: "Co-Founder of Ahmezz & Owner of MHM",
      bio: "Co-Founder of Ahmezz and Owner of MHM, specializing in AI agent development and autonomous systems. Hamza leads the technical innovation in AI workforce deployment, creating digital employees that transform business operations.",
      color: "from-blue-600 to-cyan-600",
      initial: "H",
    },
    {
      name: "Ayaan",
      role: "Co-founder of Criticom",
      bio: "Data analytics expert who co-founded Criticom, specializing in AI-based survey solutions and data-driven insights for various industries. Ayaan's expertise in statistical analysis drives Criticom's innovative approach to intelligent data collection.",
      color: "from-purple-600 to-pink-600",
      initial: "A",
    },
    {
      name: "Gideon",
      role: "Service Delivery Specialist at MHM & WOS",
      bio: "Cross-platform service delivery specialist ensuring seamless implementation and ongoing support across both MHM's AI agent deployments and WOS's agency workflow solutions. Gideon's expertise bridges the gap between technical innovation and practical business applications.",
      color: "from-blue-600 to-indigo-600",
      initial: "G",
    },
    {
      name: "Zaid Yapat",
      role: "Co-founder of Yapron Visuals",
      bio: "Creative director with a passion for visual storytelling and marketing content that captures the essence of brands. Zaid leads Yapron's creative vision and strategic content development.",
      color: "from-green-600 to-teal-600",
      initial: "Z",
    },
    {
      name: "Fatah Barron",
      role: "Co-founder of Yapron Visuals",
      bio: "Visual design expert specializing in creating compelling marketing content that aligns with the vision of frame. Fatah focuses on cohesive visual systems and brand identity development.",
      color: "from-teal-600 to-green-600",
      initial: "F",
    },
  ]

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Our Leadership Team
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the visionaries behind our collaborative agency hub.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700 overflow-hidden group hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center border-2 border-gray-600">
                    <span
                      className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${member.color}`}
                    >
                      {member.initial}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-center text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-center text-gray-400 mb-4 font-medium">{member.role}</p>

                  <p className="text-gray-400 text-center text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
