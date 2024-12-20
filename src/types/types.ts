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

interface worksBoxInterface{
  img: string,
  title: string,
  difficulty: string
}

interface WorkItemInterface{
  data: worksBoxInterface,
  key: number
}
