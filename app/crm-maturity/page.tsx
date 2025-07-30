import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, BarChart3, Zap, Brain } from "lucide-react"

export default function CRMMaturityPage() {
  const maturityStages = [
    {
      stage: 1,
      title: "Manual",
      description: "Spreadsheets, emails, and disconnected tools",
      icon: FileText,
      color: "text-red-600",
      bgColor: "bg-red-50",
      features: [
        "Customer data in spreadsheets",
        "Manual follow-up processes",
        "No centralized reporting",
        "Limited team collaboration",
      ],
      cta: {
        text: "Start at Stage 1 – Centralize Now",
        url: "https://salescentri.com/platforms/lead-management/lead-generation",
      },
    },
    {
      stage: 2,
      title: "Centralized",
      description: "Basic CRM with centralized customer data",
      icon: BarChart3,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      features: [
        "Centralized customer database",
        "Basic reporting capabilities",
        "Team access to shared data",
        "Simple workflow management",
      ],
      cta: {
        text: "Upgrade to Centralized CRM",
        url: "https://salescentri.com/solutions/use-case-navigator/recommendation",
      },
    },
    {
      stage: 3,
      title: "Automated",
      description: "Workflow automation and integrated systems",
      icon: Zap,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      features: [
        "Automated lead nurturing",
        "Integration with marketing tools",
        "Advanced reporting and analytics",
        "Customized workflows",
      ],
      cta: {
        text: "Implement Automation",
        url: "https://salescentri.com/platforms/lead-management/chat-bot",
      },
    },
    {
      stage: 4,
      title: "Predictive",
      description: "AI-powered insights and predictive analytics",
      icon: Brain,
      color: "text-green-600",
      bgColor: "bg-green-50",
      features: [
        "AI-powered lead scoring",
        "Predictive sales forecasting",
        "Intelligent recommendations",
        "Advanced customer insights",
      ],
      cta: {
        text: "Move to Predictive Insights",
        url: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator",
      },
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">CRM Maturity Model</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand where you are and plan your journey to CRM excellence. Most organizations progress through these
            four distinct stages.
          </p>
        </div>

        {/* Maturity Funnel */}
        <div className="mb-16">
          <div className="relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {maturityStages.map((stage, index) => {
                const Icon = stage.icon
                return (
                  <Card
                    key={stage.stage}
                    className={`enterprise-card ${stage.bgColor} border-2 hover:shadow-xl transition-all duration-300`}
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 rounded-full ${stage.bgColor} flex items-center justify-center mx-auto mb-4 border-2 border-current ${stage.color}`}
                      >
                        <Icon className={`h-8 w-8 ${stage.color}`} />
                      </div>
                      <CardTitle className={`text-2xl ${stage.color}`}>
                        Stage {stage.stage}: {stage.title}
                      </CardTitle>
                      <CardDescription className="text-gray-700 font-medium">{stage.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {stage.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="cta-button-black w-full">
                        <a
                          href={stage.cta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          {stage.cta.text}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Assessment CTA */}
        <div className="gradient-bg text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Where Does Your Organization Stand?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Take our free CRM maturity assessment to identify your current stage and get personalized recommendations
            for your next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a
                href="https://salescentri.com/solutions/use-case-navigator/recommendation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Get ROI-Based CRM Plan
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Assessment Call
              </a>
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of CRM Maturity Progression</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="enterprise-card text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Increased Revenue</CardTitle>
                <CardDescription>
                  Organizations see 15-25% revenue growth with each maturity stage advancement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="enterprise-card text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Improved Efficiency</CardTitle>
                <CardDescription>
                  Automation reduces manual tasks by up to 40%, freeing teams for strategic work
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="enterprise-card text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Better Insights</CardTitle>
                <CardDescription>Predictive analytics improve forecasting accuracy by 30% or more</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
