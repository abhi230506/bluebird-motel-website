import { Phone, MapPin, Mail, MessageSquare } from "lucide-react"
import { ScrollLink } from "./scroll-link"
import { SecretEtransferAccess } from "./secret-etransfer-access"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-6 md:py-10 lg:py-12 md:px-6">
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Image
                src="/images/bbm-20logo.png"
                alt="Bluebird Motel Logo"
                width={28}
                height={28}
                className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 object-contain"
              />
              <span className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Bluebird Motel</span>
            </div>
            {/* Hide description paragraph on mobile */}
            <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
              Comfortable and affordable motel rooms in Innisfail, Alberta. Family-owned and proudly serving guests for
              over 40 years. Daily, weekly, and monthly stays available.
            </p>
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold text-foreground mb-4 text-base">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <ScrollLink href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </ScrollLink>
              <ScrollLink href="/rooms" className="text-sm text-muted-foreground hover:text-foreground">
                Rooms
              </ScrollLink>
              <ScrollLink href="/amenities" className="text-sm text-muted-foreground hover:text-foreground">
                Amenities
              </ScrollLink>
              <ScrollLink href="/location" className="text-sm text-muted-foreground hover:text-foreground">
                Location
              </ScrollLink>
              <ScrollLink href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </ScrollLink>
            </nav>
          </div>

          <div>
            <h3 className="hidden md:block font-semibold text-foreground mb-4 text-base">Contact Us</h3>

            {/* Mobile: Simple compact layout */}
            <div className="flex flex-wrap gap-3 md:hidden">
              <a
                href="tel:+14032273334"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span>(403) 227-3334</span>
              </a>
              <a
                href="sms:+15877000614"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <MessageSquare className="h-3.5 w-3.5 shrink-0" />
                <span>(587) 700-0614</span>
              </a>
              <address className="flex items-center gap-1.5 text-xs text-muted-foreground not-italic">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>Innisfail, AB</span>
              </address>
            </div>

            {/* Desktop: Full contact details */}
            <div className="hidden md:flex flex-col gap-3">
              <a
                href="tel:+14032273334"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>Call: (403) 227-3334</span>
              </a>
              <a
                href="sms:+15877000614"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>Text: (587) 700-0614</span>
              </a>
              <a
                href="mailto:bluebirdmotelinnisfailab@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">bluebirdmotelinnisfailab@gmail.com</span>
              </a>
              <address className="flex items-start gap-2 text-sm text-muted-foreground not-italic">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Bluebird Motel
                  <br />
                  4001 48 Ave
                  <br />
                  Innisfail, AB T4G 1J6
                </span>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-8 border-t border-border pt-4 md:pt-8 text-center">
          <p className="text-xs text-muted-foreground inline-flex items-center justify-center flex-wrap gap-x-0">
            <span>
              © {new Date().getFullYear()} Bluebird Motel
            </span>
            <SecretEtransferAccess />
          </p>
        </div>
      </div>
    </footer>
  )
}
