'use client'

import { FC } from 'react'
import { ExperienceItemModel } from '../experience/utils/experienceCalculator'
import styles from './ExperienceItem.module.scss'
import Image from 'next/image'
import { useFadeIn } from '@/shared/lib/animations'

export const ExperienceItem: FC<{
  data: ExperienceItemModel
  index: number
}> = ({ data, index }) => {
  const ref = useFadeIn('right')

  return (
    <li ref={ref} className={styles['exp-item']}>
      {data.imagePath && (
        <Image
          className={styles['exp-item__background']}
          src={`/images/experience/${data.imagePath}`}
          alt='background'
          width={400}
          height={200}
        ></Image>
      )}
      <h3 className={styles['exp-item__number']}>{index + 1}</h3>
      <h4 className={styles['exp-item__name']}>{data.name}</h4>
      <h5 className={styles['exp-item__role']}>{data.role}</h5>
      <p className={styles['exp-item__description']}>{data.description}</p>
      <span className={styles['exp-item__period']}>
        {data.period.start} -{' '}
        {data.period.end === 'now' ? 'настоящее время' : data.period.end}
      </span>
    </li>
  )
}
