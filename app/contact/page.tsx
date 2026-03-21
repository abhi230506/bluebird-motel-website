import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollLink } from "@/components/scroll-link"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bluebird Motel in Innisfail, Alberta. Call (403) 227-3334, text (587) 700-0614, or email bluebirdmotelinnisfailab@gmail.com. Located at 4001 48 Ave, Innisfail, AB.",
  openGraph: {
    title: "Contact Us | Bluebird Motel Innisfail",
    description:
      "Contact Bluebird Motel in Innisfail, Alberta. Call (403) 227-3334 or email bluebirdmotelinnisfailab@gmail.com.",
    url: "https://bluebirdmotelinnisfail.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 md:px-6">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground">
              Contact Bluebird Motel in Innisfail
            </h1>
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Have questions about your stay or need to make a reservation? We're here to help. Reach us by phone, text,
              or email anytime. As a family-owned motel, we pride ourselves on personal service and quick responses.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-8 md:py-12 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl">
              {/* Phone - Primary CTA */}
              <div className="rounded-lg border-2 border-primary bg-primary/5 p-4 md:p-5 lg:p-6 mb-4 md:mb-5 lg:mb-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Call us</p>
                    <a
                      href="tel:+14032273334"
                      className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground hover:text-primary"
                    >
                      (403) 227-3334
                    </a>
                  </div>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground">
                  The fastest way to reach us. We're a 24/7 operation motel.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6 mb-5 md:mb-6 lg:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-9 w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                    <MessageSquare className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Text us</p>
                    <a
                      href="sms:+15877000614"
                      className="text-base md:text-lg lg:text-xl font-semibold text-foreground hover:text-primary"
                    >
                      (587) 700-0614
                    </a>
                  </div>
                </div>
                <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground">
                  Prefer texting? Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Mail className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h2 className="font-medium text-foreground text-xs md:text-sm lg:text-base">Email</h2>
                    <a
                      href="mailto:bluebirdmotelinnisfailab@gmail.com"
                      className="text-xs md:text-sm text-muted-foreground hover:text-primary break-all"
                    >
                      bluebirdmotelinnisfailab@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                    <MapPin className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h2 className="font-medium text-foreground text-xs md:text-sm lg:text-base">Address</h2>
                    <address className="text-xs md:text-sm text-muted-foreground not-italic">
                      Bluebird Motel
                      <br />
                      4001 48 Ave, Innisfail, AB T4G 1J6
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Clock className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h2 className="font-medium text-foreground text-xs md:text-sm lg:text-base">Check-in & Check-out Times</h2>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Check-in: 2:00 PM onwards<br />
                      Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="mt-8 md:mt-10 lg:mt-12 rounded-lg bg-muted p-4 md:p-5 lg:p-6">
                <h2 className="font-semibold text-foreground text-sm md:text-base">Ready to book?</h2>
                <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-muted-foreground">
                  Choose from multiple booking options — book online, call us, or send a reservation request.
                </p>
                <Button
                  asChild
                  size="sm"
                  className="mt-3 md:mt-4 bg-primary text-primary-foreground hover:bg-primary/90 btn-interactive text-xs md:text-sm"
                >
                  <ScrollLink href="/reserve">Reserve a Room</ScrollLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
