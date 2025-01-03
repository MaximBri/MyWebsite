import React from 'react'
import { Link } from 'react-router-dom'

import githubSvg from '../data/globals/github.svg'
import '../scss/footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <Link
        className='footer__author'
        to='https://t.me/Maxim_Bars'
        target='_blank'
      >
        Разработано <span>@Maxim_Bars</span>
      </Link>
      <Link
        className='footer__github'
        to='https://github.com/MaximBri'
        target='_blank'
      >
        <img src={githubSvg} alt='Github' />
      </Link>
    </footer>
  )
}

export default Footer
