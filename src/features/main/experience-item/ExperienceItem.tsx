import { FC } from 'react'
import { ExperienceItemModel } from '../experience/utils/experienceCalculator'
import styles from './ExperienceItem.module.scss'
import { useInViewAnimation } from '@/shared/hooks/useInViewAnimation'
import Image from 'next/image'

export const ExperienceItem: FC<{
  data: ExperienceItemModel
  index: number
}> = ({ data, index }) => {
  const blockRef = useInViewAnimation<HTMLLIElement>('fade-in-btm', 0.1, 0.8)

  return (
    <li className={styles['exp-item']} ref={blockRef}>
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
