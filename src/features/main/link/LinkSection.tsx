'use client'

import { motion } from 'framer-motion'
import { LinkForm } from '@/features/main/link-form'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import './LinkSection.scss'
import { useFadeIn } from '@/shared/lib/animations'

export const LinkSection = () => {
  const fadeProps = useFadeIn<HTMLDivElement>('left')

  return (
    <section className='link'>
      <SectionTitle title={'Для связи со мной'} />
      <motion.div {...fadeProps} className='link__wrapper'>
        <LinkForm />
      </motion.div>
    </section>
  )
}
