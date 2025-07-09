import { achievements } from '@/shared/data/achievements'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { AchievementItem } from '../achievement-item'
import './Achievements.scss'

export const Achievements = () => {
  return (
    <section className='achievements__wrapper'>
      <SectionTitle title='Достижения' />
      <ul className='achievements'>
        {achievements.map((item) => (
          <AchievementItem data={item} key={item.imgLink} />
        ))}
      </ul>
    </section>
  )
}
