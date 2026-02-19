'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import './WorkItem.scss'
import { useFadeIn } from '@/shared/lib/animations'

const MotionLink = motion.create(Link)

export const WorkItem = ({ data }: WorkItemInterface) => {
  const fadeProps = useFadeIn<HTMLAnchorElement>('left')

  return (
    <MotionLink
      {...fadeProps}
      href={`/Portfolio/${data.img}`}
      className='work'
    >
      <h2 className='work__title'>{data.title}</h2>
      <img
        className='work__img'
        src={`/images/works/${data.img}.png`}
        alt='Картинка портфолио'
      ></img>
      {data.specialTag && <h3 className='work__hint'>{data.specialTag}</h3>}
    </MotionLink>
  )
}
