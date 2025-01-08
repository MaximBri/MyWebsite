import React from 'react'

import HelloSection from './sections/HelloSection'
import MarqueeSection from './sections/MarqueeSection'
import LinkSection from './sections/LinkSection'
import SkillsChartSection from './sections/SkillChartSection'
import SkillsSection from '../../../widgets/skills/SkillsSection'
import ServicesSection from './sections/ServicesSection'
import ScrollAnimation from '../../../widgets/animation/ScrollAnimation'

export const MainPage = () => {
  ScrollAnimation()
  return (
    <>
      <HelloSection />
      <SkillsSection />
      <MarqueeSection />
      <SkillsChartSection />
      <ServicesSection />
      <LinkSection />
    </>
  )
}
