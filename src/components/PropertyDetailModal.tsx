"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, CheckCircle2, Wifi, UtensilsCrossed, WashingMachine, Users, IndianRupee, Home, Bed, Bath, X, ChevronLeft, ChevronRight, Heart, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface PropertyDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  property: {
    id: number
    title: string
    location: string
    price: string
    images: string[]
    description: string
    address: string
    amenities: {
      wifi: boolean
      food: boolean
      laundry: boolean
      coupleFriendly: boolean
    }
    details: {
      roomType: string
      beds: number
      baths: number
    }
    owner: {
      name: string
      phone: string
      email: string
      verified: boolean
    }
  }
}

export default function PropertyDetailModal({ open, onOpenChange, property }: PropertyDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Google Maps embed URL
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(property.address)}&zoom=15`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden p-0 gap-0 border-none shadow-2xl rounded-3xl">
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Close Button */}
              <button
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg transition-all hover:bg-white hover:scale-110"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>

              {/* Favorite Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute right-16 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg transition-all hover:bg-white hover:scale-110"
              >
                <Heart 
                  className={`h-5 w-5 transition-colors ${
                    isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
                  }`} 
                />
              </button>

              {/* Image Carousel */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={property.images[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-xl transition-all hover:bg-white hover:scale-110"
                    >
                      <ChevronLeft className="h-6 w-6 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-xl transition-all hover:bg-white hover:scale-110"
                    >
                      <ChevronRight className="h-6 w-6 text-foreground" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-sm font-medium text-white">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="max-h-[calc(95vh-300px)] overflow-y-auto p-8">
                {/* Header */}
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="mb-3 text-3xl font-bold text-foreground">
                      {property.title}
                    </h2>
                    <p className="flex items-center gap-2 text-base text-muted-foreground">
                      <MapPin className="h-5 w-5 text-orange" />
                      {property.address}
                    </p>
                  </div>
                  <div className="rounded-2xl border-2 border-orange/20 bg-orange/5 px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1 text-4xl font-bold text-orange">
                      <IndianRupee className="h-7 w-7" />
                      {property.price.replace('₹', '')}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">per month</span>
                  </div>
                </div>

                {/* Property Details Cards */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold">Property Details</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 rounded-xl border border-border/50 bg-gradient-to-br from-orange/5 to-orange/10 p-4 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                        <Home className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Room Type</p>
                        <p className="text-lg font-bold">{property.details.roomType}</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 rounded-xl border border-border/50 bg-gradient-to-br from-orange/5 to-orange/10 p-4 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                        <Bed className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Beds</p>
                        <p className="text-lg font-bold">{property.details.beds}</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 rounded-xl border border-border/50 bg-gradient-to-br from-orange/5 to-orange/10 p-4 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                        <Bath className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Baths</p>
                        <p className="text-lg font-bold">{property.details.baths}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold">Description</h3>
                  <p className="leading-relaxed text-muted-foreground">{property.description}</p>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold">Amenities</h3>
                  <div className="flex flex-wrap gap-3">
                    {property.amenities.wifi && (
                      <Badge variant="secondary" className="flex items-center gap-2 bg-gradient-to-r from-orange/10 to-orange/5 px-4 py-2.5 text-base border border-orange/20">
                        <Wifi className="h-5 w-5 text-orange" />
                        High-Speed WiFi
                      </Badge>
                    )}
                    {property.amenities.food && (
                      <Badge variant="secondary" className="flex items-center gap-2 bg-gradient-to-r from-orange/10 to-orange/5 px-4 py-2.5 text-base border border-orange/20">
                        <UtensilsCrossed className="h-5 w-5 text-orange" />
                        Food Included
                      </Badge>
                    )}
                    {property.amenities.laundry && (
                      <Badge variant="secondary" className="flex items-center gap-2 bg-gradient-to-r from-orange/10 to-orange/5 px-4 py-2.5 text-base border border-orange/20">
                        <WashingMachine className="h-5 w-5 text-orange" />
                        Laundry Service
                      </Badge>
                    )}
                    {property.amenities.coupleFriendly && (
                      <Badge variant="secondary" className="flex items-center gap-2 bg-gradient-to-r from-orange/10 to-orange/5 px-4 py-2.5 text-base border border-orange/20">
                        <Users className="h-5 w-5 text-orange" />
                        Couple Friendly
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Owner/Agent Details */}
                <div className="mb-8 rounded-2xl border-2 border-orange/20 bg-gradient-to-br from-orange/5 to-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <h3 className="text-xl font-bold">Owner Details</h3>
                    {property.owner.verified && (
                      <Badge className="flex items-center gap-1 bg-green-500/10 text-green-700 hover:bg-green-500/20">
                        <CheckCircle2 className="h-4 w-4" />
                        Verified Owner
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg font-bold">{property.owner.name}</p>
                    <div className="flex items-center gap-3 text-base text-muted-foreground">
                      <Phone className="h-5 w-5 text-orange" />
                      <span>{property.owner.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-muted-foreground">
                      <Mail className="h-5 w-5 text-orange" />
                      <span>{property.owner.email}</span>
                    </div>
                  </div>
                </div>

                {/* Map View with Google Maps Embed */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold">Location</h3>
                  <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-border/50 shadow-md">
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map location for ${property.title}`}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-4">
                  <Button className="h-14 bg-orange font-bold text-base hover:bg-orange-hover shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Owner
                  </Button>
                  <Button className="h-14 bg-green-600 font-bold text-base text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Visit
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`h-14 font-bold text-base border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                      isFavorite 
                        ? "border-red-500 bg-red-50 text-red-600 hover:bg-red-100" 
                        : "border-orange text-orange hover:bg-orange/10"
                    }`}
                  >
                    <Heart className={`mr-2 h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                    {isFavorite ? "Saved" : "Save"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}