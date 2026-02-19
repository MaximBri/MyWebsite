import { useEffect, useLayoutEffect, useRef } from 'react'

type Direction = 'top' | 'bottom' | 'left' | 'right'

// rootMargin: top inset keeps element visible a bit past top edge,
// bottom inset prevents triggering at the very edge (no feedback loop from y-transform)
const MARGIN = '-50px 0px -150px 0px'

export function useFadeIn(direction: Direction) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const el = ref.current
    if (!el) return
    el.classList.add(`fade-${direction}`)
  }, [direction])

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-visible')
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: MARGIN }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
