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
      role: "Founder of AHMEZZ & Co-founder of MHM",
      bio: "Visionary leader who established the AHMEZZ agency hub and co-founded MHM, bringing agencies together to create comprehensive solutions.",
      color: "from-purple-600 to-blue-600",
    },
    {
      name: "Hamza",
      role: "Management of Outreach and Management of Company",
      bio: "Expert in outreach strategies and company management, ensuring smooth operations and client relationships across all AHMEZZ agencies.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Ayaan",
      role: "Co-founder of Criticom",
      bio: "Data analytics expert who co-founded Criticom, specializing in AI-based survey solutions and data-driven insights for various industries.",
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Gideon",
      role: "Service Delivery Specialist at MHM",
      bio: "Technical specialist focused on ensuring seamless implementation and ongoing support for MHM's AI agent deployments.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Zaid Yapat",
      role: "Co-founder of Yapron Visuals",
      bio: "Creative director with a passion for visual storytelling and marketing content that captures the essence of brands.",
      color: "from-green-600 to-teal-600",
    },
    {
      name: "Fatah Barron",
      role: "Co-founder of Yapron Visuals",
      bio: "Visual design expert specializing in creating compelling marketing content that aligns with the vision of frame.",
      color: "from-teal-600 to-green-600",
    },
  ]

  return (
    <section id="team" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
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
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-center text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-center text-gray-400 mb-4">{member.role}</p>

                  <p className="text-gray-400 text-center text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
