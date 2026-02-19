'use client'

import { FC } from 'react'
import { useFadeIn } from '@/shared/lib/animations'

export const SectionTitle: FC<{ title: string; withAnimation?: boolean }> = ({
  title,
  withAnimation = true,
}) => {
  const ref = useFadeIn('left')

  return (
    <div ref={withAnimation ? ref : undefined}>
      <h2 className='title'>{title}</h2>
      <div className='dot'></div>
    </div>
  )
}
