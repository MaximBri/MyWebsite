import { FC } from 'react'

export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div id='animation' className='fade-in-left'>
      <h2 className='title'>{title}</h2>
      <div className='dot'></div>
    </div>
  )
}
