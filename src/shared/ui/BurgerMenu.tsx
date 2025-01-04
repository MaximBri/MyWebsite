import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getBurger, setBurgerWindow } from '../../app/store/slices/WindowsSlice'
import { routes } from '../data/routes'
const githubSVG = '/images/globals/github.svg'

const BurgerMenu = () => {
  const dispatch = useDispatch()
  const burgerIsOpen = useSelector(getBurger)
  return (
    <>
      <section className={burgerIsOpen ? 'burger open' : 'burger'}>
        <div className='burger__list'>
          <button
            onClick={() => dispatch(setBurgerWindow(false))}
            title='close'
            className='burger_lock'
          >
            <div></div>
            <div></div>
          </button>
          {routes.map((item, i) => {
            return (
              <NavLink
                key={i}
                onClick={() => dispatch(setBurgerWindow(false))}
                className='burger__link'
                to={item.path}
              >
                {item.name}
              </NavLink>
            )
          })}
          <NavLink className='burger__github' to='https://github.com/MaximBri'>
            <img src={githubSVG} alt='github' />
          </NavLink>
        </div>
      </section>
      {burgerIsOpen && (
        <div
          className='burger-bg'
          onClick={() => dispatch(setBurgerWindow(false))}
        ></div>
      )}
    </>
  )
}

export default BurgerMenu
