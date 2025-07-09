import { worksBox } from '@/shared/data/worksBox'
import { WorkItem } from '@/features/portfolio/works'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import './WorksSection.scss'

export const WorksSection = () => {
  return (
    <section className='works'>
      <SectionTitle title={'Мои работы'} />
      <div className='works__wrapper'>
        <ul className='works__list'>
          {worksBox.map((work) => {
            return <WorkItem data={work} key={work.title} />
          })}
        </ul>
      </div>
    </section>
  )
}
