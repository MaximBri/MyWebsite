import { FC } from 'react'

export const SectionTitle: FC<{ title: string; withAnimation?: boolean }> = ({
  title,
  withAnimation = true,
}) => {
  return (
    <div
      id={withAnimation ? 'animation' : ''}
      className={withAnimation ? 'fade-in-left' : ''}
    >
      <h2 className='title'>{title}</h2>
      <div className='dot'></div>
    </div>
  )
}
