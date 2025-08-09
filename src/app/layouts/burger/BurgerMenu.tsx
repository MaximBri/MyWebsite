import { NavLink } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'

import { navRoutes } from '@/shared/data/navRoutes'
import { GithubLink } from '@/shared/data/private'
import Image from 'next/image'
const githubSVG = '/images/globals/github.svg'

export const BurgerMenu: FC<{ close: () => void }> = ({ close }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    setTimeout(() => {
      close()
    }, 300)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <section className={isOpen ? 'burger open' : 'burger'}>
        <div className='burger__list'>
          <button onClick={handleClick} title='close' className='burger__lock'>
            <div></div>
            <div></div>
          </button>
          {navRoutes.map((item, i) => {
            return (
              <NavLink
                key={i}
                onClick={handleClick}
                className='burger__link'
                to={item.path}
              >
                {item.name}
              </NavLink>
            )
          })}
          <NavLink className='burger__github' to={GithubLink} target='_blank'>
            <Image src={githubSVG} alt='github' />
          </NavLink>
        </div>
      </section>
      {isOpen && <div className='burger__bg' onClick={handleClick}></div>}
    </>
  )
}
