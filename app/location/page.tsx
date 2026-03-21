import type { Metadata } from "next"
import { MapPin, Car, Clock, Coffee } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NearbyPlaceCard } from "@/components/nearby-place-card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Location & Directions",
  description:
    "Find Bluebird Motel at 4001 48 Ave, Innisfail, Alberta. Located just off Highway 2, 1 hour from Calgary and 20 minutes from Red Deer. Easy access, free parking, nearby restaurants and attractions.",
  openGraph: {
    title: "Location & Directions | Bluebird Motel Innisfail",
    description:
      "Find Bluebird Motel at 4001 48 Ave, Innisfail, Alberta. Located just off Highway 2, 1 hour from Calgary and 20 minutes from Red Deer.",
    url: "https://bluebirdmotelinnisfail.com/location",
  },
}

const nearbyPlaces = [
  {
    name: "Tim Hortons",
    category: "Coffee & Food",
    distance: "3 min drive",
    description:
      "Canada's favorite coffee shop, open early for breakfast sandwiches, donuts, and hot coffee to start your day.",
    image: "/nearby/tim-hortons.jpg",
    mapsUrl: "https://maps.app.goo.gl/JCSqLGLMFiJrr8Qp7",
  },
  {
    name: "A&W",
    category: "Restaurant",
    distance: "4 min drive",
    description:
      "Classic Canadian fast food with delicious burgers, onion rings, and root beer. Great for a quick meal.",
    image: "/nearby/aw-restaurant.jpg",
    mapsUrl: "https://maps.app.goo.gl/h5oBQYXEZeiVLxGx6",
  },
  {
    name: "Co-op Gas Station",
    category: "Gas & Convenience",
    distance: "2 min drive",
    description: "Full-service gas station with a convenience store for snacks, drinks, and travel essentials.",
    image: "/nearby/coop-gas-station.jpg",
    mapsUrl: "https://maps.app.goo.gl/AQUxmFwDiSAQvZsV7",
  },
  {
    name: "No Frills",
    category: "Grocery Store",
    distance: "4 min drive",
    description: "Affordable grocery store for stocking up on food, snacks, and essentials during your stay.",
    image: "/nearby/no-frills.jpg",
    mapsUrl: "https://maps.app.goo.gl/T3uqP2NAyXAxAYM86",
  },
  {
    name: "Highway 2 Access",
    category: "Highway",
    distance: "2 min drive",
    description:
      "Quick access to Highway 2, making it easy to reach Calgary (1 hour south) or Red Deer (20 min north).",
    image: "/nearby/highway-2.jpg",
    mapsUrl: "https://maps.app.goo.gl/aLn2poAX3eozXn9a9",
  },
  {
    name: "Discovery Wildlife Park",
    category: "Attraction",
    distance: "4 min drive",
    description:
      "Family-friendly wildlife park with bears, wolves, and other animals. Great for kids and nature lovers.",
    image: "/nearby/discovery-wildlife-park.jpg",
    mapsUrl: "https://maps.app.goo.gl/N96DCRbnsDwn3YdX8",
  },
]

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 md:px-6">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground">
              Motel Location in Innisfail, Alberta
            </h1>
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Bluebird Motel is conveniently located at 4001 48 Ave in Innisfail, just off Highway 2. We're perfectly
              positioned between Calgary (approximately 1 hour south) and Red Deer (approximately 20 minutes north),
              making us an ideal stopover for travelers or a convenient base for exploring Central Alberta.
            </p>
          </div>
        </section>

        {/* Map and Address */}
        <section className="py-8 md:py-12 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-2">
              {/* Map */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.8!2d-113.9562!3d52.0258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5374a4c8f1a3b8d1%3A0x1234567890abcdef!2s4001%2048%20Ave%2C%20Innisfail%2C%20AB%20T4G%201J6%2C%20Canada!5e0!3m2!1sen!2sca!4v1704000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bluebird Motel Location - 4001 48 Ave, Innisfail, AB"
                ></iframe>
              </div>

              {/* Address and Info */}
              <div>
                <div className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6 lg:mb-8">
                  <div className="flex h-9 w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground text-sm md:text-base lg:text-lg">Our Address</h2>
                    <address className="mt-1 text-xs md:text-sm lg:text-base text-muted-foreground not-italic">
                      Bluebird Motel
                      <br />
                      4001 48 Ave
                      <br />
                      Innisfail, AB T4G 1J6
                      <br />
                      Canada
                    </address>
                    <a
                      href="https://maps.app.goo.gl/1ThNpYqyhgnWNbQYA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 md:mt-3 text-primary hover:underline text-xs md:text-sm font-medium"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-5 lg:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Car className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-xs md:text-sm lg:text-base">
                        Easy Highway Access
                      </h3>
                      <p className="hidden md:block text-xs md:text-xs lg:text-sm text-muted-foreground">
                        Located just off Highway 2 with ample free parking available on-site. Easy access for travelers
                        heading to Calgary, Red Deer, or Edmonton.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Clock className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-xs md:text-sm lg:text-base">Check-in & Check-out Times</h3>
                      <p className="text-xs md:text-xs lg:text-sm text-muted-foreground">
                        Check-in: 2:00 PM onwards<br />
                        Check-out: 11:00 AM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Coffee className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-xs md:text-sm lg:text-base">
                        Nearby Conveniences
                      </h3>
                      <p className="hidden md:block text-xs md:text-xs lg:text-sm text-muted-foreground">
                        Restaurants, gas stations, and grocery stores within a short drive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motel image */}
        <section className="py-8 md:py-10 lg:py-16 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative w-full rounded-lg overflow-hidden bg-muted/30">
              <Image
                src="/images/image-201.jpg"
                alt="Bluebird Motel exterior view showing motel building and parking lot in Innisfail, Alberta"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="mt-3 md:mt-4 text-center text-xs md:text-sm text-muted-foreground">
              Bluebird Motel — Your home away from home in Innisfail, Alberta
            </p>
          </div>
        </section>

        {/* What's Nearby */}
        <section className="border-t border-border bg-muted/20 py-8 md:py-12 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-foreground">What's Nearby</h2>
              <p className="hidden md:block mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm lg:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Convenient access to restaurants, shops, and attractions in Innisfail. Everything you need is just
                minutes away from the motel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:gap-6 xl:grid-cols-3">
              {nearbyPlaces.map((place) => (
                <NearbyPlaceCard key={place.name} place={place} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
