import { useInViewAnimation } from '@/shared/hooks/useInViewAnimation'
import { FC } from 'react'

export const SectionTitle: FC<{ title: string; withAnimation?: boolean }> = ({
  title,
  withAnimation = true,
}) => {
  const blockRef = useInViewAnimation<HTMLDivElement>(
    'fade-in-left',
    withAnimation ? 0.9 : 0
  )
  return (
    <div ref={blockRef} className={withAnimation ? 'fade-in-left' : ''}>
      <h2 className='title'>{title}</h2>
      <div className='dot'></div>
    </div>
  )
}
