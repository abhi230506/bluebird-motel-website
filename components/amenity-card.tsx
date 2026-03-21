"use client"
import {
  Car,
  Wifi,
  PawPrint,
  WashingMachine,
  Tv,
  Calendar,
  Snowflake,
  Shield,
  type LucideIcon,
} from "lucide-react"

interface Amenity {
  icon: string
  name: string
  description: string
  image: string
}

interface AmenityCardProps {
  amenity: Amenity
}

const iconMap: Record<string, LucideIcon> = {
  Car,
  Wifi,
  PawPrint,
  WashingMachine,
  Tv,
  Calendar,
  Snowflake,
  Shield,
}

export function AmenityCard({ amenity }: AmenityCardProps) {
  const IconComponent = iconMap[amenity.icon]

  return (
    <div className="rounded-lg border border-border bg-card p-4 md:p-6 card-interactive w-full">
      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10">
        {IconComponent && <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
      </div>
      <h3 className="mt-3 md:mt-4 font-semibold text-foreground text-sm md:text-base">{amenity.name}</h3>
      <p className="hidden md:block mt-2 text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
    </div>
  )
}
