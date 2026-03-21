import type { Metadata } from "next"
import Image from "next/image"
import { Car, Wifi, Volume2, PawPrint, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollLink } from "@/components/scroll-link"

export const metadata: Metadata = {
  title: "Bluebird Motel | Affordable Motel in Innisfail, Alberta",
  description:
    "Family-owned motel in Innisfail, Alberta offering clean, affordable rooms with free parking and Wi-Fi. Daily, weekly, and monthly stays available. Located just off Highway 2 between Calgary and Red Deer. Call (403) 227-3334 to book.",
  openGraph: {
    title: "Bluebird Motel | Affordable Motel in Innisfail, Alberta",
    description:
      "Family-owned motel in Innisfail, Alberta offering clean, affordable rooms with free parking and Wi-Fi. Daily, weekly, and monthly stays available.",
    url: "https://bluebirdmotelinnisfail.com",
  },
}

const trustHighlights = [
  { icon: Car, label: "Free Parking", description: "Ample parking right outside your door" },
  { icon: Wifi, label: "Free Wi-Fi", description: "Stay connected throughout your stay" },
  { icon: Volume2, label: "Quiet Location", description: "Peaceful nights, restful sleep" },
  { icon: PawPrint, label: "Pet & Smoking Friendly", description: "Select rooms available upon request" },
]

const roomPreviews = [
  {
    name: "Queen Room",
    description: "Comfortable room with one queen bed, perfect for solo travelers or couples.",
    image: "/rooms/queen-room-1.jpg",
  },
  {
    name: "Double Queen Room",
    description: "Spacious room with two queen beds, ideal for families or groups.",
    image: "/rooms/double-queen-room-1.jpg",
  },
  {
    name: "Double Room",
    description: "Cozy and affordable room with a double bed for single travelers.",
    image: "/rooms/double-room-1.jpg",
  },
  {
    name: "Double Queen Room with Kitchenette",
    description: "Our largest room with 2 queen beds and full kitchenette.",
    image: "/rooms/double-queen-kitchenette-1.jpg",
  },
  {
    name: "Queen Room with Kitchenette",
    description: "Extended stay option with queen bed and kitchenette.",
    image: "/rooms/queen-kitchenette-1.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:min-h-[75vh] lg:min-h-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/img-3974-202.jpeg"
              alt="Bluebird Motel exterior - affordable motel accommodation in Innisfail, Alberta"
              fill
              className="object-cover object-center brightness-[0.85] md:hidden"
              priority
            />
            <Image
              src="/images/img-0080.jpeg"
              alt="Bluebird Motel front entrance with free parking in Innisfail, Alberta"
              fill
              className="object-cover object-center brightness-[0.85] hidden md:block lg:hidden"
              priority
            />
            <Image
              src="/images/img-3971.jpeg"
              alt="Bluebird Motel - family-owned motel on Highway 2 near Calgary and Red Deer"
              fill
              className="object-cover object-center brightness-[0.85] hidden lg:block"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 lg:py-32 md:px-6 flex items-end md:items-center min-h-[85vh] md:min-h-[75vh] lg:min-h-0">
            <div className="max-w-2xl bg-background/95 backdrop-blur p-5 md:p-6 lg:p-8 rounded-lg">
              <h1 className="text-xl md:text-2xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
                Affordable Motel Rooms in Innisfail, Alberta
              </h1>
              <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed font-light">
                Daily, weekly, and monthly stays/rentals available at our family-owned motel just off Highway 2.
              </p>
              <div className="mt-2 md:mt-3 lg:mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 text-xs font-medium text-primary">
                No online payment required
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4 sm:flex-row">
                <Button
                  asChild
                  size="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm lg:text-base"
                >
                  <ScrollLink href="/reserve">
                    Reserve a Room
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </ScrollLink>
                </Button>
                <Button asChild variant="outline" size="default" className="text-sm lg:text-base bg-transparent">
                  <ScrollLink href="/rooms">
                    View Our Rooms
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </ScrollLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 lg:py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                Welcome to Bluebird Motel
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Family-owned and operated for over 40 years, conveniently located just off Highway 2 between Calgary and
                Red Deer. Daily, weekly, and monthly stays available.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Highlights */}
        <section className="border-y border-border bg-muted/30">
          <div className="container mx-auto px-4 py-8 md:py-8 lg:py-12 md:px-6">
            <div className="grid gap-6 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {trustHighlights.map((item) => (
                <div key={item.label} className="flex items-start gap-2.5 md:gap-3 lg:gap-4">
                  <div className="flex h-8 w-8 md:h-9 md:w-9 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    {item.icon && <item.icon className="h-4 w-4 md:h-4 md:w-4 lg:h-6 lg:w-6 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-xs md:text-sm lg:text-base">{item.label}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms Preview */}
        <section className="py-8 md:py-10 lg:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-foreground">Our Rooms</h2>
              <p className="mt-1.5 md:mt-2 lg:mt-3 text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
                Simple and comfortable. Everything you need for a good night&apos;s rest.
              </p>
            </div>

            <div className="flex flex-col gap-2 md:hidden">
              {roomPreviews.map((room) => (
                <div key={room.name} className="group rounded-lg border border-border bg-card overflow-hidden">
                  <div className="flex h-20">
                    <div className="w-2/5 relative overflow-hidden">
                      <Image
                        src={room.image || "/placeholder.svg"}
                        alt={`${room.name} at Bluebird Motel Innisfail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-3/5 px-3 flex items-center">
                      <h3 className="font-medium text-foreground text-sm leading-snug">{room.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:flex flex-col gap-5 lg:gap-8">
              <div className="grid md:grid-cols-3 gap-5 lg:gap-8">
                {roomPreviews.slice(0, 3).map((room) => (
                  <div key={room.name} className="group rounded-lg border border-border bg-card overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={room.image || "/placeholder.svg"}
                        alt={`${room.name} at Bluebird Motel Innisfail - ${room.description}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 lg:p-6">
                      <h3 className="font-semibold text-foreground text-base lg:text-lg">{room.name}</h3>
                      <p className="mt-2 text-xs lg:text-sm text-muted-foreground leading-relaxed">
                        {room.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-center gap-5 lg:gap-8">
                {roomPreviews.slice(3, 5).map((room) => (
                  <div
                    key={room.name}
                    className="group rounded-lg border border-border bg-card overflow-hidden w-[calc(33.333%-16px)]"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={room.image || "/placeholder.svg"}
                        alt={`${room.name} at Bluebird Motel Innisfail - ${room.description}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 lg:p-6">
                      <h3 className="font-semibold text-foreground text-base lg:text-lg">{room.name}</h3>
                      <p className="mt-2 text-xs lg:text-sm text-muted-foreground leading-relaxed">
                        {room.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-12 text-center">
              <Button asChild variant="outline" size="default" className="text-sm lg:text-base bg-transparent">
                <ScrollLink href="/rooms">
                  View All Room Details
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </ScrollLink>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 border-y border-border">
          <div className="container mx-auto px-6 py-12 md:py-10 lg:py-16 md:px-6 text-center">
            <h2 className="text-xl md:text-xl lg:text-3xl font-semibold text-foreground">Ready to book your stay?</h2>
            <p className="mt-3 md:mt-3 lg:mt-4 text-sm md:text-sm lg:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Choose from multiple booking options — book online, call us directly, or send a reservation request.
            </p>
            <div className="mt-6 md:mt-6 lg:mt-8 flex flex-col gap-3 md:gap-3 lg:gap-4 sm:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm lg:text-base"
              >
                <ScrollLink href="/reserve">
                  Reserve a Room
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </ScrollLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm lg:text-base bg-transparent">
                <ScrollLink href="/contact">Contact Us</ScrollLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
