import { useEffect, useRef } from 'react'

export function useInViewAnimation<T extends HTMLElement = HTMLElement>(
  baseClass: string,
  threshold = 0.8,
  exitThreshold = threshold - 0.2
) {
  const ref = useRef<T | null>(null)
  const enterTimer = useRef<number | null>(null)
  const exitTimer = useRef<number | null>(null)
  const currentlyVisible = useRef(false)

  const rootMargin = '0px 0px -10% 0px'
  const enterDelay = 60
  const exitDelay = 120
  const visibleClass = 'visible'

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add(baseClass)

    const clearEnterTimer = () => {
      if (enterTimer.current) {
        window.clearTimeout(enterTimer.current)
        enterTimer.current = null
      }
    }
    const clearExitTimer = () => {
      if (exitTimer.current) {
        window.clearTimeout(exitTimer.current)
        exitTimer.current = null
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio ?? 0

          if (ratio >= threshold) {
            clearExitTimer()

            if (currentlyVisible.current) return

            clearEnterTimer()
            enterTimer.current = window.setTimeout(() => {
              entry.target.classList.add(visibleClass)
              currentlyVisible.current = true
              enterTimer.current = null
            }, enterDelay)

            return
          }

          if (ratio <= exitThreshold) {
            clearEnterTimer()

            if (!currentlyVisible.current) return

            clearExitTimer()
            exitTimer.current = window.setTimeout(() => {
              entry.target.classList.remove(visibleClass)
              currentlyVisible.current = false
              exitTimer.current = null
            }, exitDelay)

            return
          }
        })
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        rootMargin,
      }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearEnterTimer()
      clearExitTimer()
    }
  }, [baseClass, threshold, exitThreshold])

  return ref
}
