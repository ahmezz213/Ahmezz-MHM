"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Video, Palette, Monitor, Camera, Film, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function YapronSection() {
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
    <section id="yapron" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-lg blur-xl opacity-70"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-green-900/30 flex items-center justify-center mr-4">
                    <Video className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Yapron Visuals</h3>
                </div>

                <p className="text-gray-300 mb-6 text-lg">
                  Creative marketing agency specializing in{" "}
                  <span className="font-bold text-green-400">visual content creation and editing</span> according to the
                  vision of frame.
                </p>

                <p className="text-gray-400 mb-8">
                  Our team of visual experts creates compelling marketing content that captures your brand's essence and
                  resonates with your target audience. We transform ideas into visual stories that drive engagement.
                </p>

                <p className="text-gray-300 mb-6 text-lg font-semibold">
                  Led by co-founders Zaid Yapat and Fatah Barron, Yapron Visuals brings creative vision to life through
                  stunning visual storytelling.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                    Video Production
                  </span>
                  <span className="px-3 py-1 bg-teal-900/30 text-teal-400 rounded-full text-sm">Visual Branding</span>
                  <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">
                    Content Creation
                  </span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Marketing</span>
                </div>

                <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-green-500 mr-2" />
                    <h4 className="text-white font-medium">Award-Winning Creativity</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Our creative team has been recognized for innovative visual storytelling and brand-building content
                    that drives results.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    Contact Yapron
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-gray-700 hover:bg-gray-800"
                    onClick={() => window.open("https://yapronvisuals.framer.media", "_blank")}
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Creative Services</h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Video className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Video Production & Editing</h4>
                  <p className="text-gray-400">
                    Professional video creation and editing services that bring your brand's story to life with
                    cinematic quality. From concept to final cut, we handle every aspect of video production.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-teal-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Palette className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Visual Branding</h4>
                  <p className="text-gray-400">
                    Comprehensive visual identity development that establishes a cohesive and memorable brand presence.
                    We create distinctive visual languages that set your brand apart.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Monitor className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Marketing Content Creation</h4>
                  <p className="text-gray-400">
                    Strategic development of visual marketing materials designed to engage your audience and drive
                    conversions. Our content is crafted to achieve specific marketing objectives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-emerald-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Camera className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Photography & Image Editing</h4>
                  <p className="text-gray-400">
                    Professional photography and image editing services that capture your products, services, and brand
                    personality in the best light. High-quality visuals that elevate your marketing.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-teal-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Film className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Social Media Content</h4>
                  <p className="text-gray-400">
                    Platform-specific visual content optimized for social media engagement and sharing. We create
                    content that stops the scroll and drives meaningful interactions.
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
