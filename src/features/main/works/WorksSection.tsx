import { WorkItem, WorkItemLoader } from '@/features/portfolio/works'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { useMainContext } from '@/app/context/MainContext'
import './WorksSection.scss'

export const WorksSection = () => {
  const { works } = useMainContext()
  return (
    <section className='works'>
      <SectionTitle title={'Мои работы'} />
      <div className='works__wrapper'>
        <ul className='works__list'>
          {works
            ? works.map((work) => {
                return <WorkItem data={work} key={work.title} />
              })
            : Array.from({ length: 3 }).map((_, index) => (
                <li className='work' key={index}>
                  <WorkItemLoader index={index} />
                </li>
              ))}
        </ul>
      </div>
    </section>
  )
}
