import type { AppProps } from 'next/app'
import { MainLayout } from '@/app/layouts/MainLayout'
import '@/app/styles/Globals.scss'
import { MainProvider } from '@/app/context/MainContext'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Maxim Bryzgalov' />
        <meta http-equiv='Content-Language' content='ru' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Искусство Frontend-разработки в каждом пикселе. Портфолио проектов на React/TypeScript с упором на оптимизацию, чистую архитектуру и UX.'
        />
        <meta
          name='keywords'
          content='React, TypeScript, Redux, Redux Toolkit, MobX, Git, разработка, разработчик, сайт, Frontend, фронтенд, лендинг, вёртска'
        />
        <title>FrontCraft</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://front-craft.ru/' />
        <link rel='stylesheet' href='/fonts/fonts.css' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <MainProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MainProvider>
    </>
  )
}
