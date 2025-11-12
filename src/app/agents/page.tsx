"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CheckCircle2, ShieldCheck, TrendingUp, Users, Upload, FileCheck, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e] pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              Join as an Agent or Owner
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              List your properties on Homie and reach 50,000+ verified residents looking for PGs and flats in Bengaluru.
            </p>
            <Button size="lg" className="bg-white text-[#FF8C42] hover:bg-white/90 shadow-xl text-lg px-8 py-6 font-bold">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Why List with <span className="text-[#FF8C42]">Homie</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join thousands of verified agents and property owners growing their business with us.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border border-border/40 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Reach 50K+ Users</h3>
              <p className="text-sm text-muted-foreground">
                Get your properties in front of thousands of verified students and professionals actively searching for homes.
              </p>
            </Card>

            <Card className="rounded-2xl border border-border/40 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Verified Badge</h3>
              <p className="text-sm text-muted-foreground">
                Get a verified owner badge that builds trust and increases inquiries by 3x.
              </p>
            </Card>

            <Card className="rounded-2xl border border-border/40 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Boost Occupancy</h3>
              <p className="text-sm text-muted-foreground">
                Reduce vacancy periods with our intelligent matching algorithm connecting you to the right tenants.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Get your property listed in 3 simple steps
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e] text-xl font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                    <Upload className="h-5 w-5 text-[#FF8C42]" />
                    Sign Up & Upload Details
                  </h3>
                  <p className="text-muted-foreground">
                    Create your account, upload property photos, and fill in details like rent, amenities, and location.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e] text-xl font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                    <FileCheck className="h-5 w-5 text-[#FF8C42]" />
                    Get Verified
                  </h3>
                  <p className="text-muted-foreground">
                    Our team verifies your identity and property within 24-48 hours for safety and trust.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e] text-xl font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                    <BadgeCheck className="h-5 w-5 text-[#FF8C42]" />
                    Go Live & Get Inquiries
                  </h3>
                  <p className="text-muted-foreground">
                    Your property goes live with a verified badge. Start receiving inquiries from genuine tenants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="rounded-2xl border border-border/40 bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-center text-3xl font-bold text-foreground">
                List Your Property
              </h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Type *</Label>
                  <Input id="property-type" placeholder="PG / Flat / Co-living" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" placeholder="Koramangala, Bengaluru" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your property, number of rooms, amenities, etc."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-[#FF8C42] py-6 text-lg font-bold hover:bg-[#ff7a2e]">
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
