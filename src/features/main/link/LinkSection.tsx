'use client'

import { LinkForm } from '@/features/main/link-form'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import './LinkSection.scss'
import { useFadeIn } from '@/shared/lib/animations'

export const LinkSection = () => {
  const ref = useFadeIn('left')

  return (
    <section className='link'>
      <SectionTitle title={'Для связи со мной'} />
      <div ref={ref} className='link__wrapper'>
        <LinkForm />
      </div>
    </section>
  )
}
