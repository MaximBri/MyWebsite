import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../data/globals/Logo-light.png'
import '../scss/header.scss'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src={logo} alt='Logo' className='header_logo' />
        <div>Frontend-разработка
          <div className='header_fire'></div>
        </div>
      </div>
      <nav className='header__nav'>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/About'>О мне</NavLink>
        <NavLink to='/Works'>Работы</NavLink>
        <NavLink to='/Contacts'>Контакты</NavLink>
      </nav>
    </header>
  )
}

export default Header
