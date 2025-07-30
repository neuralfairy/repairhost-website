import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Settings, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Transform Your CRM.
                <br />
                <span className="text-blue-200">Accelerate Your Sales Engine.</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                CRM, Calibrated: From Setup to Scale. We help organizations evolve from outdated tools into fully
                integrated, automated CRM ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Your CRM Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="enterprise-card p-8 rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="CRM Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature CTAs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  Industry-Specific Solutions
                </CardTitle>
                <CardDescription>Tailored CRM implementations for your industry's unique requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="cta-button-black">
                  <a href="https://salescentri.com/solutions/by-industry/it" target="_blank" rel="noopener noreferrer">
                    See CRM Use Cases by Industry
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  Interactive Demo Experience
                </CardTitle>
                <CardDescription>Explore our CRM capabilities with hands-on demonstrations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="cta-button-black">
                  <a
                    href="https://salescentri.com/solutions/use-case-navigator/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Interactive Demo Tool
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Repairhost Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a service provider – we're your CRM Transformation Partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="enterprise-card text-center">
              <CardHeader>
                <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Complete Implementation</CardTitle>
                <CardDescription>
                  From planning to deployment, we handle every aspect of your CRM transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="cta-button-black">
                  <a
                    href="https://salescentri.com/contact/partnerships/integration-requests"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Custom CRM Integration
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="enterprise-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Team Onboarding</CardTitle>
                <CardDescription>
                  Comprehensive training and support to ensure your team maximizes CRM adoption
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="cta-button-black">
                  <a
                    href="https://salescentri.com/platforms/lead-management/chat-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore CRM Bot Features
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="enterprise-card text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Ongoing Optimization</CardTitle>
                <CardDescription>Continuous improvement and scaling to grow with your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="cta-button-black">
                  <a
                    href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Move to Predictive Insights
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your CRM?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of companies who have accelerated their sales with our CRM solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a
                href="https://salescentri.com/get-started/free-trial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Start Your Free Trial Today
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                Sales Inquiry
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
