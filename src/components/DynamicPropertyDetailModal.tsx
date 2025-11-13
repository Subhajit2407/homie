"use client"

import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// Dynamically import the PropertyDetailModal with loading state
const PropertyDetailModal = dynamic(
  () => import('./PropertyDetailModal'),
  {
    loading: () => (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-orange" />
      </div>
    ),
    ssr: false // Modal doesn't need SSR
  }
)

export default PropertyDetailModal
