import React from 'react'

const SkillItem = ({ title, img, key, scale }: SkillItemInterface) => {
  const [active, setActive] = React.useState<boolean>(false)
  return (
    <li className='skill__box_item' key={key} onClick={() => setActive(!active)}>
      <img className={`${active ? 'not-visible' : 'visible'}`} src={img} alt='Skill-image' style={{scale: scale}}/>
      <h2 className={`skill__item_title ${!active ? 'not-visible' : 'visible'}`}>{title}</h2>
    </li>
  )
}

export default SkillItem
