import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import styles from './Experience.module.scss'
import { experienceList } from '@/shared/data/experience'
import { ExperienceItem } from '../experience-item'

export const Experience = () => {
  return (
    <div className={styles.exp}>
      <SectionTitle title='Опыт' />
      <section>
        <ul className={styles.exp__list}>
          {experienceList.map((job, index) => {
            return <ExperienceItem data={job} index={index} key={index} />
          })}
        </ul>
      </section>
    </div>
  )
}
