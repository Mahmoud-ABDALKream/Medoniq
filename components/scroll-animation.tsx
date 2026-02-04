"use client"

import { motion, useAnimation, useInView, useReducedMotion, type Variants } from "framer-motion"
import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  variants?: Variants
}

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const controls = useAnimation()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
