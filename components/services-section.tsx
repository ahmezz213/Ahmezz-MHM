"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Mail, Database, ArrowRight, Share2 } from "lucide-react"

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of AI workflow solutions to address your business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>AI Chatbot Integration</CardTitle>
              <CardDescription>
                Intelligent conversational interfaces for customer support and internal processes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Custom-trained on your business data
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Seamless handoff to human agents
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Multi-channel deployment
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Continuous improvement system
                </li>
              </ul>
              <Button variant="outline" className="w-full group" onClick={scrollToContact}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Email Automation</CardTitle>
              <CardDescription>Intelligent email processing, categorization, and response systems</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Smart email categorization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Automated response generation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Priority detection and routing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Follow-up scheduling and tracking
                </li>
              </ul>
              <Button variant="outline" className="w-full group" onClick={scrollToContact}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Knowledge Management</CardTitle>
              <CardDescription>Build intelligent knowledge bases that learn and improve over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  AI-powered knowledge extraction
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Semantic search capabilities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Automated content organization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Continuous learning and improvement
                </li>
              </ul>
              <Button variant="outline" className="w-full group" onClick={scrollToContact}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Outreach Enhancement</CardTitle>
              <CardDescription>Streamline your outreach and communication workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  GHL & ZAPIER integration
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  VOICEFLOW & MANYCHAT setup
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  vapi.ai voice solutions
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  retell.ai implementation
                </li>
              </ul>
              <Button variant="outline" className="w-full group" onClick={scrollToContact}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
