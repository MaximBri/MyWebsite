import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'
const githubSVG = `${process.env.PUBLIC_URL}/images/globals/github.svg`;

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
        <img src={githubSVG} alt='Github' />
      </Link>
    </footer>
  )
}

export default Footer
