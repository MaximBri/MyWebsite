import { Link, useParams } from 'react-router-dom'
import { worksBox } from '@/shared/data/worksBox'
import { routes } from '@/shared/config/routes'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import ReactMarkdown from 'react-markdown'
import './WorkPage.scss'

export const WorkPage = () => {
  const { id } = useParams()

  const data = worksBox.find((item) => item.img === id)

  return (
    <section className='workpage'>
      <div className='workpage__path'>
        <Link to={routes.portfolio}>{'Работы > '}</Link>
        <span>{data.title}</span>
      </div>
      <h2 className='workpage__title'>{data.title}</h2>
      <img className='workpage__image' src={`/images/works/${data.img}.png`} alt='my work' />
      <SectionTitle title='Доступы' withAnimation={false} />
      <nav className='workpage__nav'>
        {data.appLink !== 'private' ? (
          <Link className='workpage__nav-button' to={data.appLink} target='_blank'>
            Ссылка на сайт
          </Link>
        ) : (
          <div className='workpage__nav-button workpage__nav-button--private'>Нигде не развёрнут</div>
        )}
        {data.gitRepo !== 'private' ? (
          <Link className='workpage__nav-button' to={data.gitRepo} target='_blank'>
            Репозиторий проекта
            <img src={'/images/globals/github.svg'} alt='github' />
          </Link>
        ) : (
          <div className='workpage__nav-button workpage__nav-button--private'>Приватный репозиторий 🔐</div>
        )}
      </nav>
      <SectionTitle title='Описание проекта' withAnimation={false} />
      <div className='workpage__description'>
        <ReactMarkdown>{data.about}</ReactMarkdown>
      </div>
      <SectionTitle title='Стек' withAnimation={false} />
      <ul className='workpage__stack'>
        {data.tags.map((item) => (
          <li
            className={`word-${item.toLowerCase()} workpage__stack-item`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
