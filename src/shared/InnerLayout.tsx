'use client'

import { ReactNode, useEffect } from 'react'
import { useMainContext } from '@/shared/context/MainContext'
import { Header } from '../features/header/Header'
import { Footer } from '../features/footer/Footer'
import { getWorks } from './utils/getWorks'

const InnerLayout = ({ children }: { children: ReactNode }) => {
  const { works, setWorks } = useMainContext()

  const getAndSetWorks = async () => {
    try {
      const data = getWorks()
      setWorks(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!works) {
      getAndSetWorks()
    }
  }, [works])

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV === 'production' &&
      'serviceWorker' in navigator
    ) {
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
      <main className='main container'>
        <div className='wrapper'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default InnerLayout
