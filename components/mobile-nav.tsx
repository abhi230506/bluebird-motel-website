"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

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

  const handleNavClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 btn-interactive gap-1.5 md:gap-2 px-2.5 md:px-3 h-8 md:h-9"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <>
            <X className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">Close</span>
          </>
        ) : (
          <>
            <Menu className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">Menu</span>
          </>
        )}
      </Button>

      <div
        className={`fixed inset-0 top-16 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed left-0 right-0 top-16 z-50 bg-background border-b border-border shadow-lg transition-all duration-250 ease-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4 md:p-6 gap-0.5 md:gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/rooms", label: "Rooms" },
            { href: "/amenities", label: "Amenities" },
            { href: "/location", label: "Location" },
            { href: "/contact", label: "Contact" },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm md:text-base lg:text-lg font-medium text-foreground py-2.5 md:py-3 px-2 rounded-md hover:bg-muted transition-all duration-150 ease-out ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/reserve"
            className={`mt-3 md:mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 md:py-3 px-4 rounded-md font-medium btn-interactive text-sm md:text-base ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
            style={{
              transitionDelay: isOpen ? "250ms" : "0ms",
            }}
            onClick={handleNavClick}
          >
            Reserve a Room
          </Link>
        </nav>
      </div>
    </div>
  )
}
