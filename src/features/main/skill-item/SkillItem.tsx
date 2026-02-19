import { motion } from 'framer-motion'
import { useFadeIn } from '@/shared/lib/animations'
import './SkillItem.scss'

interface SkillChipProps {
  name: string
  icon?: string
}

export const SkillItem = ({ name, icon }: SkillChipProps) => {
  const fade = useFadeIn<HTMLLIElement>('right')

  return (
    <motion.li {...fade} className='skill-chip'>
      {icon && (
        <img
          className='skill-chip__icon'
          src={`/images/skills/${icon}`}
          alt={name}
        />
      )}
      <span className='skill-chip__name'>{name}</span>
    </motion.li>
  )
}
