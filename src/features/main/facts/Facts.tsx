import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { formatMonths, getTotalExperienceMonths } from '../experience/utils/experienceCalculator'
import { experienceList } from '@/shared/data/experience'

export const Facts = () => {
  return (
    <section>
      <SectionTitle title='Интересные факты' />
      <ul>
        <li>Более 1300 коммитов за 2025 год</li>
        <li>{formatMonths(getTotalExperienceMonths(experienceList))}</li>
      </ul>
    </section>
  )
}
