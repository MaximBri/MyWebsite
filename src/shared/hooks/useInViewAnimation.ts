import { useEffect, useRef } from 'react'

export const useInViewAnimation = <T extends HTMLElement>(
  baseClass: string,
  threshold = 0.8
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    ref.current.classList.add(baseClass)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [baseClass, threshold])

  return ref
}
