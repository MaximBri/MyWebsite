import { LinkForm } from '@/features/main/link-form'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import './LinkSection.scss'
import { useInViewAnimation } from '@/shared/hooks/useInViewAnimation'

export const LinkSection = () => {
  const blockRef = useInViewAnimation<HTMLDivElement>('fade-in-top', 0.9)

  return (
    <section className='link'>
      <SectionTitle title={'Для связи со мной'} />
      <div ref={blockRef} className='link__wrapper'>
        <LinkForm />
      </div>
    </section>
  )
}
