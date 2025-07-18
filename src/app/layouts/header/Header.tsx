import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { createPortal } from 'react-dom'

import { navRoutes } from '@/shared/data/navRoutes'
import { GithubLink } from '@/shared/data/private'
import { routes } from '@/shared/config/routes'
import { BurgerMenu } from '../burger/BurgerMenu'
import './Header.scss'
import '../burger/BurgerMenu.scss'
const logo = '/images/globals/Logo-light.png'
const githubSVG = '/images/globals/github.svg'

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const location = useLocation()

  const header = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      '.header__nav-link.active'
    ) as HTMLElement
    if (activeLink && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = activeLink
      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`
      indicatorRef.current.style.width = `${offsetWidth}px`
    }
  }, [location.pathname])

  useEffect(() => {
    if (header.current) header.current.classList.remove('unvisible')
  }, [])

  return (
    <>
      <header ref={header} className='header unvisible'>
        <div className='header__left'>
          <Link to={routes.home}>
            <img src={logo} alt='Logo' className='header__logo' />
          </Link>
          <div>
            Frontend
            <div className='header__fire'></div>
          </div>
        </div>
        {!isMobile && (
          <nav className='header__nav' ref={navRef}>
            {navRoutes.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                end
                className={({ isActive }) =>
                  `header__nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link className='header__github' to={GithubLink} target='_blank'>
              <img src={githubSVG} alt='github' />
            </Link>
            <div className='header__indicator' ref={indicatorRef} />
          </nav>
        )}
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
