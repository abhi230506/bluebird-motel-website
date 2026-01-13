import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://bluebirdmotelinnisfail.com"),
  title: {
    default: "Bluebird Motel Innisfail | Motel in Innisfail, Alberta",
    template: "%s | Bluebird Motel Innisfail",
  },
  description:
    "Family-owned motel in Innisfail, Alberta offering clean, affordable rooms with free parking and Wi-Fi. Daily, weekly, and monthly stays available. Located just off Highway 2 between Calgary and Red Deer.",
  keywords: [
    "Innisfail motel",
    "Alberta motel",
    "affordable motel Innisfail",
    "Highway 2 motel",
    "Innisfail accommodation",
    "pet friendly motel Alberta",
    "weekly rates motel",
    "monthly motel rental",
  ],
  authors: [{ name: "Bluebird Motel" }],
  creator: "Bluebird Motel",
  publisher: "Bluebird Motel",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bluebirdmotelinnisfail.com",
    siteName: "Bluebird Motel",
    title: "Bluebird Motel | Affordable Motel in Innisfail, Alberta",
    description:
      "Family-owned motel in Innisfail, Alberta offering clean, affordable rooms with free parking and Wi-Fi. Daily, weekly, and monthly stays available.",
    images: [
      {
        url: "/images/img-3971.jpeg",
        width: 1200,
        height: 630,
        alt: "Bluebird Motel exterior - Affordable accommodation in Innisfail, Alberta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluebird Motel | Affordable Motel in Innisfail, Alberta",
    description:
      "Family-owned motel offering clean, affordable rooms with free parking and Wi-Fi. Daily, weekly, and monthly stays available.",
    images: ["/images/img-3971.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bluebirdmotelinnisfail.com",
  },
  icons: {
    icon: [
      {
        url: "/images/bbm-20logo.png",
        type: "image/png",
      },
    ],
    apple: "/images/bbm-20logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#5B8FB9",
  width: "device-width",
  initialScale: 1,
}

function LocalBusinessJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Motel",
    name: "Bluebird Motel",
    description:
      "Family-owned motel in Innisfail, Alberta offering clean, affordable rooms with free parking and Wi-Fi. Daily, weekly, and monthly stays available.",
    url: "https://bluebirdmotelinnisfail.com",
    telephone: "+1-403-227-3334",
    email: "bluebirdmotelinnisfailab@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4001 48 Ave",
      addressLocality: "Innisfail",
      addressRegion: "AB",
      postalCode: "T4G 1J6",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.0258,
      longitude: -113.9562,
    },
    image: "/images/img-3971.jpeg",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cable TV", value: true },
    ],
    sameAs: [],
    hasMap: "https://maps.app.goo.gl/1ThNpYqyhgnWNbQYA",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
