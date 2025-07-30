import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Settings, Zap, BarChart3 } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">CRM Solutions That Scale</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modular walkthrough of CRM planning, setup, integrations, and team onboarding tailored to your business
            needs
          </p>
        </div>

        {/* Solutions Tabs */}
        <Tabs defaultValue="planning" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="planning" className="text-lg py-3">
              Planning
            </TabsTrigger>
            <TabsTrigger value="implementation" className="text-lg py-3">
              Implementation
            </TabsTrigger>
            <TabsTrigger value="optimization" className="text-lg py-3">
              Optimization
            </TabsTrigger>
          </TabsList>

          <TabsContent value="planning" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Strategic CRM Planning</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Requirements Analysis</h3>
                      <p className="text-gray-600">Deep dive into your current processes and future goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Technology Stack Assessment</h3>
                      <p className="text-gray-600">Evaluate existing tools and integration possibilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">ROI Projections</h3>
                      <p className="text-gray-600">Clear metrics and expected returns on investment</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="cta-button-black">
                    <a
                      href="https://salescentri.com/platforms/lead-management/lead-generation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start at Stage 1 – Centralize Now
                    </a>
                  </Button>
                </div>
              </div>
              <Card className="enterprise-card">
                <CardHeader>
                  <Settings className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Planning Workshop</CardTitle>
                  <CardDescription>Collaborative sessions to define your CRM strategy and roadmap</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stakeholder alignment sessions</li>
                    <li>• Process mapping workshops</li>
                    <li>• Technology selection guidance</li>
                    <li>• Implementation timeline planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Seamless Implementation</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">System Configuration</h3>
                      <p className="text-gray-600">Custom setup tailored to your business processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Data Migration</h3>
                      <p className="text-gray-600">Secure transfer of existing customer data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Integration Setup</h3>
                      <p className="text-gray-600">Connect with your existing tools and platforms</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="cta-button-black">
                    <a
                      href="https://salescentri.com/contact/partnerships/integration-requests"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Custom CRM Integration
                    </a>
                  </Button>
                </div>
              </div>
              <Card className="enterprise-card">
                <CardHeader>
                  <Zap className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Implementation Process</CardTitle>
                  <CardDescription>Structured approach to minimize disruption and maximize adoption</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Phased rollout strategy</li>
                    <li>• User acceptance testing</li>
                    <li>• Training program delivery</li>
                    <li>• Go-live support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Continuous Optimization</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Performance Monitoring</h3>
                      <p className="text-gray-600">Regular analysis of system usage and effectiveness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Process Refinement</h3>
                      <p className="text-gray-600">Ongoing improvements based on user feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Advanced Features</h3>
                      <p className="text-gray-600">Gradual introduction of automation and AI capabilities</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="cta-button-black">
                    <a
                      href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Move to Predictive Insights
                    </a>
                  </Button>
                </div>
              </div>
              <Card className="enterprise-card">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Optimization Services</CardTitle>
                  <CardDescription>Ongoing support to ensure your CRM evolves with your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monthly performance reviews</li>
                    <li>• Feature enhancement planning</li>
                    <li>• User adoption coaching</li>
                    <li>• ROI measurement and reporting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional CTAs */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="enterprise-card">
            <CardHeader>
              <CardTitle>Explore the PSA Suite</CardTitle>
              <CardDescription>Professional Services Automation integrated with your CRM</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="cta-button-black">
                <a href="https://salescentri.com/solutions/psa-suite" target="_blank" rel="noopener noreferrer">
                  Explore the PSA Suite
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="enterprise-card">
            <CardHeader>
              <CardTitle>See Integrations in Action</CardTitle>
              <CardDescription>Live demonstrations of CRM integrations with popular business tools</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="cta-button-black">
                <a
                  href="https://salescentri.com/solutions/psa-suite/integrations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See CRM Integrations in Action
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
