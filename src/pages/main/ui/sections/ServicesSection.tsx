import React from 'react'

import { services, servicesFeatures } from '../../../../shared/data/services'
import './ServicesSection.scss'

const ServicesSection = () => {
  return (
    <section className='services'>
      <div id='animation' className='fade-in-left'>
        <h2 className='title'>Услуги 👇</h2>
        <div className='dot'></div>
      </div>
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

export default ServicesSection
