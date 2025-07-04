import { HelloSection } from './sections/HelloSection'
import MarqueeSection from './sections/MarqueeSection'
import LinkSection from './sections/LinkSection'
import SkillsSection from '@/widgets/skills/SkillsSection'
import ServicesSection from './sections/ServicesSection'
import ScrollAnimation from '@/shared/utils/ScrollAnimation'

export const MainPage = () => {
  ScrollAnimation()
  return (
    <>
      <HelloSection />
      <SkillsSection />
      <MarqueeSection />
      <ServicesSection />
      <LinkSection />
    </>
  )
}
