import React from 'react'
import HelloSection from '../components/sections/HelloSection'
import SkillsSection from '../components/sections/SkillsSection'
import SkillsChartSection from '../components/sections/SkillChartSection'
import MarqueeSection from '../components/sections/MarqueeSection'

const MainPage = () => {
  return (
    <>
      <HelloSection />
      <SkillsSection />
      <MarqueeSection />
      <SkillsChartSection />
    </>
  )
}

export default MainPage
