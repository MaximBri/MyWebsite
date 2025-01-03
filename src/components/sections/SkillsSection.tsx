import React from 'react'
import { useSelector } from 'react-redux'

import SkillItem from '../ui/SkillItem'
import { skillBox, skillsItems } from '../../data/skillsBox'
import WorksSkeleton from '../ui/SkillsSkeleton'
import { getWidth } from '../../rtk/slices/WidthSlice'
import '../../scss/ui/skills.scss'

const SkillsSection = () => {
  const [images, setImages] = React.useState({})
  const [countItems, setCountItems] = React.useState<number>(4)
  const [loading, setLoading] = React.useState<boolean>(true)
  const width = useSelector(getWidth)
  let skillsBox: skillBoxInterface[] = []
  React.useEffect(() => {
    const importImages = async () => {
      const importedImages = await Promise.all(
        skillBox.map(async (file) => {
          const image = await import(`../../data/skills/${file}.png`)
          return { [file]: image.default }
        })
      )
      setImages(importedImages.reduce((acc, item) => ({ ...acc, ...item }), {}))
      setLoading(false)
    }
    importImages()
  }, [])
  for (let i: number = 0; i < skillBox.length; i++) {
    skillsBox.push({
      img: images[skillBox[i]],
      title: skillsItems[i].title,
      scale: skillsItems[i].scale,
    })
  }
  return (
    <section className='skills'>
      <div className='skills__top'>
        <div>
          <h1 className='title'>Стек</h1>
          <div className='dot'></div>
        </div>
        <h3 className='skills__descr'>
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
      {!loading ? (
        <>
          <ul className='skill__box'>
            {skillsBox
              .slice(0, width > 576 ? undefined : countItems)
              .map((item, i) => (
                <SkillItem
                  img={item.img}
                  key={i}
                  title={item.title}
                  scale={item.scale}
                />
              ))}
          </ul>
          {width < 576 && (
            <button
              className='skill__box_btn'
              onClick={() =>
                countItems === 4
                  ? setCountItems(skillsBox.length)
                  : setCountItems(4)
              }
            >
              {countItems === 4 ? 'Показать весь' : 'Скрыть'}
            </button>
          )}
        </>
      ) : (
        <ul className='skill__box'>
          {Array.from({ length: 5 }).map((_, index) => (
            <WorksSkeleton key={index} />
          ))}
        </ul>
        // <h2 className='skills_loading'>Загрузка...</h2>
      )}
    </section>
  )
}

export default SkillsSection
