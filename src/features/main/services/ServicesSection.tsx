'use client'

import { services } from '@/shared/data/services'
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle'
import { useFadeIn } from '@/shared/lib/animations'
import './ServicesSection.scss'

export const ServicesSection = () => {
  return (
    <section className='services'>
      <SectionTitle title={'Что могу 👇'} />
      <ul className='services__grid'>
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </ul>
    </section>
  )
}

const ServiceCard = ({ service }: { service: (typeof services)[number] }) => {
  const ref = useFadeIn('right')

  return (
    <li ref={ref} className='services__card'>
      <img
        className='services__card-icon'
        src={`/images/skills/${service.icon}`}
        alt={service.title}
      />
      <h3 className='services__card-title'>{service.title}</h3>
      <p className='services__card-description'>{service.description}</p>
    </li>
  )
}
