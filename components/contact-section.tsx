"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      const form = e.target as HTMLFormElement
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interested in working with WOS or MHM? Contact us to discuss how we can help your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 h-full">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-gray-400">ahmezz.mhm@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Phone</h4>
                        <p className="text-gray-400">+91 9380974278</p>
                        <p className="text-gray-400">+91 9686509191</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-white">Agencies</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                      <p className="text-gray-400">WOS (WebOps Studio)</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      <p className="text-gray-400">MHM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <Button
                    onClick={() =>
                      window.open("https://calendly.com/ahmezz-mhm/30min", "_blank", "noopener,noreferrer")
                    }
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Book a Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
