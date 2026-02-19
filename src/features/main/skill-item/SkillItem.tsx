import './SkillItem.scss'

interface SkillChipProps {
  name: string
  icon?: string
}

export const SkillItem = ({ name, icon }: SkillChipProps) => {
  return (
    <li className='skill-chip'>
      {icon && (
        <img
          className='skill-chip__icon'
          src={`/images/skills/${icon}`}
          alt={name}
        />
      )}
      <span className='skill-chip__name'>{name}</span>
    </li>
  )
}
