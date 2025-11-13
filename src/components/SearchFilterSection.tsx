"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, Building2, MapPin, DollarSign, Calendar, Wifi, UtensilsCrossed, WashingMachine, Users, Heart, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import dynamic from 'next/dynamic'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Dynamic import for PropertyDetailModal with lazy loading
const PropertyDetailModal = dynamic(() => import('./PropertyDetailModal'), {
  ssr: false,
  loading: () => null
})

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
    priceValue: 12000,
    description: "Spacious and well-furnished PG accommodation in the heart of Koramangala. Perfect for working professionals and students. Close to metro station, restaurants, and shopping centers.",
    amenities: { wifi: true, food: true, laundry: true, coupleFriendly: false },
    details: { roomType: "Single", beds: 1, baths: 1 },
    owner: { name: "Rajesh Kumar", phone: "+91 98765 43210", email: "rajesh@homie.com", verified: true },
    propertyType: "pg",
    locality: "koramangala"
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
    priceValue: 18500,
    description: "Luxurious 2BHK flat with modern amenities in HSR Layout. Spacious rooms with attached bathrooms, modular kitchen, and 24/7 security. Ideal for couples and small families.",
    amenities: { wifi: true, food: false, laundry: true, coupleFriendly: true },
    details: { roomType: "2BHK", beds: 2, baths: 2 },
    owner: { name: "Priya Sharma", phone: "+91 98765 43211", email: "priya@homie.com", verified: true },
    propertyType: "flat",
    locality: "hsr"
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
    priceValue: 15000,
    description: "Modern co-living space with shared amenities. Fully furnished rooms, high-speed WiFi, housekeeping, and community events. Perfect for young professionals working in tech parks.",
    amenities: { wifi: true, food: true, laundry: true, coupleFriendly: false },
    details: { roomType: "Shared", beds: 2, baths: 1 },
    owner: { name: "Ankit Verma", phone: "+91 98765 43212", email: "ankit@homie.com", verified: true },
    propertyType: "colive",
    locality: "whitefield"
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
    priceValue: 10500,
    description: "Comfortable PG with homely atmosphere. Clean rooms, nutritious food, and friendly environment. Walking distance to Indiranagar metro station and commercial street.",
    amenities: { wifi: true, food: true, laundry: false, coupleFriendly: false },
    details: { roomType: "Single", beds: 1, baths: 1 },
    owner: { name: "Meera Nair", phone: "+91 98765 43213", email: "meera@homie.com", verified: true },
    propertyType: "pg",
    locality: "indiranagar"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    ],
    title: "Double Sharing PG Electronic City",
    location: "Electronic City, Bengaluru",
    address: "Phase 1, Electronic City, Bengaluru - 560100",
    price: "₹8,500",
    priceValue: 8500,
    description: "Affordable double sharing PG near major tech parks. Well-maintained rooms with all basic amenities. Perfect for IT professionals working in Electronic City.",
    amenities: { wifi: true, food: true, laundry: true, coupleFriendly: false },
    details: { roomType: "Double", beds: 2, baths: 1 },
    owner: { name: "Suresh Reddy", phone: "+91 98765 43214", email: "suresh@homie.com", verified: true },
    propertyType: "pg",
    locality: "electronic-city"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    ],
    title: "Luxury Apartment Koramangala",
    location: "Koramangala, Bengaluru",
    address: "7th Block, Koramangala, Bengaluru - 560095",
    price: "₹25,000",
    priceValue: 25000,
    description: "Premium 3BHK apartment with gym, swimming pool, and parking. Fully furnished with modern interiors. Ideal for families and professionals seeking luxury living.",
    amenities: { wifi: true, food: false, laundry: true, coupleFriendly: true },
    details: { roomType: "3BHK", beds: 3, baths: 3 },
    owner: { name: "Vikram Singh", phone: "+91 98765 43215", email: "vikram@homie.com", verified: true },
    propertyType: "flat",
    locality: "koramangala"
  }
]

export default function SearchFilterSection() {
  const [selectedProperty, setSelectedProperty] = useState<typeof propertyListings[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  
  // Filter states
  const [propertyType, setPropertyType] = useState<string>("all")
  const [locality, setLocality] = useState<string>("all")
  const [budgetRange, setBudgetRange] = useState<number[]>([5000, 30000])
  const [roomType, setRoomType] = useState<string>("all")
  const [amenityFilters, setAmenityFilters] = useState({
    wifi: false,
    food: false,
    laundry: false,
    coupleFriendly: false
  })

  // Memoized filter logic for performance
  const filteredProperties = useMemo(() => {
    return propertyListings.filter((property) => {
      if (propertyType !== "all" && property.propertyType !== propertyType) return false
      if (locality !== "all" && property.locality !== locality) return false
      if (property.priceValue < budgetRange[0] || property.priceValue > budgetRange[1]) return false
      
      if (roomType !== "all") {
        const roomTypeMap: { [key: string]: string[] } = {
          single: ["Single"],
          double: ["Double", "2BHK"],
          shared: ["Shared", "3BHK"]
        }
        if (!roomTypeMap[roomType]?.includes(property.details.roomType)) return false
      }

      if (amenityFilters.wifi && !property.amenities.wifi) return false
      if (amenityFilters.food && !property.amenities.food) return false
      if (amenityFilters.laundry && !property.amenities.laundry) return false
      if (amenityFilters.coupleFriendly && !property.amenities.coupleFriendly) return false

      return true
    })
  }, [propertyType, locality, budgetRange, roomType, amenityFilters])

  // Memoized callback for property click
  const handlePropertyClick = useCallback((property: typeof propertyListings[0]) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }, [])

  const clearFilters = useCallback(() => {
    setPropertyType("all")
    setLocality("all")
    setBudgetRange([5000, 30000])
    setRoomType("all")
    setAmenityFilters({
      wifi: false,
      food: false,
      laundry: false,
      coupleFriendly: false
    })
  }, [])

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (propertyType !== "all") count++
    if (locality !== "all") count++
    if (budgetRange[0] !== 5000 || budgetRange[1] !== 30000) count++
    if (roomType !== "all") count++
    if (Object.values(amenityFilters).some(v => v)) count++
    return count
  }, [propertyType, locality, budgetRange, roomType, amenityFilters])

  return (
    <section className="w-full bg-gradient-to-br from-beige to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Find your home with <span className="text-[#FF8C42]">Homie</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Discover {filteredProperties.length} verified PGs and flats tailored to your needs
          </p>
        </div>

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 flex-shrink-0`}>
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Filters</h3>
                {activeFilterCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-orange hover:text-orange-hover"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Building2 className="h-4 w-4" />
                  Property Type
                </label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="pg">PG</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="colive">Co-living</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MapPin className="h-4 w-4" />
                  Locality
                </label>
                <Select value={locality} onValueChange={setLocality}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="koramangala">Koramangala</SelectItem>
                    <SelectItem value="hsr">HSR Layout</SelectItem>
                    <SelectItem value="whitefield">Whitefield</SelectItem>
                    <SelectItem value="indiranagar">Indiranagar</SelectItem>
                    <SelectItem value="electronic-city">Electronic City</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Range */}
              <div className="mb-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <DollarSign className="h-4 w-4" />
                  Budget Range
                </label>
                <div className="mb-4">
                  <Slider
                    min={5000}
                    max={30000}
                    step={1000}
                    value={budgetRange}
                    onValueChange={setBudgetRange}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-orange">₹{budgetRange[0].toLocaleString()}</span>
                    <span className="text-muted-foreground">to</span>
                    <span className="font-semibold text-orange">₹{budgetRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Room Type */}
              <div className="mb-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Building2 className="h-4 w-4" />
                  Room Type
                </label>
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Room Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Room Types</SelectItem>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="double">Double/2BHK</SelectItem>
                    <SelectItem value="shared">Shared/3BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="mb-3 text-sm font-semibold text-foreground">Amenities</label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="wifi"
                      checked={amenityFilters.wifi}
                      onCheckedChange={(checked) =>
                        setAmenityFilters({ ...amenityFilters, wifi: checked as boolean })
                      }
                    />
                    <label htmlFor="wifi" className="flex items-center gap-2 text-sm cursor-pointer">
                      <Wifi className="h-4 w-4 text-orange" />
                      WiFi
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="food"
                      checked={amenityFilters.food}
                      onCheckedChange={(checked) =>
                        setAmenityFilters({ ...amenityFilters, food: checked as boolean })
                      }
                    />
                    <label htmlFor="food" className="flex items-center gap-2 text-sm cursor-pointer">
                      <UtensilsCrossed className="h-4 w-4 text-orange" />
                      Food
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="laundry"
                      checked={amenityFilters.laundry}
                      onCheckedChange={(checked) =>
                        setAmenityFilters({ ...amenityFilters, laundry: checked as boolean })
                      }
                    />
                    <label htmlFor="laundry" className="flex items-center gap-2 text-sm cursor-pointer">
                      <WashingMachine className="h-4 w-4 text-orange" />
                      Laundry
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="couple"
                      checked={amenityFilters.coupleFriendly}
                      onCheckedChange={(checked) =>
                        setAmenityFilters({ ...amenityFilters, coupleFriendly: checked as boolean })
                      }
                    />
                    <label htmlFor="couple" className="flex items-center gap-2 text-sm cursor-pointer">
                      <Users className="h-4 w-4 text-orange" />
                      Couple Friendly
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="mb-6 flex items-center justify-between lg:hidden">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-orange hover:bg-orange-hover"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </Button>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProperties.map((property) => (
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
                        loading="lazy"
                      />
                      <button 
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation()
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
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white p-12 text-center">
                <div>
                  <Building2 className="mx-auto mb-4 h-16 w-16 text-muted-foreground/30" />
                  <h3 className="mb-2 text-xl font-bold text-foreground">No properties found</h3>
                  <p className="mb-6 text-muted-foreground">
                    Try adjusting your filters to see more results
                  </p>
                  <Button onClick={clearFilters} className="bg-orange hover:bg-orange-hover">
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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