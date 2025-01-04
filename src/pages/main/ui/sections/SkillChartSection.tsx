import React from 'react'

import skills from '../../../../shared/data/skills'
import SkillChart from './SkillsChart'
import './SkillChartSection.scss'
import '../../../../widgets/skills/SkillsSection.scss'

const SkillsChartSection = () => {
  return (
    <section className='skill'>
      <h2 className='title'>Уровень владения</h2>
      <div className='dot'></div>
      <ul className='chart__box'>
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
    </section>
  )
}

export default SkillsChartSection
