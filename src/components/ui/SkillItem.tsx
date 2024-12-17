import React from 'react'

const SkillItem = ({ title, img, scale }: SkillItemInterface) => {
  const [active, setActive] = React.useState<boolean>(false)
  return (
    <li
      className={`skill__box_item ${active ? 'flipped' : ''}`}
      // onMouseEnter={() => setActive(!active)}
      onClick={() => setActive(!active)}
    >
      <div className='skill__item_front'>
        <img
          className='skill__item_img'
          src={img}
          alt='Skill-image'
          style={{ scale: scale }}
        />
      </div>
      <div className='skill__item_back'>
        <h2 className='skill__item_title'>{title}</h2>
      </div>
    </li>
  )
}

export default SkillItem
