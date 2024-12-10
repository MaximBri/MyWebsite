import React from 'react'
import { Link } from 'react-router-dom'

import githubSvg from '../data/globals/github.svg'
import '../scss/footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <h2>Все права защищены</h2>
      <Link to='https://github.com/MaximBri'>
        <img src={githubSvg} alt='Github' />
      </Link>
    </footer>
  )
}

export default Footer
