import React from 'react'

import '../../scss/ui/chart.scss'

const SkillChart = ({ name, percentage, color }: skillChartInterface) => {
  const [curPercent, setCurPercent] = React.useState<number>(0)

  React.useEffect(() => {
    setCurPercent(percentage)
  }, [curPercent, percentage])

  return (
    <li className='chart'>
      <div className='chart__header'>
        <h3 className='chart__title'>{name}</h3>
        <h4 className='chart__percent' style={{ left: `${percentage}%` }}>
          {percentage + '%'}
        </h4>
      </div>
      <div className='chart__block'>
        <div
          className='chart__block-inner'
          style={{ width: `${curPercent}%`, backgroundColor: `${color}` }}
        ></div>
      </div>
    </li>
  )
}

export default SkillChart
