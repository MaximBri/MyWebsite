import React from 'react'
import HelloSection from '../components/sections/HelloSection'
import SkillsSection from '../components/sections/SkillsSection'
import SkillsChartSection from '../components/sections/SkillChartSection'
import MarqueeSection from '../components/sections/MarqueeSection'
import LinkSection from '../components/sections/LinkSection'

const MainPage = () => {
  return (
    <>
      <HelloSection />
      <SkillsSection />
      <MarqueeSection />
      <SkillsChartSection />
      <LinkSection />
    </>
  )
}

export default MainPage
