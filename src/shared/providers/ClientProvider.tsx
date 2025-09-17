'use client'

import { MainProvider } from '@/shared/context/MainContext'
import { ReactNode } from 'react'

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <MainProvider>{children}</MainProvider>
}
