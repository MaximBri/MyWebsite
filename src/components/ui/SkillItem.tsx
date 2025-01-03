import React from 'react'

import '../../scss/ui/skills.scss'

const SkillItem = ({ title, img, scale }: SkillItemInterface) => {
  const [active, setActive] = React.useState<boolean>(false)
  return (
    <li
      className={`skill__box-item ${active ? 'flipped' : ''}`}
      // onMouseEnter={() => setActive(!active)}
      onClick={() => setActive(!active)}
    >
      <div className='skill__item-front'>
        <img
          className='skill__item-img'
          src={img}
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

export default SkillItem
