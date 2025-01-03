import React from 'react'
import { Link } from 'react-router-dom'

import LinkForm from '../ui/LinkForm'
import '../../scss/ui/link.scss'

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
