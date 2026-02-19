'use client'

import { motion } from 'framer-motion'
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
  const cardFade = useFadeIn<HTMLDivElement>(direction)
  const dotFade = useFadeIn<HTMLDivElement>(isEven ? 'right' : 'left')

  return (
    <div
      ref={itemRef}
      className={`${styles.item} ${isEven ? styles['item--right'] : styles['item--left']}`}
    >
      <div className={styles.item__content}>
        <motion.div
          {...cardFade}
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
        </motion.div>
      </div>

      <motion.div
        ref={dotFade.ref}
        initial={{ scale: 0 }}
        animate={dotFade.animate.opacity === 1 ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`${styles.item__dot} ${isActive ? styles['item__dot--active'] : ''}`}
      />

      <div className={styles.item__spacer} />
    </div>
  )
}
