import React from 'react'
import SkillChart from '../ui/SkillsChart'

const SkillsChartSection = () => {
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'React', percentage: 70 },
  ]
  return (
    <section className='skill'>
      <h2 className='chart_title'>Уровень владения</h2>
      <div className='dot'></div>
      <ul className='chart__box'>
        {skills.map((item, i) => {
          return <SkillChart key={i} />
        })}
      </ul>
    </section>
  )
}

export default SkillsChartSection
