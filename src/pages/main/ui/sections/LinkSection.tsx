import React from 'react'

import LinkForm from '../components/LinkForm'
import './LinkSection.scss'

const LinkSection = () => {
  return (
    <section className='link'>
      <h2 className='title'>Для связи со мной</h2>
      <div className='dot'></div>
      <div className='link__wrapper'>
        <LinkForm />
      </div>
    </section>
  )
}

export default LinkSection