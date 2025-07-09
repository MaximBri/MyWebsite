import { WorksSection } from '@/features/main/works'
import { Achievements } from '@/features/portfolio/achievements'
import ScrollAnimation from '@/shared/utils/ScrollAnimation'

export const PortfolioPage = () => {
  ScrollAnimation()
  return (
    <>
      <WorksSection />
      <Achievements />
    </>
  )
}
