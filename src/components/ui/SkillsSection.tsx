import React from 'react'

import SkillItem from './SkillItem'
import '../../scss/ui/skills.scss'

const SkillsSection = () => {
  const [images, setImages] = React.useState({})
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
    { img: images['docker'], title: 'Docker', scale: '1.5' },
    { img: images['wordpress'], title: 'Wordpress', scale: '2' },
  ]
  return (
    <section className='skills'>
      <h1 className='skills_title'>Навыки</h1>
      <div></div>
      {images ? (
        <ul className='skill__box'>
          {skillsBox.map((item, i) => {
            return (
              <SkillItem
                img={item.img}
                key={i}
                title={item.title}
                scale={item.scale}
              />
            )
          })}
        </ul>
      ) : (
        <h2>Загрузка...</h2>
      )}
    </section>
  )
}

export default SkillsSection
