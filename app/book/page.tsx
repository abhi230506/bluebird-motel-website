"use client"

import type React from "react"
import { useState } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RoomDetailModal } from "@/components/room-detail-modal"

const rooms = [
  {
    id: "queen",
    name: "Queen Room",
    image: "/room-economy-queen.jpg",
    sleeps: 2,
    beds: "1 Queen Bed",
    features: ["Free self parking", "Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Private bathroom"],
    description:
      "A comfortable and clean room perfect for solo travelers or couples looking for an affordable stay. Features a queen-size bed, private bathroom with shower, and all essential amenities.",
  },
  {
    id: "double-queen",
    name: "Double Queen Room",
    image: "/room-economy-double-queen.jpg",
    sleeps: 4,
    beds: "2 Queen Beds",
    features: ["Free self parking", "Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Private bathroom"],
    description:
      "Spacious room with two queen beds, ideal for families or friends traveling together. Plenty of space to relax with all the comforts of home.",
  },
  {
    id: "double",
    name: "Double Room",
    image: "/room-economy-double.jpg",
    sleeps: 1,
    beds: "1 Double Bed",
    features: ["Free self parking", "Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Private bathroom"],
    description:
      "Cozy and affordable room with a double bed, perfect for single travelers or couples on a budget. All essential amenities included.",
  },
  {
    id: "double-queen-kitchenette",
    name: "Double Queen Room with Kitchenette",
    image: "/room-double-queen-kitchenette.jpg",
    sleeps: 4,
    beds: "2 Queen Beds",
    features: ["Full kitchenette", "Mini-fridge", "Microwave", "Free self parking", "Free Wi-Fi", "Flat-screen TV"],
    description:
      "Our largest room with a full kitchenette, perfect for extended stays or families who want to prepare their own meals. Includes two queen beds and all kitchen essentials.",
  },
  {
    id: "queen-kitchenette",
    name: "Queen Room with Kitchenette",
    image: "/room-queen-kitchenette.jpg",
    sleeps: 2,
    beds: "1 Queen Bed",
    features: ["Kitchenette", "Mini-fridge", "Microwave", "Free self parking", "Free Wi-Fi", "Flat-screen TV"],
    description:
      "Ideal for extended stays. Features a queen bed and a convenient kitchenette with mini-fridge and microwave for light cooking and meal prep.",
  },
]

export default function BookPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [detailRoom, setDetailRoom] = useState<(typeof rooms)[0] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 md:px-6">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground">Request a Reservation</h1>
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Tell us about your stay and we'll find the best room to accommodate you. We'll contact you within 24 hours
              to confirm availability and finalize your booking.
            </p>
          </div>
        </section>

        {isSubmitted ? (
          <section className="py-8 md:py-12 lg:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
              <div className="rounded-lg border border-border bg-card p-5 md:p-6 lg:p-8">
                <div className="flex h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <h2 className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl font-semibold text-foreground">
                  Request Received!
                </h2>
                <p className="mt-1.5 md:mt-2 text-xs md:text-sm lg:text-base text-muted-foreground">
                  Thank you for your reservation request. We'll review your needs and contact you within 24 hours to
                  confirm the best available room for your stay.
                </p>
                <Button
                  className="mt-4 md:mt-6 bg-transparent text-xs md:text-sm"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSubmitted(false)
                    setSelectedRoom(null)
                  }}
                >
                  Make Another Request
                </Button>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-6 md:py-10 lg:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <form onSubmit={handleSubmit}>
                {/* Section 1: Stay Details */}
                <div className="mb-8 md:mb-10 lg:mb-12 max-w-2xl">
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1.5 md:mb-2">
                    1. Stay Details
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-5 lg:mb-6">
                    When are you planning to visit and how many guests?
                  </p>

                  <div className="rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6">
                    <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="arrival" className="text-xs md:text-sm">
                          Arrival Date *
                        </Label>
                        <Input
                          id="arrival"
                          name="arrival"
                          type="date"
                          required
                          className="text-xs md:text-sm h-8 md:h-9 lg:h-10"
                        />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="departure" className="text-xs md:text-sm">
                          Departure Date *
                        </Label>
                        <Input
                          id="departure"
                          name="departure"
                          type="date"
                          required
                          className="text-xs md:text-sm h-8 md:h-9 lg:h-10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 md:gap-4 sm:grid-cols-3 mt-3 md:mt-4">
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="adults" className="text-xs md:text-sm">
                          Adults *
                        </Label>
                        <Select name="adults" defaultValue="1">
                          <SelectTrigger id="adults" className="text-xs md:text-sm h-8 md:h-9 lg:h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                              <SelectItem key={n} value={n.toString()}>
                                {n}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="children" className="text-xs md:text-sm">
                          Children
                        </Label>
                        <Select name="children" defaultValue="0">
                          <SelectTrigger id="children" className="text-xs md:text-sm h-8 md:h-9 lg:h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4].map((n) => (
                              <SelectItem key={n} value={n.toString()}>
                                {n}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="rooms" className="text-xs md:text-sm">
                          Rooms Needed *
                        </Label>
                        <Select name="rooms" defaultValue="1">
                          <SelectTrigger id="rooms" className="text-xs md:text-sm h-8 md:h-9 lg:h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4].map((n) => (
                              <SelectItem key={n} value={n.toString()}>
                                {n}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Preferences */}
                <div className="mb-8 md:mb-10 lg:mb-12 max-w-2xl">
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1.5 md:mb-2">
                    2. Room Preferences
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-5 lg:mb-6">
                    Help us find the best room for your needs.
                  </p>

                  <div className="rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6">
                    <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="smoking" className="text-xs md:text-sm">
                          Smoking Preference *
                        </Label>
                        <Select name="smoking" required>
                          <SelectTrigger id="smoking" className="text-xs md:text-sm h-8 md:h-9 lg:h-10">
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="non-smoking">Non-smoking room</SelectItem>
                            <SelectItem value="smoking">Smoking room</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="pets" className="text-xs md:text-sm">
                          Traveling with Pets? *
                        </Label>
                        <Select name="pets" required>
                          <SelectTrigger id="pets" className="text-xs md:text-sm h-8 md:h-9 lg:h-10">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No pets</SelectItem>
                            <SelectItem value="yes">Yes, bringing pets</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-3 md:gap-4 sm:grid-cols-2 mt-3 md:mt-4">
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="kitchenette" className="text-xs md:text-sm">
                          Need a Kitchenette? *
                        </Label>
                        <Select name="kitchenette" required>
                          <SelectTrigger id="kitchenette" className="text-xs md:text-sm h-8 md:h-9 lg:h-10">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No, not needed</SelectItem>
                            <SelectItem value="yes">Yes, would like a kitchenette</SelectItem>
                            <SelectItem value="either">Either is fine</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact Information */}
                <div className="mb-8 md:mb-10 lg:mb-12 max-w-2xl">
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1.5 md:mb-2">
                    3. Your Information
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-5 lg:mb-6">
                    How can we reach you to confirm your reservation?
                  </p>

                  <div className="rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6">
                    <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="firstName" className="text-xs md:text-sm">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          placeholder="John"
                          className="text-xs md:text-sm h-8 md:h-9 lg:h-10"
                        />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="lastName" className="text-xs md:text-sm">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          placeholder="Smith"
                          className="text-xs md:text-sm h-8 md:h-9 lg:h-10"
                        />
                      </div>
                    </div>
                    <div className="grid gap-3 md:gap-4 sm:grid-cols-2 mt-3 md:mt-4">
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="phone" className="text-xs md:text-sm">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(403) 555-0123"
                          className="text-xs md:text-sm h-8 md:h-9 lg:h-10"
                        />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="email" className="text-xs md:text-sm">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="text-xs md:text-sm h-8 md:h-9 lg:h-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="max-w-2xl">
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 btn-interactive px-6 md:px-8 text-xs md:text-sm lg:text-base"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                  <p className="mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground">
                    No payment required online. We'll review your request and contact you within 24 hours with the best
                    available room options.
                  </p>
                </div>
              </form>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={detailRoom}
        isOpen={!!detailRoom}
        onClose={() => setDetailRoom(null)}
        onSelect={() => detailRoom && setSelectedRoom(detailRoom.id)}
        isSelected={detailRoom?.id === selectedRoom}
      />
    </div>
  )
}
