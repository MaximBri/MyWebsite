import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import BurgerMenu from '../components/ui/BurgerMenu'

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
