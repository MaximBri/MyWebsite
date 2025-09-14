'use client'

import { WorksSection } from '@/features/main/works'
import { Achievements } from '@/features/portfolio/achievements'
import { Meta } from '@/shared/utils/Meta'

const PortfolioPage = () => {
  return (
    <>
      <Meta title='FrontCraft | Мои работы' />
      <WorksSection />
      <Achievements />
    </>
  )
}

export default PortfolioPage