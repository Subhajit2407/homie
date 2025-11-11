"use client"

import { Star, MapPin, ShieldCheck, Calendar, CheckCircle2, Lock, Headphones } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function TrustSection() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Trust Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Trusted by{" "}
            <span className="text-[#FF8C42]">
              50,000+
            </span>{" "}
            residents in Bengaluru
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Over 2000+ verified PGs listed. No brokers. Safe moves.
          </p>

          {/* User Avatars and Rating */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                <AvatarImage src="https://i.pravatar.cc/150?img=25" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                <AvatarImage src="https://i.pravatar.cc/150?img=47" />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                <AvatarImage src="https://i.pravatar.cc/150?img=56" />
                <AvatarFallback>U5</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-[#FF8C42] text-[#FF8C42]" />
                ))}
                <Star className="h-5 w-5 fill-[#FF8C42] text-[#FF8C42] opacity-80" />
              </div>
              <span className="text-lg font-bold text-foreground">4.8★</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-4 w-4" />
              Verified Owner
            </div>
            <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Lock className="h-4 w-4" />
              Secure Payment
            </div>
            <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[#FF8C42]">
              <Headphones className="h-4 w-4" />
              24/7 Support
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card className="group h-full overflow-hidden rounded-2xl border border-border/40 bg-white p-8 shadow-sm transition-all hover:border-[#FF8C42]/30 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Explore Neighbourhoods</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Filter by commute time to major tech parks & colleges. Find PGs near your workplace or university.
              </p>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card className="group h-full overflow-hidden rounded-2xl border border-border/40 bg-white p-8 shadow-sm transition-all hover:border-[#FF8C42]/30 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Verified Owners</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                All hosts ID‐checked & PGs inspected. Stay confidently with trusted, verified property owners.
              </p>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card className="group h-full overflow-hidden rounded-2xl border border-border/40 bg-white p-8 shadow-sm transition-all hover:border-[#FF8C42]/30 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e]">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Flexible Bookings</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Monthly or 3-month stays, easy cancellation. Book with flexibility and peace of mind.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}