import { LinkForm } from '@/features/main/link-form'
import './LinkSection.scss'

export const LinkSection = () => {
  return (
    <section className='link'>
      <div id='animation' className='fade-in-left'>
        <h2 className='title'>Для связи со мной</h2>
        <div className='dot'></div>
      </div>
      <div className='link__wrapper'>
        <LinkForm />
      </div>
    </section>
  )
}
