import React from 'react'
import { useSelector } from 'react-redux'

import SkillItem from '../ui/SkillItem'
import { getWidth } from '../../rtk/slices/WidthSlice'
import '../../scss/ui/skills.scss'

const SkillsSection = () => {
  const [images, setImages] = React.useState({})
  const [countItems, setCountItems] = React.useState<number>(4)
  const [loading, setLoading] = React.useState<boolean>(true)
  const width = useSelector(getWidth)
  React.useEffect(() => {
    const importImages = async () => {
      const imageFiles = [
        'html5.png',
        'css3.png',
        'scsslogo.png',
        'js.png',
        'react.png',
        'redux.png',
        'Typescript.png',
        'wordpress.png',
        'tailwind.png',
        'docker.png',
      ]
      const importedImages = await Promise.all(
        imageFiles.map(async (file) => {
          const image = await import(`../../data/skills/${file}`)
          return { [file.replace('.png', '')]: image.default }
        })
      )
      setImages(importedImages.reduce((acc, item) => ({ ...acc, ...item }), {}))
      setLoading(false)
    }
    importImages()
  }, [])
  const skillsBox = [
    { img: images['html5'], title: 'HTML 5', scale: '1.4' },
    { img: images['css3'], title: 'CSS 3', scale: '1' },
    { img: images['scsslogo'], title: 'Scss', scale: '1' },
    { img: images['tailwind'], title: 'Tailwind', scale: '1.5' },
    { img: images['js'], title: 'JavaScript', scale: '1' },
    { img: images['react'], title: 'React', scale: '2.5' },
    { img: images['redux'], title: 'Redux ToolKit', scale: '2.5' },
    { img: images['Typescript'], title: 'TypeScript', scale: '1' },
    { img: images['docker'], title: 'Docker', scale: '1.3' },
    { img: images['wordpress'], title: 'Wordpress', scale: '2' },
  ]
  return (
    <section className='skills'>
      <div className='skills__top'>
        <div>
          <h1 className='title'>Стек</h1>
          <div className='dot'></div>
        </div>
        <h3 className='skills_descr'>
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
              {countItems === 4 ? 'Показать все' : 'Скрыть'}
            </button>
          )}
        </>
      ) : (
        <h2 className='skills_loading'>Загрузка...</h2>
      )}
    </section>
  )
}

export default SkillsSection
