import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "e-Transfer payment",
  description: "Send payment to Bluebird Motel via Interac e-Transfer.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function EtransferLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
