import { useEffect } from 'react'

import { getDataToSendMessages } from '@/shared/utils/getDataToSendMessages'
import { useMainContext } from '../context/MainContext'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { getWorks } from '@/shared/utils/getWorks'
import '../styles/Animations.scss'
import '../styles/Globals.scss'
import '../styles/Reset.css'

export const MainLayout = ({ children }) => {
  const { setChatId, setToken, works, setWorks } = useMainContext()

  const setDataInStore = async () => {
    try {
      const [data] = await getDataToSendMessages()
      setChatId(data.chat_id)
      setToken(data.token)
    } catch (error) {
      console.error(error)
    }
  }

  const getAndSetWorks = async () => {
    try {
      const data = await getWorks()
      setWorks(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setDataInStore()
  }, [])

  useEffect(() => {
    if (!works) {
      getAndSetWorks()
    }
  }, [works])

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const swUrl = '/service-worker.js'
      navigator.serviceWorker
        .register(swUrl)
        .then((reg) => {
          console.log('SW registered', reg.scope)
        })
        .catch(console.error)
    }
  }, [])

  return (
    <>
      <Header />
      <main className='main container'>{children}</main>
      <Footer />
    </>
  )
}
