import Link from 'next/link'
import './WorkItem.scss'

export const WorkItem = ({ data }: WorkItemInterface) => {
  return (
    <Link
      id='animation'
      href={`/Portfolio/${data.img}`}
      className='work fade-in-top'
    >
      <h2 className='work__title'>{data.title}</h2>
      <img
        className='work__img'
        src={`/images/works/${data.img}.png`}
        alt='Картинка портфолио'
      ></img>
      {data.specialTag && <h3 className='work__hint'>{data.specialTag}</h3>}
    </Link>
  )
}
