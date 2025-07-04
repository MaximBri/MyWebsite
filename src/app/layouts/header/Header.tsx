import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { routes as navRoutes } from '@/shared/data/routes'
import { GithubLink } from '@/shared/data/private'
import { routes } from '@/shared/config/routes'
import './Header.scss'
import '../burger/BurgerMenu.scss'
import { useMediaQuery } from 'react-responsive'
import { createPortal } from 'react-dom'
import { BurgerMenu } from '../burger/BurgerMenu'
const logo = '/images/globals/Logo-light.png'
const githubSVG = '/images/globals/github.svg'

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const header = useRef<HTMLElement>(null)

  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (header) header.current.className = 'header'
  }, [header])

  return (
    <>
      <header ref={header} className='header unvisible'>
        <div className='header__left'>
          <Link to={routes.home}>
            <img src={logo} alt='Logo' className='header__logo' />
          </Link>
          <div>
            Frontend-разработка
            <div className='header__fire'></div>
          </div>
        </div>
        <nav className='header__nav'>
          {navRoutes.map((item, i) => {
            return (
              <NavLink className='header__nav-link' to={item.path} key={i}>
                {item.name}
              </NavLink>
            )
          })}
          <Link className='header__github' to={GithubLink} target='_blank'>
            <img src={githubSVG} alt='github' />
          </Link>
        </nav>
        {isMobile && (
          <div className='burger--open' onClick={() => setBurgerIsOpen(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </header>
      {burgerIsOpen &&
        createPortal(
          <BurgerMenu close={() => setBurgerIsOpen(false)} />,
          document.body
        )}
    </>
  )
}
