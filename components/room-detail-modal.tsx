"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, Check, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Room {
  id: string
  name: string
  image: string
  sleeps: number
  beds: string
  features: string[]
  description: string
  additionalImages?: string[]
}

interface RoomDetailModalProps {
  room: Room | null
  isOpen: boolean
  onClose: () => void
  onSelect: () => void
  isSelected: boolean
}

export function RoomDetailModal({ room, isOpen, onClose, onSelect, isSelected }: RoomDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen || !room) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-card shadow-xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Main image */}
        <div className="relative aspect-[16/10]">
          <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{room.name}</h2>
              <div className="mt-2 flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  Sleeps {room.sleeps}
                </span>
                <span>{room.beds}</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-muted-foreground leading-relaxed">{room.description}</p>

          <div className="mt-6">
            <h3 className="font-medium text-foreground mb-3">Room Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-3">
            <Button
              onClick={() => {
                onSelect()
                onClose()
              }}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 btn-interactive"
            >
              {isSelected ? "Selected" : "Select This Room"}
            </Button>
            <Button variant="outline" onClick={onClose} className="bg-transparent">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
