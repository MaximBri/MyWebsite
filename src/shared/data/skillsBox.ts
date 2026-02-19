export interface SkillItem {
  name: string
  icon?: string
}

export interface SkillCategory {
  label: string
  items: SkillItem[]
}

export const skillsCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', icon: 'html5.png' },
      { name: 'CSS', icon: 'css3.png' },
      { name: 'SCSS', icon: 'scsslogo.png' },
      { name: 'Tailwind', icon: 'tailwind.png' },
      { name: 'JavaScript', icon: 'js.png' },
      { name: 'TypeScript', icon: 'Typescript.png' },
      { name: 'React', icon: 'react.svg' },
      { name: 'Next.js', icon: 'next.svg' },
      { name: 'Redux / RTK', icon: 'redux.svg' },
      { name: 'MobX', icon: 'mobx.png' },
      // { name: 'Material UI', icon: 'mui.svg' },
      { name: 'Jest', icon: 'jest.svg' },
      { name: 'Git', icon: 'git.png' },
      { name: 'TsDoc' },
      { name: 'React Query', icon: 'react-query.svg' },
      { name: 'Zod', icon: 'zod.svg' },
      { name: 'React Hook Form', icon: 'react-hook-form.svg' },
      { name: 'Zustand' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: 'node.svg' },
      { name: 'NestJS', icon: 'nest.svg' },
      { name: 'PostgreSQL', icon: 'postgres.svg' },
      { name: 'Prisma', icon: 'prisma.svg' },
      { name: 'Git', icon: 'git.png' },
    ],
  },
  {
    label: 'DevOps',
    items: [
      { name: 'Docker', icon: 'docker.png' },
      { name: 'GitHub Actions', icon: 'github-actions.svg' },
      { name: 'Nginx', icon: 'nginx.svg' },
    ],
  },
]
