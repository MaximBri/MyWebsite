import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import Image from 'next/image'

import { routes } from '@/shared/config/routes'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { Carousel } from '@/features/portfolio/carousel'
import { Meta } from '@/shared/utils/Meta'
import './WorkPage.scss'

export const WorkPage = ({ work }) => {
  if (!work) {
    return null
  }

  return (
    <>
      <Meta title={`FrontCraft | ${work.title}`} />
      <section className='workpage'>
        <div className='workpage__path'>
          <Link href={routes.portfolio}>Работы /</Link>
          <span>{work.title}</span>
        </div>
        <h2 className='workpage__title'>{work.title}</h2>
        <Carousel
          paths={work.allImages}
          filesPath={`/images/works/${work.img.toLowerCase()}/`}
        />
        <SectionTitle title='Доступы' withAnimation={false} />
        <nav className='workpage__nav'>
          {work.appLink !== 'private' ? (
            <Link
              className='workpage__nav-button'
              href={work.appLink ?? ''}
              target='_blank'
              rel='noopener noreferrer'
            >
              Ссылка на сайт
            </Link>
          ) : (
            <div className='workpage__nav-button workpage__nav-button--private'>
              Нигде не развёрнут
            </div>
          )}
          {work.gitRepo !== 'private' ? (
            <Link
              className='workpage__nav-button'
              href={work.gitRepo ?? ''}
              target='_blank'
              rel='noopener noreferrer'
            >
              Репозиторий проекта
              <Image
                src={'/images/globals/github.svg'}
                alt='github'
                width={22}
                height={22}
              />
            </Link>
          ) : (
            <div className='workpage__nav-button workpage__nav-button--private'>
              Приватный репозиторий 🔐
            </div>
          )}
        </nav>
        <SectionTitle title='Описание проекта' withAnimation={false} />
        <div className='workpage__description'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            disallowedElements={[]}
            allowElement={(node) => true}
          >
            {work.about}
          </ReactMarkdown>
        </div>
        <SectionTitle title='Стек' withAnimation={false} />
        <ul className='workpage__stack'>
          {work.tags.map((item) => (
            <li
              className={`word-${item.toLowerCase()} workpage__stack-item`}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
