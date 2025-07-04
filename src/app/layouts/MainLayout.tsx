import { Outlet } from 'react-router-dom'

import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import '../styles/animations.scss'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='main container'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
