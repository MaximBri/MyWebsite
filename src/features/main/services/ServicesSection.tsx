import { services, servicesFeatures } from '@/shared/data/services'
import './ServicesSection.scss'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'

export const ServicesSection = () => {
  return (
    <section className='services'>
      <SectionTitle title={'Услуги 👇'} />
      <div id='animation' className='services__body fade-in-top'>
        <ul className='services__box'>
          {services.map((item, i) => {
            return <li key={i}>✅ {item}</li>
          })}
        </ul>
        <h2 className='services__subtitle'>Нюансы:</h2>
        <div className='services__features'>
          {servicesFeatures.map((item, i) => {
            return <h3 key={i}>❗️ {item}</h3>
          })}
        </div>
      </div>
    </section>
  )
}
