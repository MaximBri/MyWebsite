'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { navRoutes } from '@/shared/data/navRoutes'
import { GithubLink } from '@/shared/data/private'
import { routes } from '@/shared/config/routes'
import { BurgerMenu } from '../burger/BurgerMenu'
import './Header.scss'
import '../burger/BurgerMenu.scss'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const logo = '/favicons/favicon-128x128.png'
const githubSVG = '/images/globals/github.svg'

export const Header = () => {
  const isMobile = useMediaQuery(768)
  const pathname = usePathname()

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
  }, [pathname])

  useEffect(() => {
    if (header.current) header.current.classList.remove('unvisible')
  }, [])

  return (
    <>
      <header ref={header} className='header unvisible'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link href={routes.home}>
              <Image
                src={logo}
                width={85}
                height={60}
                alt='Logo'
                className='header__logo'
              />
            </Link>
            <div>
              Web-разработка
              <div className='header__fire'></div>
            </div>
          </div>
          {!isMobile && (
            <nav className='header__nav' ref={navRef}>
              {navRoutes.map((item, i) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={i}
                    href={item.path}
                    className={`header__nav-link${isActive ? ' active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link className='header__github' href={GithubLink} target='_blank'>
                <Image src={githubSVG} width={35} height={35} alt='github' />
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
        </div>
      </header>
      {burgerIsOpen &&
        createPortal(
          <BurgerMenu close={() => setBurgerIsOpen(false)} />,
          document.body
        )}
    </>
  )
}
