import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ahmezz TAGG</h2>
            <p className="text-xl text-gray-400 mb-8">
              Ahmezz TAGG is a collaborative hub where specialized agencies come together to offer comprehensive
              solutions for businesses of all sizes.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Collaborative Approach</h4>
                  <p className="text-gray-400">
                    We bring together specialized agencies with complementary skills to deliver comprehensive solutions
                    that address all aspects of your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Specialized Expertise</h4>
                  <p className="text-gray-400">
                    Each agency in our hub brings deep expertise in their respective fields, ensuring you get the
                    highest quality service in every area.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Innovative Solutions</h4>
                  <p className="text-gray-400">
                    By combining the latest technologies and creative approaches, we develop innovative solutions that
                    help your business stand out and succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20 rounded-lg blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Our Mission
              </h3>

              <p className="text-gray-400 mb-6">
                To create a collaborative ecosystem where specialized agencies can thrive together, combining their
                unique strengths to deliver exceptional results for clients.
              </p>

              <p className="text-gray-400 mb-6">
                We believe that by bringing together experts from different fields, we can offer more comprehensive,
                innovative, and effective solutions than any single agency could provide alone.
              </p>

              <p className="text-gray-400">
                Our goal is to be the go-to hub for businesses seeking integrated solutions across AI, marketing, and
                digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
