import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import { getDataToSendMessages } from '@/shared/utils/getDataToSendMessages'
import { useMainContext } from '../context/MainContext'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { getWorks } from '@/shared/utils/getWorks'
import '../styles/animations.scss'

export const MainLayout = () => {
  const { setChatId, setToken, works, setWorks } = useMainContext()

  const setDataInStore = async () => {
    const [data] = await getDataToSendMessages()
    setChatId(data.chat_id)
    setToken(data.token)
  }

  const getAndSetWorks = async () => {
    const data = await getWorks()
    setWorks(data)
  }

  useEffect(() => {
    setDataInStore()
  }, [])

  useEffect(() => {
    if (!works) {
      getAndSetWorks()
    }
  }, [works])

  // useScrollAnimation('animation', 0.8)

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
