"use client"

import { Search, MapPin, DollarSign, BedDouble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function HeroSection() {
  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-gradient-to-br from-beige-dark to-beige md:min-h-[750px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/31457abb-a03e-4360-a07b-cf8e1996349d/generated_images/professional-interior-photography-of-a-m-0015d39f-20251111182913.jpg"
          alt="Modern PG room in Bengaluru"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-beige/95 via-beige/85 to-beige/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[650px] flex-col justify-center px-4 py-20 md:min-h-[750px] md:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              Find your perfect stay in Bengaluru.
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-foreground/70 md:text-xl">
              Connecting students and professionals to verified PGs, flats & coliving homes across the city.
            </p>
          </motion.div>

          {/* Search Bar with slide-in animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white p-6 shadow-2xl md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-4">
              {/* Location */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-accent/30 p-4 transition-all hover:border-[#FF8C42]/50">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#FF8C42]" />
                <Select>
                  <SelectTrigger className="border-0 p-0 focus:ring-0">
                    <SelectValue placeholder="Area / Locality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="koramangala">Koramangala</SelectItem>
                    <SelectItem value="hsr">HSR Layout</SelectItem>
                    <SelectItem value="whitefield">Whitefield</SelectItem>
                    <SelectItem value="indiranagar">Indiranagar</SelectItem>
                    <SelectItem value="marathahalli">Marathahalli</SelectItem>
                    <SelectItem value="bellandur">Bellandur</SelectItem>
                    <SelectItem value="electronic-city">Electronic City</SelectItem>
                    <SelectItem value="jp-nagar">JP Nagar</SelectItem>
                    <SelectItem value="btm">BTM Layout</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-accent/30 p-4 transition-all hover:border-[#FF8C42]/50">
                <DollarSign className="h-5 w-5 flex-shrink-0 text-[#FF8C42]" />
                <Select>
                  <SelectTrigger className="border-0 p-0 focus:ring-0">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10k">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="10-15k">₹10,000 - ₹15,000</SelectItem>
                    <SelectItem value="15-20k">₹15,000 - ₹20,000</SelectItem>
                    <SelectItem value="20-30k">₹20,000 - ₹30,000</SelectItem>
                    <SelectItem value="30k-plus">₹30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Room Type */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-accent/30 p-4 transition-all hover:border-[#FF8C42]/50">
                <BedDouble className="h-5 w-5 flex-shrink-0 text-[#FF8C42]" />
                <Select>
                  <SelectTrigger className="border-0 p-0 focus:ring-0">
                    <SelectValue placeholder="Room Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Sharing</SelectItem>
                    <SelectItem value="double">Double Sharing</SelectItem>
                    <SelectItem value="triple">Triple Sharing</SelectItem>
                    <SelectItem value="1bhk">1 BHK</SelectItem>
                    <SelectItem value="2bhk">2 BHK</SelectItem>
                    <SelectItem value="3bhk">3 BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button className="h-auto bg-[#FF8C42] py-4 text-base font-semibold text-white hover:bg-[#ff7a2e] shadow-lg transition-all hover:shadow-xl">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}