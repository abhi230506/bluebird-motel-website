import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import { ScrollLink } from "./scroll-link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 md:px-6">
        <ScrollLink href="/" className="flex items-center gap-2 lg:gap-3 link-interactive">
          <Image
            src="/images/bbm-20logo.png"
            alt="Bluebird Motel Logo"
            width={48}
            height={48}
            className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
          />
          <span className="text-xl lg:text-2xl font-semibold text-foreground">Bluebird Motel</span>
        </ScrollLink>

        <nav className="hidden items-center gap-6 lg:flex">
          <ScrollLink
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground link-interactive"
          >
            Home
          </ScrollLink>
          <ScrollLink
            href="/rooms"
            className="text-sm font-medium text-muted-foreground hover:text-foreground link-interactive"
          >
            Rooms
          </ScrollLink>
          <ScrollLink
            href="/amenities"
            className="text-sm font-medium text-muted-foreground hover:text-foreground link-interactive"
          >
            Amenities
          </ScrollLink>
          <ScrollLink
            href="/location"
            className="text-sm font-medium text-muted-foreground hover:text-foreground link-interactive"
          >
            Location
          </ScrollLink>
          <ScrollLink
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground link-interactive"
          >
            Contact
          </ScrollLink>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+14032273334"
            className="hidden items-center gap-2 text-sm font-medium text-foreground lg:flex link-interactive"
          >
            <Phone className="h-4 w-4" />
            (403) 227-3334
          </a>
          <Button
            asChild
            size="sm"
            className="hidden bg-primary text-primary-foreground hover:bg-primary/90 lg:inline-flex btn-interactive"
          >
            <ScrollLink href="/reserve">Reserve a Room</ScrollLink>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
