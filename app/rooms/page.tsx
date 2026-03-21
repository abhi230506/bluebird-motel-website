import type { Metadata } from "next"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollLink } from "@/components/scroll-link"
import { RoomGallery } from "@/components/room-gallery"

export const metadata: Metadata = {
  title: "Motel Rooms & Rates",
  description:
    "View our clean, comfortable motel rooms in Innisfail, Alberta. Queen rooms, double rooms, and kitchenette suites available for daily, weekly, or monthly stays. Free parking and Wi-Fi included.",
  openGraph: {
    title: "Motel Rooms & Rates | Bluebird Motel Innisfail",
    description:
      "View our clean, comfortable motel rooms in Innisfail, Alberta. Queen rooms, double rooms, and kitchenette suites available.",
    url: "https://bluebirdmotelinnisfail.com/rooms",
  },
}

const rooms = [
  {
    name: "Queen Room",
    description: "A comfortable room perfect for solo travelers or couples looking for an affordable stay.",
    images: ["/rooms/queen-room-1.jpg", "/rooms/queen-room-2.jpg"],
    sleeps: 2,
    features: [
      "1 Queen Bed",
      "Sleeps 2",
      "Free self parking",
      "Free Wi-Fi",
      "Flat-screen TV with cable",
      "Air conditioning and heating",
      "Private bathroom with shower",
    ],
  },
  {
    name: "Double Queen Room",
    description:
      "Spacious room with two queen beds, ideal for families or friends traveling together. Plenty of space to relax.",
    images: ["/rooms/double-queen-room-1.jpg", "/rooms/double-queen-room-2.jpg"],
    sleeps: 4,
    features: [
      "2 Queen Beds",
      "Sleeps 4",
      "Free self parking",
      "Free Wi-Fi",
      "Flat-screen TV with cable",
      "Air conditioning and heating",
      "Private bathroom with shower",
    ],
  },
  {
    name: "Double Room",
    description: "Cozy and affordable room with a double bed, perfect for single travelers or couples on a budget.",
    images: ["/rooms/double-room-1.jpg", "/rooms/double-room-2.jpg", "/rooms/double-room-3.jpg"],
    sleeps: 1,
    features: [
      "1 Double Bed",
      "Sleeps 1",
      "Free self parking",
      "Free Wi-Fi",
      "Flat-screen TV with cable",
      "Air conditioning and heating",
      "Private bathroom with shower",
    ],
  },
  {
    name: "Double Queen Room with Kitchenette",
    description:
      "Our largest room with a full kitchenette, perfect for extended stays or families who want to prepare their own meals.",
    images: ["/rooms/double-queen-kitchenette-1.jpg", "/rooms/double-queen-kitchenette-2.jpg"],
    sleeps: 4,
    features: [
      "2 Queen Beds",
      "Sleeps 4",
      "Full kitchenette",
      "Mini-fridge",
      "Microwave",
      "Free self parking",
      "Free Wi-Fi",
      "Flat-screen TV with cable",
    ],
  },
  {
    name: "Queen Room with Kitchenette",
    description:
      "Ideal for extended stays. Features a queen bed and a convenient kitchenette for light cooking and meal prep.",
    images: ["/rooms/queen-kitchenette-1.jpg", "/rooms/queen-kitchenette-2.jpg", "/rooms/queen-kitchenette-3.jpg"],
    sleeps: 2,
    features: [
      "1 Queen Bed",
      "Sleeps 2",
      "Kitchenette",
      "Mini-fridge",
      "Microwave",
      "Free self parking",
      "Free Wi-Fi",
      "Flat-screen TV with cable",
    ],
  },
]

export default function RoomsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 md:px-6">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground">
              Motel Rooms in Innisfail, Alberta
            </h1>
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Comfortable and affordable accommodation for every traveler. Each room at Bluebird Motel is equipped with
              everything you need for a restful stay, whether you&apos;re here for one night or an extended visit.
            </p>
          </div>
        </section>

        {/* Room Listings */}
        <section className="py-8 md:py-12 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8 md:space-y-12 lg:space-y-20">
              {rooms.map((room, index) => (
                <div
                  key={room.name}
                  className={`grid gap-4 md:gap-6 lg:gap-8 items-center md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <RoomGallery images={room.images} roomName={room.name} />
                  </div>

                  <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <h2 className="text-base md:text-lg lg:text-2xl font-semibold text-foreground">{room.name}</h2>
                    <p className="mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {room.description}
                    </p>

                    <ul className="mt-3 md:mt-4 lg:mt-6 space-y-1.5 md:space-y-2 lg:space-y-3">
                      {room.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-foreground"
                        >
                          <Check className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 md:mt-6 lg:mt-8">
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm lg:text-base lg:px-4 lg:py-2"
                      >
                        <ScrollLink href="/reserve">
                          Book Your Stay
                          <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                        </ScrollLink>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary/5">
          <div className="container mx-auto px-6 py-12 md:py-10 lg:py-12 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold text-foreground">
                Questions about our rooms?
              </h2>
              <p className="mt-3 md:mt-3 lg:mt-4 text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                We&apos;re happy to help you find the right room for your needs. Give us a call and we&apos;ll assist
                you with your booking.
              </p>
              <p className="mt-4 md:mt-4 text-base md:text-base lg:text-lg font-medium text-primary">
                <a href="tel:+14032273334" className="hover:underline link-interactive">
                  (403) 227-3334
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
