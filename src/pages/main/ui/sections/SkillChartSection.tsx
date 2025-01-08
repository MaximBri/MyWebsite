import React from 'react'

import skills from '../../../../shared/data/skills'
import SkillChart from './SkillsChart'
import './SkillChartSection.scss'
import '../../../../widgets/skills/SkillsSection.scss'
const reactSvg = `${process.env.PUBLIC_URL}/images/main/react.svg`

const SkillsChartSection = () => {
  return (
    <>
      <section className='skill'>
        <div id='animation' className='fade-in-left'>
          <h2 className='title'>Уровень владения</h2>
          <div className='dot'></div>
        </div>
        <ul id='animation' className='chart__box fade-in-top'>
          {skills.map((item, i) => {
            return (
              <SkillChart
                name={item.name}
                percentage={item.percentage}
                color={item.color}
                key={i}
              />
            )
          })}
        </ul>
        <img id='animation' className='skill__img fade-in-right' src={reactSvg} alt='react'></img>
      </section>
    </>
  )
}

export default SkillsChartSection
