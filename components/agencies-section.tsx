import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Cpu, Video } from "lucide-react"

export default function AgenciesSection() {
  return (
    <section id="agencies" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Agencies</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each agency in our hub brings unique expertise and capabilities to deliver exceptional results for our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Criticom Agency */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden group hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600" />
            <CardContent className="p-6 pt-8">
              <div className="h-14 w-14 rounded-full bg-purple-900/20 flex items-center justify-center mb-6 group-hover:bg-purple-900/30 transition-colors duration-300">
                <BarChart3 className="h-7 w-7 text-purple-500" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">Criticom</h3>

              <p className="text-gray-400 mb-6">
                Specializing in AI-based surveys and data collection solutions for healthcare, real estate, and P2P
                businesses.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">AI-powered surveys for clinics and healthcare providers</p>
                </div>
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">Custom data collection for real estate agents</p>
                </div>
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">P2P business intelligence solutions</p>
                </div>
              </div>

              <Button variant="ghost" className="group w-full border border-gray-700 hover:bg-gray-800">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          {/* MHM Agency */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden group hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600" />
            <CardContent className="p-6 pt-8">
              <div className="h-14 w-14 rounded-full bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-blue-900/30 transition-colors duration-300">
                <Cpu className="h-7 w-7 text-blue-500" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">MHM</h3>

              <p className="text-gray-400 mb-6">
                Building advanced AI agents and integration solutions for businesses seeking digital transformation.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">AI agents for Kleenx Dental and other businesses</p>
                </div>
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">Telegram to WhatsApp integration solutions</p>
                </div>
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">Video, website, and app deployment services</p>
                </div>
              </div>

              <Button variant="ghost" className="group w-full border border-gray-700 hover:bg-gray-800">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Yapron Visuals Agency */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden group hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-green-600 to-teal-600" />
            <CardContent className="p-6 pt-8">
              <div className="h-14 w-14 rounded-full bg-green-900/20 flex items-center justify-center mb-6 group-hover:bg-green-900/30 transition-colors duration-300">
                <Video className="h-7 w-7 text-green-500" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">Yapron Visuals</h3>

              <p className="text-gray-400 mb-6">
                Creative marketing agency specializing in visual content creation and editing according to the vision of
                frame.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">Professional video editing and production</p>
                </div>
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">Marketing content creation and strategy</p>
                </div>
                <div className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2" />
                  <p className="text-sm text-gray-400">Visual branding and identity development</p>
                </div>
              </div>

              <Button variant="ghost" className="group w-full border border-gray-700 hover:bg-gray-800">
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
