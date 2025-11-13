import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Shield, CheckCircle2, FileCheck, UserCheck, Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SafetyPage() {
  const verificationSteps = [
    {
      icon: UserCheck,
      title: "Host Background Verification",
      description: "All property owners undergo comprehensive background checks including identity verification, address proof, and criminal record screening.",
      details: ["Government ID verification", "Address proof validation", "Police verification clearance", "Reference checks"]
    },
    {
      icon: FileCheck,
      title: "Property Inspection",
      description: "Every property is physically inspected by our team to ensure safety standards, amenities, and living conditions meet our quality guidelines.",
      details: ["Safety equipment check", "Structural integrity assessment", "Amenity verification", "Hygiene standards review"]
    },
    {
      icon: Shield,
      title: "Legal Documentation",
      description: "All properties are verified for legal compliance with proper ownership documents, rental agreements, and necessary permits.",
      details: ["Ownership documents", "Rental agreements", "NOC certificates", "Municipal permits"]
    },
    {
      icon: CheckCircle2,
      title: "Ongoing Monitoring",
      description: "Continuous monitoring of properties and hosts through tenant feedback, periodic re-inspections, and complaint resolution.",
      details: ["Regular property audits", "Tenant feedback analysis", "24/7 support system", "Quick issue resolution"]
    }
  ]

  const safetyStats = [
    { value: "100%", label: "Verified Properties" },
    { value: "2000+", label: "Background Checks" },
    { value: "50,000+", label: "Safe Stays" },
    { value: "24/7", label: "Support Available" }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      rating: 5,
      text: "I felt completely safe moving into my PG. Homie's verification process gave me peace of mind. The owner was genuine and the property matched exactly what was shown.",
      location: "Koramangala, Bengaluru"
    },
    {
      name: "Rahul Menon",
      role: "Marketing Professional",
      rating: 5,
      text: "The background verification and property inspection process is thorough. I could see the verified badge and all safety certifications before booking. Highly recommend!",
      location: "HSR Layout, Bengaluru"
    },
    {
      name: "Anjali Patel",
      role: "Product Designer",
      rating: 5,
      text: "As a woman living alone, safety was my top priority. Homie's verification gave me confidence. The support team is always available and responsive.",
      location: "Whitefield, Bengaluru"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange to-orange-hover shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Your Safety is Our <span className="text-orange">Priority</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              We implement rigorous verification processes to ensure every property and host on Homie meets the highest safety and quality standards.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {safetyStats.map((stat, index) => (
                <Card key={index} className="border-2 border-orange/20 bg-gradient-to-br from-white to-orange/5 p-6 text-center shadow-lg">
                  <div className="mb-2 text-4xl font-bold text-orange">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Verification Process */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Verification Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                A comprehensive 4-step verification ensures every property meets our safety standards
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {verificationSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden border-2 border-border/40 bg-white shadow-lg transition-all hover:shadow-xl hover:border-orange/30">
                  <div className="bg-gradient-to-br from-orange/10 to-orange/5 p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10">
                        <step.icon className="h-7 w-7 text-orange" />
                      </div>
                      <Badge className="bg-green-500/10 text-green-700">Step {index + 1}</Badge>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">{step.description}</p>
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety Features */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Additional Safety Features
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-border/40 bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <Shield className="h-6 w-6 text-orange" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Secure Payments</h3>
                <p className="text-muted-foreground">All transactions are processed through secure payment gateways with encryption and fraud protection.</p>
              </Card>

              <Card className="border-2 border-border/40 bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <CheckCircle2 className="h-6 w-6 text-orange" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Verified Reviews</h3>
                <p className="text-muted-foreground">Only verified tenants who have stayed at a property can leave reviews, ensuring authentic feedback.</p>
              </Card>

              <Card className="border-2 border-border/40 bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <UserCheck className="h-6 w-6 text-orange" />
                </div>
                <h3 className="mb-3 text-xl font-bold">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock customer support to address any safety concerns or issues you may encounter.</p>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                What Our Residents Say
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Real experiences from verified residents about their safety and satisfaction
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative overflow-hidden border-2 border-border/40 bg-white p-6 shadow-lg">
                  <div className="mb-4">
                    <Quote className="h-10 w-10 text-orange/20" />
                  </div>
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange text-orange" />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-muted-foreground">{testimonial.text}</p>
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="mt-1 text-xs text-orange">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl bg-gradient-to-br from-orange to-orange-hover p-12 text-center shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Find Your Safe Haven?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Browse through 2000+ verified properties in Bengaluru
            </p>
            <a
              href="/find-pgs"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 font-bold text-orange shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Explore Verified Properties
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
