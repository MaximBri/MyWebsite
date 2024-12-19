import React from 'react'

import skills from '../../data/skills'
import SkillChart from '../ui/SkillsChart'
import '../../scss/ui/chart.scss'
import '../../scss/ui/skills.scss'

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
