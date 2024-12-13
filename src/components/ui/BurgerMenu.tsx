import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getBurger, setBurgerWindow } from '../../rtk/slices/WindowsSlice'
import githubSVG from '../../data/globals/github.svg'

const BurgerMenu = () => {
  const dispatch = useDispatch()
  const burgerIsOpen = useSelector(getBurger)
  return (
    <>
      <section className={burgerIsOpen ? 'burger open' : 'burger'}>
        <div className='burger__list'>
          <button onClick={() => dispatch(setBurgerWindow(false))} title='close' className='burger_lock'>
            <div></div>
            <div></div>
          </button>
          <NavLink className='burger_link' to='/'>
            Главная
          </NavLink>
          <NavLink className='burger_link' to='/About'>
            О мне
          </NavLink>
          <NavLink className='burger_link' to='/Works'>
            Работы
          </NavLink>
          <NavLink className='burger_link' to='/Contacts'>
            Контакты
          </NavLink>
          <NavLink className='burger_github' to='https://github.com/MaximBri'>
            <img src={githubSVG} alt='github' />
          </NavLink>
        </div>
      </section>
      {burgerIsOpen && <div className='burger-bg' onClick={() => dispatch(setBurgerWindow(false))}></div>}
    </>
  )
}

export default BurgerMenu
