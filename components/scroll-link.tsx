"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ComponentProps } from "react"

type ScrollLinkProps = ComponentProps<typeof Link>

export function ScrollLink({ href, onClick, children, ...props }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Scroll to top instantly
    window.scrollTo({ top: 0, behavior: "instant" })

    // Navigate to the page
    router.push(href.toString())

    // Call original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
