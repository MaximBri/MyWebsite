import { LinkForm } from '@/features/main/link-form'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import './LinkSection.scss'

export const LinkSection = () => {
  return (
    <section className='link'>
      <SectionTitle title={'Для связи со мной'} />
      <div className='link__wrapper'>
        <LinkForm />
      </div>
    </section>
  )
}
