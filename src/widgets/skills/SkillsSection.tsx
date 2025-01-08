import React from 'react'
import { useSelector } from 'react-redux'

import SkillItem from '../../widgets/skills/SkillItem'
import { skillBox, skillsItems } from '../../shared/data/skillsBox'
import { getWidth } from '../../app/store/slices/WidthSlice'

import './SkillsSection.scss'
const man1 = `${process.env.PUBLIC_URL}/images/skills/operator (1).png`
const man2 = `${process.env.PUBLIC_URL}/images/skills/operator (2).png`

const SkillsSection = () => {
  const [countItems, setCountItems] = React.useState<number>(4)
  const width = useSelector(getWidth)
  return (
    <section className='skills'>
      <div className='skills__top'>
        <div id='animation' className='fade-in-left'>
          <h1 className='title'>Стек</h1>
          <div className='dot'></div>
        </div>
        <h3 id='animation' className='skills__descr fade-in-right'>
          <svg
            width='20px'
            height='20px'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z'
              fill='#000000'
            />
          </svg>
          Кликабельно
        </h3>
      </div>
      <ul id='animation' className='skill__box fade-in-top'>
        {skillsItems
          .slice(0, width > 576 ? undefined : countItems)
          .map((item, i) => (
            <SkillItem
              img={skillBox[i]}
              key={i}
              title={item.title}
              scale={item.scale}
            />
          ))}
        {/* {skillsBox
              .slice(0, width > 576 ? undefined : countItems)
              .map((item, i) => (
                <SkillItem
                  img={item.img}
                  key={i}
                  title={item.title}
                  scale={item.scale}
                />
              ))} */}
      </ul>
      <img className='skills__img' src={man1} alt='man' />
      <img className='skills__img' src={man2} alt='man' />
      {width < 576 && (
        <button
          className='skill__box_btn'
          onClick={() =>
            countItems === 4 ? setCountItems(skillBox.length) : setCountItems(4)
          }
        >
          {countItems === 4 ? 'Показать весь' : 'Скрыть'}
        </button>
      )}
    </section>
  )
}

export default SkillsSection
