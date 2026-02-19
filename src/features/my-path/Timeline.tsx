'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { pathSteps } from '@/shared/data/pathSteps'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { TimelineItem } from './TimelineItem'
import styles from './Timeline.module.scss'

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(768)
  const [activeIndex, setActiveIndex] = useState(-1)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el
    },
    []
  )

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const centerY = window.innerHeight / 2

        let closest = -1
        let minDist = Infinity

        itemRefs.current.forEach((el, i) => {
          if (!el) return
          const rect = el.getBoundingClientRect()
          const elCenter = rect.top + rect.height / 2
          const dist = Math.abs(elCenter - centerY)
          if (dist < minDist) {
            minDist = dist
            closest = i
          }
        })

        setActiveIndex(closest)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.timeline}>
      <SectionTitle title='Мой путь' />
      <div ref={containerRef} className={styles.timeline__container}>
        <div className={styles.timeline__line} />
        {pathSteps.map((step, i) => (
          <TimelineItem
            key={i}
            step={step}
            index={i}
            isMobile={isMobile}
            isActive={i === activeIndex}
            itemRef={setItemRef(i)}
          />
        ))}
      </div>
    </section>
  )
}
