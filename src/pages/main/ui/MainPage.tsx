import { HelloSection } from '@/features/main/hello'
import { LinkSection } from '@/features/main/link'
import { MarqueeSection } from '@/features/main/marquee'
import { MyGroup } from '@/features/main/my-group'
import { ServicesSection } from '@/features/main/services'
import { SkillsSection } from '@/features/main/skills'
import { Meta } from '@/shared/utils/Meta'

export const MainPage = () => {
  return (
    <>
      <Meta title='FrontCraft | Главная' />
      <HelloSection />
      <SkillsSection />
      <MarqueeSection />
      <ServicesSection />
      <MyGroup />
      <LinkSection />
    </>
  )
}
