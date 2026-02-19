'use client'

import { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { AchievementModel } from '@/shared/data/achievements'
import { ImageCreator } from '@/widgets/pop-ups/image-creator'
import { useFadeIn } from '@/shared/lib/animations'

export const AchievementItem: FC<{ data: AchievementModel }> = ({ data }) => {
  const [popupIsActive, setPopupIsActive] = useState<boolean>(false)
  const ref = useFadeIn('left')

  return (
    <>
      <li ref={ref} className='achievements__item'>
        <h3 className='achievements__item-title'>{data.title}</h3>
        <p className='achievements__item-description'>{data.description}</p>
        <button
          className='achievements__item-button'
          onClick={() => setPopupIsActive(!popupIsActive)}
        >
          <img
            className='achievements__item-image'
            src={`/images/achievements/${data.imgLink}`}
            alt='sertificate'
          />
        </button>
      </li>
      {popupIsActive &&
        createPortal(
          <ImageCreator
            link={data.imgLink}
            close={() => setPopupIsActive(false)}
          />,
          document.body
        )}
    </>
  )
}
