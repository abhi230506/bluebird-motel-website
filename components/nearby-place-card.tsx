"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NearbyPlace {
  name: string
  category: string
  distance: string
  description: string
  image: string
  mapsUrl: string
}

interface NearbyPlaceCardProps {
  place: NearbyPlace
}

export function NearbyPlaceCard({ place }: NearbyPlaceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Card */}
      <button
        onClick={() => setIsExpanded(true)}
        className="group text-left rounded-lg border border-border bg-card overflow-hidden card-interactive focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <div className="aspect-[3/2] md:aspect-[4/3] relative overflow-hidden">
          <Image
            src={place.image || "/placeholder.svg"}
            alt={place.name}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <div className="p-3 md:p-4">
          <p className="hidden md:block text-xs font-medium text-primary uppercase tracking-wide">{place.category}</p>
          <h3 className="font-semibold text-foreground text-sm md:text-base md:mt-1">{place.name}</h3>
          <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {place.distance}
          </p>
        </div>
      </button>

      {/* Modal overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-out ${
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />

        {/* Modal content */}
        <div
          className={`relative bg-background rounded-lg shadow-xl max-w-md w-full overflow-hidden transition-all duration-250 ease-out ${
            isExpanded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
          }`}
        >
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors duration-150"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>

          <div className="aspect-video relative">
            <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
          </div>

          <div className="p-6">
            <p className="text-xs font-medium text-primary uppercase tracking-wide">{place.category}</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">{place.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {place.distance}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{place.description}</p>

            <Button asChild className="mt-6 w-full btn-interactive">
              <a href={place.mapsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
