"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Building2, Eye, Calendar, TrendingUp, Edit, Trash2, Plus, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [properties] = useState([
    {
      id: 1,
      title: "Modern PG in Koramangala",
      location: "Koramangala, Bengaluru",
      price: "₹12,000",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      occupancy: { current: 8, total: 10 },
      views: 245,
      bookings: 12,
      status: "active"
    },
    {
      id: 2,
      title: "Premium Flat in HSR Layout",
      location: "HSR Layout, Bengaluru",
      price: "₹18,500",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      occupancy: { current: 2, total: 2 },
      views: 189,
      bookings: 8,
      status: "active"
    },
    {
      id: 3,
      title: "Co-living Space Whitefield",
      location: "Whitefield, Bengaluru",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      occupancy: { current: 15, total: 20 },
      views: 312,
      bookings: 18,
      status: "active"
    }
  ])

  const stats = [
    { label: "Total Properties", value: properties.length, icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Total Views", value: properties.reduce((sum, p) => sum + p.views, 0), icon: Eye, color: "text-green-600", bg: "bg-green-50" },
    { label: "Total Bookings", value: properties.reduce((sum, p) => sum + p.bookings, 0), icon: Calendar, color: "text-orange", bg: "bg-orange/10" },
    { label: "Occupancy Rate", value: "75%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="mb-3 text-4xl font-bold text-foreground">Owner Dashboard</h1>
            <p className="text-lg text-muted-foreground">Manage your properties and track performance</p>
          </div>

          {/* Stats Grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className={`border-2 border-border/40 ${stat.bg} p-6 shadow-md`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full ${stat.bg}`}>
                    <stat.icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Properties Section */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">My Properties</h2>
            <Button className="bg-orange hover:bg-orange-hover">
              <Plus className="mr-2 h-4 w-4" />
              Add New Property
            </Button>
          </div>

          <div className="space-y-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden border-2 border-border/40 bg-white shadow-md transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row">
                  {/* Property Image */}
                  <div className="relative aspect-video md:w-64 md:flex-shrink-0">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover"
                    />
                    <Badge className="absolute right-3 top-3 bg-green-500">
                      {property.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </div>

                  {/* Property Details */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-foreground">{property.title}</h3>
                          <p className="mb-4 text-sm text-muted-foreground">{property.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-orange">{property.price}</p>
                          <p className="text-xs text-muted-foreground">per month</p>
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="mb-6 grid grid-cols-3 gap-4">
                        <div className="rounded-lg border border-border/40 bg-gradient-to-br from-orange/5 to-white p-3">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-orange" />
                            <div>
                              <p className="text-xs text-muted-foreground">Occupancy</p>
                              <p className="font-bold text-foreground">
                                {property.occupancy.current}/{property.occupancy.total}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-border/40 bg-gradient-to-br from-orange/5 to-white p-3">
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-orange" />
                            <div>
                              <p className="text-xs text-muted-foreground">Views</p>
                              <p className="font-bold text-foreground">{property.views}</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-border/40 bg-gradient-to-br from-orange/5 to-white p-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-orange" />
                            <div>
                              <p className="text-xs text-muted-foreground">Bookings</p>
                              <p className="font-bold text-foreground">{property.bookings}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-2 border-orange text-orange hover:bg-orange/10">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" className="flex-1 border-2 hover:border-red-500 hover:text-red-500">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State (if no properties) */}
          {properties.length === 0 && (
            <Card className="border-2 border-dashed border-border/40 bg-white p-12 text-center">
              <Building2 className="mx-auto mb-4 h-16 w-16 text-muted-foreground/30" />
              <h3 className="mb-2 text-xl font-bold text-foreground">No Properties Yet</h3>
              <p className="mb-6 text-muted-foreground">
                Start by adding your first property to the platform
              </p>
              <Button className="bg-orange hover:bg-orange-hover">
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Property
              </Button>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
