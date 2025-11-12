"use client"

import { useState } from "react"
import { Search, Building2, MapPin, DollarSign, Calendar, Wifi, UtensilsCrossed, WashingMachine, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PropertyDetailModal from "@/components/PropertyDetailModal"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const propertyListings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    ],
    title: "Modern PG in Koramangala",
    location: "Koramangala, Bengaluru",
    address: "5th Block, Koramangala, Bengaluru - 560095",
    price: "₹12,000",
    description: "Spacious and well-furnished PG accommodation in the heart of Koramangala. Perfect for working professionals and students. Close to metro station, restaurants, and shopping centers.",
    amenities: { wifi: true, food: true, laundry: true, coupleFriendly: false },
    details: { roomType: "Single", beds: 1, baths: 1 },
    owner: { name: "Rajesh Kumar", phone: "+91 98765 43210", email: "rajesh@homie.com", verified: true }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
    ],
    title: "Premium Flat in HSR Layout",
    location: "HSR Layout, Bengaluru",
    address: "Sector 2, HSR Layout, Bengaluru - 560102",
    price: "₹18,500",
    description: "Luxurious 2BHK flat with modern amenities in HSR Layout. Spacious rooms with attached bathrooms, modular kitchen, and 24/7 security. Ideal for couples and small families.",
    amenities: { wifi: true, food: false, laundry: true, coupleFriendly: true },
    details: { roomType: "2BHK", beds: 2, baths: 2 },
    owner: { name: "Priya Sharma", phone: "+91 98765 43211", email: "priya@homie.com", verified: true }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    ],
    title: "Co-living Space Whitefield",
    location: "Whitefield, Bengaluru",
    address: "ITPL Main Road, Whitefield, Bengaluru - 560066",
    price: "₹15,000",
    description: "Modern co-living space with shared amenities. Fully furnished rooms, high-speed WiFi, housekeeping, and community events. Perfect for young professionals working in tech parks.",
    amenities: { wifi: true, food: true, laundry: true, coupleFriendly: false },
    details: { roomType: "Shared", beds: 2, baths: 1 },
    owner: { name: "Ankit Verma", phone: "+91 98765 43212", email: "ankit@homie.com", verified: true }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
    ],
    title: "Cozy PG near Indiranagar",
    location: "Indiranagar, Bengaluru",
    address: "100 Feet Road, Indiranagar, Bengaluru - 560038",
    price: "₹10,500",
    description: "Comfortable PG with homely atmosphere. Clean rooms, nutritious food, and friendly environment. Walking distance to Indiranagar metro station and commercial street.",
    amenities: { wifi: true, food: true, laundry: false, coupleFriendly: false },
    details: { roomType: "Single", beds: 1, baths: 1 },
    owner: { name: "Meera Nair", phone: "+91 98765 43213", email: "meera@homie.com", verified: true }
  }
]

export default function SearchFilterSection() {
  const [selectedProperty, setSelectedProperty] = useState<typeof propertyListings[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePropertyClick = (property: typeof propertyListings[0]) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  return (
    <section className="w-full bg-gradient-to-br from-beige to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Find your home with <span className="text-[#FF8C42]">Homie</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Discover verified PGs and flats tailored to your needs
          </p>
        </div>

        <div className="mx-auto mb-16 max-w-5xl rounded-2xl bg-white p-6 shadow-xl md:p-8">
          <div className="grid gap-4 md:grid-cols-5">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Building2 className="h-4 w-4" />
                Property Type
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pg">PG</SelectItem>
                  <SelectItem value="flat">Flat</SelectItem>
                  <SelectItem value="colive">Co-living</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Location
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="koramangala">Koramangala</SelectItem>
                  <SelectItem value="hsr">HSR Layout</SelectItem>
                  <SelectItem value="whitefield">Whitefield</SelectItem>
                  <SelectItem value="indiranagar">Indiranagar</SelectItem>
                  <SelectItem value="marathahalli">Marathahalli</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                Price Range
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-10k">Below ₹10,000</SelectItem>
                  <SelectItem value="10-20k">₹10,000 - ₹20,000</SelectItem>
                  <SelectItem value="20-30k">₹20,000 - ₹30,000</SelectItem>
                  <SelectItem value="30k-plus">Above ₹30,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Date of Move-in
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Move-in date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="1-week">Within 1 week</SelectItem>
                  <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-transparent">Search</label>
              <Button className="h-10 w-full bg-[#FF8C42] font-semibold hover:bg-[#ff7a2e] shadow-md">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-foreground">Featured Properties</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {propertyListings.map((property) => (
              <Card 
                key={property.id} 
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border/40 bg-white shadow-sm transition-all hover:shadow-xl hover:border-[#FF8C42]/30"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button 
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Handle favorite logic
                    }}
                  >
                    <Heart className="h-4 w-4 text-foreground/70" />
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="mb-1 font-semibold text-foreground line-clamp-1">{property.title}</h4>
                  <p className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {property.location}
                  </p>
                  <div className="mb-3 flex items-center gap-2 text-xl font-bold text-[#FF8C42]">
                    {property.price}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.wifi && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-accent/50 text-xs">
                        <Wifi className="h-3 w-3" />
                        WiFi
                      </Badge>
                    )}
                    {property.amenities.food && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-accent/50 text-xs">
                        <UtensilsCrossed className="h-3 w-3" />
                        Food
                      </Badge>
                    )}
                    {property.amenities.laundry && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-accent/50 text-xs">
                        <WashingMachine className="h-3 w-3" />
                        Laundry
                      </Badge>
                    )}
                    {property.amenities.coupleFriendly && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-accent/50 text-xs">
                        <Users className="h-3 w-3" />
                        Couple
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          property={selectedProperty}
        />
      )}
    </section>
  )
}