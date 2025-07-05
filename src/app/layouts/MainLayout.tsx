import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import { getDataToSendMessages } from '@/shared/utils/getDataToSendMessages'
import { useMainContext } from '../context/MainContext'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import '../styles/animations.scss'

export const MainLayout = () => {
  const { setChatId, setToken } = useMainContext()

  const setDataInStore = async () => {
    const [data] = await getDataToSendMessages()
    setChatId(data.chat_id)
    setToken(data.token)
  }

  useEffect(() => {
    setDataInStore()
  }, [])

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
