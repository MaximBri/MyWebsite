import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { routes } from '@/shared/config/routes'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { useMainContext } from '@/app/context/MainContext'
import { Carousel } from '@/features/portfolio/carousel'
import './WorkPage.scss'
import Image from 'next/image'

export const WorkPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { works } = useMainContext()

  if (!id || Array.isArray(id)) return null

  const data = works?.find((item) => item.img === id)

  if (works && !data) {
    router.push(routes.home)
    return null
  }

  if (!data) return null

  return (
    <section className='workpage'>
      <div className='workpage__path'>
        <Link href={routes.portfolio}>Работы /</Link>
        <span>{data.title}</span>
      </div>
      <h2 className='workpage__title'>{data.title}</h2>
      <Carousel
        paths={data.allImages}
        filesPath={`/images/works/${data.img.toLowerCase()}/`}
      />
      <SectionTitle title='Доступы' withAnimation={false} />
      <nav className='workpage__nav'>
        {data.appLink !== 'private' ? (
          <Link
            className='workpage__nav-button'
            href={data.appLink ?? ''}
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
        {data.gitRepo !== 'private' ? (
          <Link
            className='workpage__nav-button'
            href={data.gitRepo ?? ''}
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
          {data.about}
        </ReactMarkdown>
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
