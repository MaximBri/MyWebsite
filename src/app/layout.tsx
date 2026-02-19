import InnerLayout from '@/shared/InnerLayout'
import { ReactNode } from 'react'
import ClientProvider from '@/shared/providers/ClientProvider'
import '@/shared/styles/Globals.scss'
import '@/shared/styles/Reset.css'

export default function MainLayoutWrapper({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='ru'>
      <body>
        <ClientProvider>
          <InnerLayout>{children}</InnerLayout>
        </ClientProvider>
      </body>
    </html>
  )
}
