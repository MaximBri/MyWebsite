'use client'

import { Experience } from '@/features/main/experience'
import { HelloSection } from '@/features/main/hello'
import { LinkSection } from '@/features/main/link'
import { MarqueeSection } from '@/features/main/marquee'
import { ServicesSection } from '@/features/main/services'
import { SkillsSection } from '@/features/main/skills'
import { Meta } from '@/shared/utils/Meta'

const MainPage = () => {
  return (
    <>
      <Meta title='FrontCraft | Главная' />
      <HelloSection />
      <SkillsSection />
      <MarqueeSection />
      <ServicesSection />
      <Experience />
      <LinkSection />
    </>
  )
}

export default MainPage
