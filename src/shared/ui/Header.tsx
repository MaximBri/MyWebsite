import React, { LegacyRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getBurger, setBurgerWindow } from '../../app/store/slices/WindowsSlice'
import { getWidth } from '../../app/store/slices/WidthSlice'
import { useWidth } from '../hooks/useWidth'
import { routes } from '../data/routes'
import './Header.scss'
import './BurgerMenu.scss'
const logo = `${process.env.PUBLIC_URL}/images/globals/Logo-light.png`
const githubSVG = `${process.env.PUBLIC_URL}/images/globals/github.svg`;

const Header: React.FC = () => {
  const burgerIsOpen = useSelector(getBurger)
  const dispatch = useDispatch()
  const header: LegacyRef<HTMLElement> = React.useRef(null)
  const width = useSelector(getWidth)
  useWidth()
  React.useEffect(() => {
    if (header) header.current.className = 'header'
  }, [header])

  return (
    <header ref={header} className='header unvisible'>
      <div className='header__left'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='header__logo' />
        </Link>
        <div>
          Frontend-разработка
          <div className='header__fire'></div>
        </div>
      </div>
      <nav className='header__nav'>
        {routes.map((item, i) => {
          return (
            <NavLink className='header__nav-link' to={item.path} key={i}>
              {item.name}
            </NavLink>
          )
        })}
        <NavLink className='header__github' to='https://github.com/MaximBri' target='_blank'>
          <img src={githubSVG} alt='github' />
        </NavLink>
      </nav>
      {width < 768 && (
        <div
          className='burger--open'
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
