import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AmenityCard } from "@/components/amenity-card"

export const metadata: Metadata = {
  title: "Motel Amenities",
  description:
    "Bluebird Motel amenities include free parking, free Wi-Fi, cable TV, air conditioning, pet-friendly rooms, and coin-operated laundry. Located in Innisfail, Alberta.",
  openGraph: {
    title: "Motel Amenities | Bluebird Motel Innisfail",
    description:
      "Bluebird Motel amenities include free parking, free Wi-Fi, cable TV, air conditioning, pet-friendly rooms, and coin-operated laundry.",
    url: "https://bluebirdmotelinnisfail.com/amenities",
  },
}

const amenities = [
  {
    icon: "Car",
    name: "Free Parking",
    description: "Ample free parking available right outside your room. No need to search for a spot.",
    image: "/motel-parking-lot-with-cars-parked-outside-rooms.jpg",
  },
  {
    icon: "Wifi",
    name: "Free Wi-Fi",
    description: "Complimentary wireless internet access throughout the property to stay connected.",
    image: "/person-using-laptop-in-motel-room-with-wifi-symbol.jpg",
  },
  {
    icon: "PawPrint",
    name: "Pet & Smoking Friendly",
    description: "We offer pet-friendly and smoking-friendly room options. Let us know your preference when booking.",
    image: "/pet-friendly-motel-room-with-dog.jpg",
  },
  {
    icon: "WashingMachine",
    name: "Coin Operated Laundry",
    description: "On-site coin-operated laundry facilities available for your convenience during your stay.",
    image: "/coin-operated-laundry-machines-in-motel.jpg",
  },
  {
    icon: "Tv",
    name: "Cable TV",
    description: "Flat-screen televisions with cable channels in every room for your entertainment.",
    image: "/flat-screen-tv-on-wall-in-motel-room.jpg",
  },
  {
    icon: "Calendar",
    name: "Long-Stay Options",
    description: "Weekly and monthly rates available for extended stays. Ask about our long-term pricing.",
    image: "/comfortable-motel-room-for-extended-stay.jpg",
  },
  {
    icon: "Snowflake",
    name: "Climate Control",
    description: "Individual air conditioning and heating controls in each room for your comfort.",
    image: "/wall-mounted-air-conditioner-thermostat-in-room.jpg",
  },
  {
    icon: "Shield",
    name: "Housekeeping",
    description: "Regular cleaning service to keep your room fresh and comfortable during your stay.",
    image: "/housekeeping-making-bed-with-fresh-linens.jpg",
  },
]

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 md:px-6">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground">
              Motel Amenities in Innisfail
            </h1>
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              At Bluebird Motel, we provide everything you need for a comfortable stay. Our amenities are designed with
              travelers in mind — simple and practical. From free parking and Wi-Fi to pet-friendly rooms and on-site
              laundry, we&apos;ve got you covered.
            </p>
          </div>
        </section>

        {/* Amenities Grid */}
        <section className="py-8 md:py-12 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:gap-8 xl:grid-cols-4">
              {amenities.map((amenity) => (
                <AmenityCard key={amenity.name} amenity={amenity} />
              ))}
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="border-t border-border bg-primary/5">
          <div className="container mx-auto px-6 py-12 md:py-10 lg:py-12 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold text-foreground">
                Have questions about our amenities?
              </h2>
              <p className="mt-3 md:mt-3 lg:mt-4 text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                We're happy to answer any questions you might have about what's included with your room. Give us a call
                and we'll help you plan your stay.
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
