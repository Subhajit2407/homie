"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, CheckCircle2, Wifi, UtensilsCrossed, WashingMachine, Users, IndianRupee, Home, Bed, Bath } from "lucide-react"

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Image Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Content */}
        <div className="p-6">
          <DialogHeader className="mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                  {property.title}
                </DialogTitle>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {property.address}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#FF8C42] flex items-center gap-1">
                  <IndianRupee className="h-6 w-6" />
                  {property.price.replace('₹', '')}
                </div>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
            </div>
          </DialogHeader>

          {/* Property Details */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">Property Details</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-accent/30 p-3">
                <Home className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-xs text-muted-foreground">Room Type</p>
                  <p className="font-semibold">{property.details.roomType}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-accent/30 p-3">
                <Bed className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-xs text-muted-foreground">Beds</p>
                  <p className="font-semibold">{property.details.beds}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-accent/30 p-3">
                <Bath className="h-5 w-5 text-orange" />
                <div>
                  <p className="text-xs text-muted-foreground">Baths</p>
                  <p className="font-semibold">{property.details.baths}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.wifi && (
                <Badge variant="secondary" className="flex items-center gap-2 bg-accent/50 px-4 py-2 text-sm">
                  <Wifi className="h-4 w-4 text-orange" />
                  High-Speed WiFi
                </Badge>
              )}
              {property.amenities.food && (
                <Badge variant="secondary" className="flex items-center gap-2 bg-accent/50 px-4 py-2 text-sm">
                  <UtensilsCrossed className="h-4 w-4 text-orange" />
                  Food Included
                </Badge>
              )}
              {property.amenities.laundry && (
                <Badge variant="secondary" className="flex items-center gap-2 bg-accent/50 px-4 py-2 text-sm">
                  <WashingMachine className="h-4 w-4 text-orange" />
                  Laundry Service
                </Badge>
              )}
              {property.amenities.coupleFriendly && (
                <Badge variant="secondary" className="flex items-center gap-2 bg-accent/50 px-4 py-2 text-sm">
                  <Users className="h-4 w-4 text-orange" />
                  Couple Friendly
                </Badge>
              )}
            </div>
          </div>

          {/* Owner/Agent Details */}
          <div className="mb-6 rounded-lg border border-border/50 bg-accent/30 p-4">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-lg font-semibold">Owner Details</h3>
              {property.owner.verified && (
                <Badge className="flex items-center gap-1 bg-green-500/10 text-green-700 hover:bg-green-500/20">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified
                </Badge>
              )}
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{property.owner.name}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {property.owner.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                {property.owner.email}
              </div>
            </div>
          </div>

          {/* Map View Placeholder */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">Location</h3>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/50 bg-accent/30">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-orange" />
                  <p className="text-sm">Map View</p>
                  <p className="text-xs">{property.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 bg-[#FF8C42] font-semibold hover:bg-[#ff7a2e]">
              <Phone className="mr-2 h-4 w-4" />
              Contact Owner
            </Button>
            <Button variant="outline" className="flex-1 border-[#FF8C42] text-[#FF8C42] hover:bg-[#FF8C42]/10">
              Schedule Visit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
