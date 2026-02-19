'use client'

import { MainProvider } from '@/shared/context/MainContext'
import { LazyMotion, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MainProvider>{children}</MainProvider>
    </LazyMotion>
  )
}
