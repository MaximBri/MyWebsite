'use client'

import { motion } from 'framer-motion'
import { skillsCategories } from '@/shared/data/skillsBox'
import { SkillItem } from '../skill-item'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { useFadeIn } from '@/shared/lib/animations'
import './SkillsSection.scss'

export const SkillsSection = () => {
  return (
    <section className='skills'>
      <SectionTitle title='Стек, навыки' />
      <div className='skills__categories'>
        {skillsCategories.map((category) => (
          <CategoryGroup key={category.label} category={category} />
        ))}
      </div>
    </section>
  )
}

const CategoryGroup = ({ category }: { category: (typeof skillsCategories)[number] }) => {
  const labelFade = useFadeIn<HTMLHeadingElement>('left')

  return (
    <div className='skills__group'>
      <motion.h3 {...labelFade} className='skills__group-label'>
        {category.label}
      </motion.h3>
      <ul className='skills__group-list'>
        {category.items.map((item) => (
          <SkillItem key={item.name} name={item.name} icon={item.icon} />
        ))}
      </ul>
    </div>
  )
}
