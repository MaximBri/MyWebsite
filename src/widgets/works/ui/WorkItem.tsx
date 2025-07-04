import React from 'react'
import { Link } from 'react-router-dom'

import './WorkItem.scss'
import './WordsInWorks.scss'
const ButtonPng = `/images/works/upArrow.png`

const WorkItem = ({ data }: WorkItemInterface) => {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <li id='animation' className='work fade-in-top'>
      <Link to={data.link} target='_blank'>
        <img
          className='work__img'
          src={`/images/works/${data.img}.png`}
          alt='Картинка портфолио'
        ></img>
      </Link>
      <div className='work__about'>
        <div className='work__main'>
          <h2 className='work__title'>{data.title}</h2>
          <ul className='work__key-words'>
            {data.tags.map((item, i) => {
              return (
                <li className={`work__key-word word-${item}`} key={i}>
                  #{item}
                </li>
              )
            })}
          </ul>
        </div>
        {open && (
          <div className='work__details'>
            <h3>Сложность: {data.difficulty}</h3>
            <h4>О проекте: {data.about}</h4>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className='work__btn'
          style={{ transform: `rotateX(${open ? 0 : 180}deg)` }}
        >
          <img src={ButtonPng} alt='more' />
        </button>
      </div>
    </li>
  )
}

export default WorkItem
