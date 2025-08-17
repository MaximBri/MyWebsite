
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

  return (
    <>
      <Header />
      <main className='main container'>{children}</main>
      <Footer />
    </>
  )
}
