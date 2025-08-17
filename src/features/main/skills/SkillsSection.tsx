import { skillsItems } from '@/shared/data/skillsBox'
import { SkillItem } from '../skill-item'
import './SkillsSection.scss'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import Image from 'next/image'
const man1 = '/images/skills/operator (1).png'
const man2 = '/images/skills/operator (2).png'

export const SkillsSection = () => {
  return (
    <section className='skills'>
      <div className='skills__top'>
        <SectionTitle title='Стек, навыки' />
        <h3 className='skills__descr fade-in-right'>
          <svg
            width='20px'
            height='20px'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z'
              fill='#000000'
            />
          </svg>
          Кликабельно
        </h3>
      </div>
      <ul className='skill__box fade-in-top'>
        {skillsItems.map((item, i) => (
          <SkillItem
            img={item.techName}
            key={i}
            title={item.title}
            scale={item.scale}
          />
        ))}
      </ul>
      <Image
        className='skills__img'
        width={173}
        height={173}
        src={man1}
        alt='man'
      />
      <Image
        className='skills__img'
        width={173}
        height={173}
        src={man2}
        alt='man'
      />
    </section>
  )
}
