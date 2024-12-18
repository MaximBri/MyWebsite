import React from 'react'

import SkillChart from '../ui/SkillsChart'
import '../../scss/ui/chart.scss'

const SkillsChartSection = () => {
  const skills = [
    { name: 'HTML', percentage: 90, color: '#ffa200' },
    { name: 'CSS', percentage: 85, color: '#0d00ff' },
    { name: 'JavaScript', percentage: 70, color: '#f9fd01' },
    { name: 'React', percentage: 65, color: '#006eff' },
  ]
  return (
    <section className='skill'>
      <h2 className='title'>Уровень владения</h2>
      <div className='dot'></div>
      <ul className='chart__box'>
        {skills.map((item, i) => {
          return <SkillChart name={item.name} percentage={item.percentage} color={item.color} key={i} />
        })}
      </ul>
    </section>
  )
}

export default SkillsChartSection
