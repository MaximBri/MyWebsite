'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import { useFadeIn } from '@/shared/lib/animations'

export const SectionTitle: FC<{ title: string; withAnimation?: boolean }> = ({
  title,
  withAnimation = true,
}) => {
  const fadeProps = useFadeIn<HTMLDivElement>('left')

  return (
    <motion.div {...(withAnimation ? fadeProps : {})}>
      <h2 className='title'>{title}</h2>
      <div className='dot'></div>
    </motion.div>
  )
}
