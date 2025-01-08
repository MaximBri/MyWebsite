import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../shared/ui/Header'
import BurgerMenu from '../../shared/ui/BurgerMenu'
import Footer from '../../shared/ui/Footer'
import '../styles/Animations.scss'

const MainLayout = () => {
  return (
    <>
      <Header />
      <BurgerMenu />
      <main className='main container'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
