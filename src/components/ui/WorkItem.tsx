import React from 'react'

const WorkItem = ({ data }: WorkItemInterface) => {
  // console.log(data)
  return (
    <li className='work'>
      <img src={data.img} alt='Картинка портфолио'></img>
      <h2 className='work_title'>{data.title}</h2>
    </li>
  )
}

export default WorkItem
