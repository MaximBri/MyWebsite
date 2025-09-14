'use client'
import { MainProvider } from '@/shared/context/MainContext'
import InnerLayout from '@/shared/InnerLayout'
import { ReactNode } from 'react'
import '@/shared/styles/Globals.scss'
import '@/shared/styles/Animations.scss'
import '@/shared/styles/Reset.css'

export default function MainLayoutWrapper({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='ru'>
      <body>
        <MainProvider>
          <InnerLayout>{children}</InnerLayout>
        </MainProvider>
      </body>
    </html>
  )
}
