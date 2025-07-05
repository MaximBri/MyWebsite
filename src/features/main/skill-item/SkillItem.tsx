import { useState } from 'react'
import './SkillItem.scss'

export const SkillItem = ({ title, img, scale }: SkillItemInterface) => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <li
      className={`skill__box-item ${active ? 'flipped' : ''}`}
      onClick={() => setActive(!active)}
    >
      <div className='skill__item-front'>
        <img
          className='skill__item-img'
          src={`/images/skills/${img}`}
          alt='Skill-image'
          style={{ scale: scale }}
        />
      </div>
      <div className='skill__item-back'>
        <h2 className='skill__item-title'>{title}</h2>
      </div>
    </li>
  )
}
