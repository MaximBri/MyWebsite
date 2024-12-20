import React from 'react'

import { worksBox } from '../../data/worksBox'
import WorkItem from '../ui/WorkItem'

const WorksSection = () => {
  const [images, setImages] = React.useState({})
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const importImages = async () => {
      try {
        const importedImages = await Promise.all(
          worksBox.map(async (file) => {
            try {
              const image = await import(`../../data/works/${file.img}.png`)
              return { [file.img]: image.default }
            } catch (error) {
              console.warn(`Image "${file.img}.png" not found. Skipping...`)
              return { [file.img]: null }
            }
          })
        )
        const imagesMap = importedImages.reduce(
          (acc, item) => ({ ...acc, ...item }),
          {}
        )
        setImages(imagesMap)
      } catch (error) {
        console.error('Error importing images:', error)
      } finally {
        setLoading(false)
      }
    }
    importImages()
  }, [])

  const works = worksBox.map((item) => ({
    img: images[item.img] || null,
    title: item.title,
    difficulty: item.difficulty,
  }))

  return (
    <section className='works'>
      <h2 className='title'>Мои работы</h2>
      <div className='dot'></div>
      <div>
        <h3 className='works__filters_title'>Фильтры</h3>
        <nav>
          <input
            type='search'
            className='works_search'
            placeholder='Поиск по названию'
          />
          <button className='works__filter'>Фильтр: нет</button>
        </nav>
        <ul className='works__box'>
          {works.map((item, i) => {
            return <WorkItem data={item} key={i} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default WorksSection
