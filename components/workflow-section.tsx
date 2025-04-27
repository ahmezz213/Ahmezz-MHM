import { CheckCircle2 } from "lucide-react"

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures we deliver AI workflow solutions that truly transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="space-y-12">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  1
                </div>
                <div className="absolute left-4 top-8 h-full w-px bg-border" />
                <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
                <p className="text-muted-foreground">
                  We begin by deeply understanding your business processes, pain points, and objectives. Our team
                  analyzes your current workflows to identify opportunities for AI-powered optimization.
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  2
                </div>
                <div className="absolute left-4 top-8 h-full w-px bg-border" />
                <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
                <p className="text-muted-foreground">
                  Based on our findings, we design a custom AI workflow solution tailored to your specific needs. We
                  create detailed blueprints that outline how the new system will function and integrate with your
                  existing tools.
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  3
                </div>
                <div className="absolute left-4 top-8 h-full w-px bg-border" />
                <h3 className="text-xl font-semibold mb-2">Creative Development</h3>
                <p className="text-muted-foreground">
                  This is where our enthusiasm truly shines! We create everything from scratch with passion and energy.
                  Our team of enthusiastic developers builds custom solutions that perfectly match your vision, infusing
                  creativity and innovation into every line of code.
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation & Support</h3>
                <p className="text-muted-foreground">
                  We carefully deploy the solution, provide comprehensive training, and offer ongoing support to ensure
                  your team can maximize the benefits of your new AI-powered workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/40 to-blue-950/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">The ahmezz mhm Difference</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Human-Centered Design</h4>
                  <p className="text-muted-foreground">
                    We design AI systems that augment human capabilities rather than replace them, ensuring technology
                    serves your team's needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Built From Scratch</h4>
                  <p className="text-muted-foreground">
                    We don't use templates or pre-built solutions. Every workflow we create is custom-built from the
                    ground up to perfectly match your unique business requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Enthusiastic Approach</h4>
                  <p className="text-muted-foreground">
                    Our team brings energy and passion to every project. We're genuinely excited about the possibilities
                    of AI and that enthusiasm translates into better results for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Transparent Metrics</h4>
                  <p className="text-muted-foreground">
                    We provide clear visibility into the performance and impact of your AI workflows, so you can measure
                    ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
