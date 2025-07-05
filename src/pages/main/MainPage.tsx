import { HelloSection } from '@/features/main/hello'
import { LinkSection } from '@/features/main/link'
import { MarqueeSection } from '@/features/main/marquee'
import { ServicesSection } from '@/features/main/services'
import { SkillsSection } from '@/features/main/skills'
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
