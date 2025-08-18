import type { AppProps } from 'next/app'
import { MainLayout } from '@/app/layouts/MainLayout'
import '@/app/styles/Globals.scss'
import { MainProvider } from '@/app/context/MainContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MainProvider>
    </>
  )
}
