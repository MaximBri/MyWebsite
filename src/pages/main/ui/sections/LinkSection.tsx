import React from 'react'

import LinkForm from '../components/LinkForm'
import './LinkSection.scss'

const LinkSection = () => {
  return (
    <section className='link'>
      <div id='animation' className='fade-in-left'>
        <h2 className='title'>Для связи со мной</h2>
        <div className='dot'></div>
      </div>
      <div id='animation' className='link__wrapper fade-in-top'>
        <LinkForm />
      </div>
    </section>
  )
}

export default LinkSection
