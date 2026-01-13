"use client"

import Image from "next/image"
import { Check, Users, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

interface RoomSelectionCardProps {
  room: {
    id: string
    name: string
    image: string
    sleeps: number
    beds: string
    features: string[]
    description: string
  }
  isSelected: boolean
  onSelect: () => void
  onViewDetails: () => void
}

export function RoomSelectionCard({ room, isSelected, onSelect, onViewDetails }: RoomSelectionCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border-2 overflow-hidden cursor-pointer transition-all duration-200",
        isSelected
          ? "border-primary bg-primary/5 shadow-md"
          : "border-border bg-card hover:border-primary/40 hover:shadow-sm",
      )}
      onClick={onSelect}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 z-10 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
          <Check className="h-4 w-4 text-primary-foreground" />
        </div>
      )}

      {/* Room image */}
      <div className="relative aspect-[4/3]">
        <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
      </div>

      {/* Room info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-lg">{room.name}</h3>

        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            Sleeps {room.sleeps}
          </span>
          <span>{room.beds}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {room.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onViewDetails()
          }}
          className="mt-4 flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <Eye className="h-4 w-4" />
          View details
        </button>
      </div>
    </div>
  )
}
