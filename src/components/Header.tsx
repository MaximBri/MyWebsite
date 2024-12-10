import React, { LegacyRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getBurger, setBurgerWindow } from '../rtk/slices/WindowsSlice'
import logo from '../data/globals/Logo-light.png'
import githubSVG from '../data/globals/github.svg'
import '../scss/header.scss'
import '../scss/ui/burger.scss'

const Header: React.FC = () => {
  const burgerIsOpen = useSelector(getBurger)
  const dispatch = useDispatch()
  const [width, setWidth] = React.useState<number>(window.innerWidth)
  const header: LegacyRef<HTMLElement> = React.useRef(null)

  React.useEffect(() => { 
    const f = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', f)
    return () => {
      window.removeEventListener('resize', f)
    }
  }, [])
  // анимация появления хэдера
  React.useEffect(() => { 
    if(header) header.current.className = 'header'
  }, [header])

  return (
    <header ref={header} className='header unvisible'>
      <div className='header__left'>
        <img src={logo} alt='Logo' className='header_logo' />
        <div>
          Frontend-разработка
          <div className='header_fire'></div>
        </div>
      </div>
      <nav className='header__nav'>
        <NavLink className='header_link' to='/'>
          Главная
        </NavLink>
        <NavLink className='header_link' to='/About'>
          О мне
        </NavLink>
        <NavLink className='header_link' to='/Works'>
          Работы
        </NavLink>
        <NavLink className='header_link' to='/Contacts'>
          Контакты
        </NavLink>
        <NavLink className='header_github' to='https://github.com/MaximBri'>
          <img src={githubSVG} alt='github' />
        </NavLink>
      </nav>
      {width < 768 && (
        <div
          className='burger_open'
          onClick={() => dispatch(setBurgerWindow(!burgerIsOpen))}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </header>
  )
}

export default Header
