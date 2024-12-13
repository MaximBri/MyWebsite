import React from 'react'

import htmlImg from '../../data/skills/html5.png'
import cssImg from '../../data/skills/css3.png'
import scssImg from '../../data/skills/scsslogo.png'
import jsImg from '../../data/skills/js.png'
import reactImg from '../../data/skills/react.png'
import rtkImg from '../../data/skills/redux.png'
import tsImg from '../../data/skills/Typescript.png'
import '../../scss/ui/skills.scss'
import SkillItem from './SkillItem'

const SkillsSection = () => {
  const skillsBox = [
    { img: htmlImg, title: 'HTML 5', scale: '1.4' },
    { img: cssImg, title: 'CSS 3', scale: '1' },
    { img: scssImg, title: 'Scss', scale: '1' },
    { img: '../../data/skills/js.png', title: 'Tailwind', scale: '1.5' },
    { img: jsImg, title: 'JavaScript', scale: '1' },
    { img: reactImg, title: 'React', scale: '3' },
    { img: rtkImg, title: 'Redux ToolKit', scale: '2.5' },
    { img: tsImg, title: 'TypeScript', scale: '1' },
    { img: tsImg, title: 'Docker', scale: '1' },
    { img: tsImg, title: 'Wordpress', scale: '1' },
  ]
  return (
    <section className='skills'>
      <h1 className='skills_title'>Навыки</h1>
      <div></div>
      <ul className='skill__box'>
        {skillsBox.map((item, i) => {
          return <SkillItem img={item.img} key={i} title={item.title} scale={item.scale}/>
        })}
      </ul>
    </section>
  )
}

export default SkillsSection
