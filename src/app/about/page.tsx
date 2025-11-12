"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ShieldCheck, Target, Heart, MapPin, Phone, Mail, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function AboutPage() {
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
              About Homie
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Bengaluru's most trusted platform for finding verified PGs, flats, and co-living spaces. Built for students and professionals who deserve better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Mission
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We're on a mission to make finding safe, affordable accommodation in Bengaluru simple, transparent, and trustworthy.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-2xl border border-border/40 bg-white p-8 text-center shadow-sm hover:shadow-xl transition-all">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden fees. No broker hassles. Just honest listings with verified details.
                </p>
              </Card>

              <Card className="rounded-2xl border border-border/40 bg-white p-8 text-center shadow-sm hover:shadow-xl transition-all">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Trust & Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Every owner and property is verified. Your safety is our top priority.
                </p>
              </Card>

              <Card className="rounded-2xl border border-border/40 bg-white p-8 text-center shadow-sm hover:shadow-xl transition-all">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  We build lasting relationships, not just transactions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-5xl font-extrabold text-[#FF8C42] md:text-6xl">50,000+</div>
              <p className="text-lg font-medium text-muted-foreground">Residents Served</p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-extrabold text-[#FF8C42] md:text-6xl">2,000+</div>
              <p className="text-lg font-medium text-muted-foreground">Verified PGs Listed</p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-extrabold text-[#FF8C42] md:text-6xl">4.8★</div>
              <p className="text-lg font-medium text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Real stories from real people who found their home with Homie.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border border-border/40 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-[#FF8C42] text-[#FF8C42]" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                "Found my perfect PG in Koramangala within 2 days! The verification process gave me confidence. Highly recommend Homie!"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                  <AvatarFallback>PK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Priya Kumar</p>
                  <p className="text-xs text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl border border-border/40 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-[#FF8C42] text-[#FF8C42]" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                "As an owner, listing on Homie was super easy. Got quality tenants quickly. The verification builds real trust!"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                  <AvatarFallback>RV</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Rajesh Verma</p>
                  <p className="text-xs text-muted-foreground">Property Owner</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl border border-border/40 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-[#FF8C42] text-[#FF8C42]" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                "Moving to Bangalore was stressful until I found Homie. Clean interface, verified listings, and great support team!"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=25" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Ananya Singh</p>
                  <p className="text-xs text-muted-foreground">Graduate Student</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
              Visit Us
            </h2>
            <Card className="rounded-2xl border border-border/40 bg-gradient-to-br from-beige to-white p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-start justify-center gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#FF8C42]" />
                  <p className="text-lg text-foreground">
                    <strong>Homie Headquarters</strong><br />
                    <span className="text-muted-foreground">
                      80 Feet Road, Koramangala 4th Block<br />
                      Bengaluru, Karnataka 560034
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-[#FF8C42]" />
                  <a href="tel:+919876543210" className="text-lg text-[#FF8C42] hover:underline">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-[#FF8C42]" />
                  <a href="mailto:contact@homie.in" className="text-lg text-[#FF8C42] hover:underline">
                    contact@homie.in
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
