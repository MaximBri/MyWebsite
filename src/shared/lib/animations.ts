import { useEffect, useRef, useState } from 'react'
import type { Transition } from 'framer-motion'

const transition: Transition = { duration: 0.6, ease: 'easeOut' }

const animate = {
  top: { visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: -50 } },
  bottom: { visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } },
  left: { visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -50 } },
  right: { visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: 50 } },
} as const

type Direction = keyof typeof animate

// rootMargin: top inset keeps element visible a bit past top edge,
// bottom inset prevents triggering at the very edge (no feedback loop from y-transform)
const ROOT_MARGIN = '-50px 0px -150px 0px'

export function useFadeIn<T extends HTMLElement = HTMLElement>(direction: Direction) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: ROOT_MARGIN }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return {
    ref,
    initial: animate[direction].hidden,
    animate: isInView ? animate[direction].visible : animate[direction].hidden,
    transition,
  }
}
