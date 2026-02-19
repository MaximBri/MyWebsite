'use client'

import { m } from 'framer-motion'
import type { PathStep } from '@/shared/data/pathSteps'
import { useFadeIn } from '@/shared/lib/animations'
import styles from './Timeline.module.scss'

interface TimelineItemProps {
  step: PathStep
  index: number
  isMobile: boolean
  isActive: boolean
  itemRef: (el: HTMLDivElement | null) => void
}

export const TimelineItem = ({
  step,
  index,
  isMobile,
  isActive,
  itemRef,
}: TimelineItemProps) => {
  const isEven = index % 2 === 0
  const direction = isMobile ? 'right' : isEven ? 'right' : 'left'
  const cardRef = useFadeIn(direction)

  return (
    <div
      ref={itemRef}
      className={`${styles.item} ${isEven ? styles['item--right'] : styles['item--left']}`}
    >
      <div className={styles.item__content}>
        <div
          ref={cardRef}
          className={`${styles.item__card} ${isActive ? styles['item__card--active'] : ''}`}
        >
          <img
            className={styles.item__icon}
            src={`/images/skills/${step.icon}`}
            alt={step.title}
          />
          <span className={styles.item__date}>{step.date}</span>
          <h3 className={styles.item__title}>{step.title}</h3>
          <p className={styles.item__description}>{step.description}</p>
        </div>
      </div>

      <m.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-50px 0px -150px 0px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`${styles.item__dot} ${isActive ? styles['item__dot--active'] : ''}`}
      />

      <div className={styles.item__spacer} />
    </div>
  )
}
