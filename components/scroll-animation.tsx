"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale" | "rotate" | "bounce"
  duration?: number
  stagger?: boolean
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
  stagger = false,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")

              if (stagger) {
                const children = entry.target.querySelectorAll(".stagger-child")
                children.forEach((child, index) => {
                  setTimeout(() => {
                    child.classList.add("animate-in")
                  }, index * 100)
                })
              }
            }, delay)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, stagger])

  const getAnimationClass = () => {
    const baseClass = `animate-duration-${duration}`
    switch (direction) {
      case "up":
        return `animate-slide-up ${baseClass}`
      case "down":
        return `animate-slide-down ${baseClass}`
      case "left":
        return `animate-slide-left ${baseClass}`
      case "right":
        return `animate-slide-right ${baseClass}`
      case "fade":
        return `animate-fade-in ${baseClass}`
      case "scale":
        return `animate-scale-in ${baseClass}`
      case "rotate":
        return `animate-rotate-in ${baseClass}`
      case "bounce":
        return `animate-bounce-in ${baseClass}`
      default:
        return `animate-slide-up ${baseClass}`
    }
  }

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
