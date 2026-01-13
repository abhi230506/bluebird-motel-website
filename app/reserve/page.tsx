import type { Metadata } from "next"
import Image from "next/image"
import { Phone, ExternalLink, MessageSquare, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollLink } from "@/components/scroll-link"

export const metadata: Metadata = {
  title: "Reserve a Room",
  description:
    "Book a room at Bluebird Motel in Innisfail, Alberta. Reserve online through Expedia or Hotels.com, or call (403) 227-3334 directly. No online payment required when booking direct.",
  openGraph: {
    title: "Reserve a Room | Bluebird Motel Innisfail",
    description: "Book a room at Bluebird Motel in Innisfail, Alberta. Reserve online or call (403) 227-3334 directly.",
    url: "https://bluebirdmotelinnisfail.com/reserve",
  },
}

export default function ReservePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-6 md:py-10 lg:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-5 md:mb-8 lg:mb-12">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground">
                Reserve a Room at Bluebird Motel
              </h1>
              <p className="mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
                Choose how you'd like to book your stay at our Innisfail motel. All options are simple and
                straightforward — book online through your preferred travel site or call us directly for personalized
                service.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-3 md:gap-4 lg:gap-6">
              {/* Option 1: Online Booking Sites */}
              <div className="rounded-lg border border-border bg-card p-4 md:p-5 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2.5 md:px-3 py-1 text-xs font-medium text-muted-foreground mb-2 lg:mb-3 w-fit">
                      Option 1
                    </div>
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                      Book on a Travel Site
                    </h2>
                    <p className="mt-1.5 md:mt-2 text-xs md:text-sm lg:text-base text-muted-foreground">
                      Reserve through your preferred online travel platform. View availability and book instantly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:flex-col lg:justify-center lg:items-end">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="btn-interactive justify-start sm:justify-center bg-transparent text-xs md:text-sm lg:text-base lg:px-4 lg:py-2 lg:h-10"
                    >
                      <a href="https://expe.app.link/z1swad3uvZb" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/expedia-logo.png"
                          alt="Book Bluebird Motel on Expedia"
                          width={20}
                          height={20}
                          className="mr-2 rounded"
                        />
                        Expedia
                        <ExternalLink className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 text-muted-foreground" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="btn-interactive justify-start sm:justify-center bg-transparent text-xs md:text-sm lg:text-base lg:px-4 lg:py-2 lg:h-10"
                    >
                      <a href="https://hotels.app.link/YFx2tQ6uvZb" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/hotels-com-logo.png"
                          alt="Book Bluebird Motel on Hotels.com"
                          width={20}
                          height={20}
                          className="mr-2 rounded-full"
                        />
                        Hotels.com
                        <ExternalLink className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 text-muted-foreground" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Option 2: Call to Reserve */}
              <div className="rounded-lg border border-border bg-card p-4 md:p-5 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2.5 md:px-3 py-1 text-xs font-medium text-muted-foreground mb-2 lg:mb-3 w-fit">
                      Option 2
                    </div>
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                      Call or Text Us Directly
                    </h2>
                    <p className="mt-1.5 md:mt-2 text-xs md:text-sm lg:text-base text-muted-foreground">
                      Speak with us directly to reserve your room or send us a text message. We're happy to answer any
                      questions and confirm your booking.
                    </p>
                    <p className="mt-2 md:mt-3 lg:mt-4 text-xs text-muted-foreground">24/7 operation motel</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:flex-col lg:justify-center lg:items-end">
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 btn-interactive shrink-0 text-xs md:text-sm lg:text-base lg:px-4 lg:py-2 lg:h-10"
                    >
                      <a href="tel:+14032273334">
                        <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                        (403) 227-3334
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="btn-interactive shrink-0 text-xs md:text-sm lg:text-base lg:px-4 lg:py-2 lg:h-10 bg-transparent"
                    >
                      <a href="sms:+15877000614">
                        <MessageSquare className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                        (587) 700-0614
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Option 3: Email to Reserve */}
              <div className="rounded-lg border border-border bg-card p-4 md:p-5 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2.5 md:px-3 py-1 text-xs font-medium text-muted-foreground mb-2 lg:mb-3 w-fit">
                      Option 3
                    </div>
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                      Email Us Directly
                    </h2>
                    <p className="mt-1.5 md:mt-2 text-xs md:text-sm lg:text-base text-muted-foreground">
                      Out of town or can't call or text easily?
                      <br />
                      Send us an email with your reservation details and we'll respond promptly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:flex-col lg:justify-center lg:items-center">
                    <div className="flex flex-row items-center gap-2 lg:flex-col lg:items-center">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="btn-interactive shrink-0 text-xs md:text-sm lg:text-base lg:px-4 lg:py-2 lg:h-10 bg-transparent"
                      >
                        <a href="mailto:bluebirdmotelinnisfailab@gmail.com">
                          <Mail className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                          Email Us
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground/70 lg:mt-1.5 lg:text-center whitespace-nowrap">
                        bluebirdmotelinnisfailab@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="max-w-2xl mx-auto mt-5 md:mt-8 lg:mt-12 text-center">
              <p className="text-xs md:text-sm text-muted-foreground">
                Have questions before booking?{" "}
                <ScrollLink href="/contact" className="text-primary hover:underline link-interactive">
                  Contact us
                </ScrollLink>{" "}
                or view our{" "}
                <ScrollLink href="/rooms" className="text-primary hover:underline link-interactive">
                  room details
                </ScrollLink>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
