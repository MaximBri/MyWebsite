import { NavLink } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'

import { routes } from '@/shared/data/routes'
import { GithubLink } from '@/shared/data/private'
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
          {routes.map((item, i) => {
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
            <img src={githubSVG} alt='github' />
          </NavLink>
        </div>
      </section>
      {isOpen && <div className='burger__bg' onClick={handleClick}></div>}
    </>
  )
}
