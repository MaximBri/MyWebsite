interface SkillItemInterface {
  title: string
  img: string
  scale: string
}

interface skillChartInterface {
  name: string
  percentage: number
  color: string
}

interface skillsInterface {
  name: string
  percentage: number
  color: string
}

interface skillBoxInterface {
  img: any
  title: string
  scale: string
}

interface worksBoxInterface {
  img: string
  title: string
  difficulty: string
  tags: string[]
  about: string
  link: string
  quality: number
}

interface WorkItemInterface {
  data: worksBoxInterface
  key: number
}

interface reviewInterface {
  name: string
  task: string
  comment?: string
  review?: string
  theme: string
  date: string
  status: 'positive' | 'negative' | 'in_process'
}

interface reviewItemInterface {
  data: reviewInterface
}
