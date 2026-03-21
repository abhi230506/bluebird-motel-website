"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RoomGalleryProps {
  images: string[]
  roomName: string
}

const TRANSITION_DURATION = 500 // milliseconds

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [displayIndex, setDisplayIndex] = useState(1) // Start at 1 because of duplicate at start
  const [isTransitioning, setIsTransitioning] = useState(true)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Create extended array with duplicates for seamless wrap-around
  // [last, ...images, first]
  const extendedImages = [
    images[images.length - 1], // Duplicate last image at start
    ...images,
    images[0], // Duplicate first image at end
  ]

  // Map displayIndex to actual currentIndex for UI (dots, counter)
  const currentIndex = displayIndex === 0 
    ? images.length - 1 
    : displayIndex === extendedImages.length - 1 
    ? 0 
    : displayIndex - 1

  const goToPrevious = () => {
    setDisplayIndex((prev) => {
      if (prev === 1) {
        // Wrapping from first to last - animate to duplicate at start (index 0)
        setIsTransitioning(true)
        // After animation completes, instantly snap to real last image
        setTimeout(() => {
          setIsTransitioning(false)
          setDisplayIndex(images.length) // Real last image (offset by 1)
          setTimeout(() => setIsTransitioning(true), 50)
        }, TRANSITION_DURATION)
        return 0 // Duplicate last image
      }
      return prev - 1
    })
  }

  const goToNext = () => {
    setDisplayIndex((prev) => {
      if (prev === images.length) {
        // Wrapping from last to first - animate to duplicate at end
        setIsTransitioning(true)
        // After animation completes, instantly snap to real first image
        setTimeout(() => {
          setIsTransitioning(false)
          setDisplayIndex(1) // Real first image
          setTimeout(() => setIsTransitioning(true), 50)
        }, TRANSITION_DURATION)
        return extendedImages.length - 1 // Duplicate first image
      }
      return prev + 1
    })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return

    const swipeDistance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50 // Minimum distance to trigger swipe

    if (swipeDistance > minSwipeDistance) {
      // Swiped left - go to next
      goToNext()
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped right - go to previous
      goToPrevious()
    }

    // Reset values
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div
      className="aspect-[3/2] relative rounded-lg overflow-hidden border border-border group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${displayIndex * 100}%)`,
          transition: isTransitioning ? `transform ${TRANSITION_DURATION}ms ease-out` : "none",
        }}
      >
        {extendedImages.map((image, index) => {
          // Calculate the actual photo number for alt text
          const photoNumber = index === 0 
            ? images.length 
            : index === extendedImages.length - 1 
            ? 1 
            : index
          return (
            <div key={index} className="min-w-full h-full relative flex-shrink-0">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${roomName} - Photo ${photoNumber}`}
                fill
                className="object-cover"
              />
            </div>
          )
        })}
      </div>

      {/* Navigation arrows - only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true)
                  setDisplayIndex(index + 1) // Offset by 1 because of duplicate at start
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-background" : "bg-background/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="absolute top-3 right-3 bg-background/80 text-foreground text-xs px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
