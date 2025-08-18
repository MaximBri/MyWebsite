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
        <meta httpEquiv='Content-Language' content='ru' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Искусство Frontend-разработки в каждом пикселе. Портфолио проектов на React/TypeScript с упором на оптимизацию, чистую архитектуру и UX.'
        />
        <meta
          name='keywords'
          content='React, TypeScript, Redux, Redux Toolkit, MobX, Git, разработка, разработчик, сайт, Frontend, фронтенд, лендинг, вёрстка'
        />

        <meta
          property='og:title'
          content='FrontCraft – Портфолио Frontend-разработчика'
        />
        <meta
          property='og:description'
          content='Искусство Frontend-разработки в каждом пикселе. Портфолио проектов на React/TypeScript с упором на оптимизацию, чистую архитектуру и UX.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://front-craft.ru/' />
        <meta property='og:image' content='/logo.png' />

        <meta
          name='twitter:title'
          content='FrontCraft – Портфолио Frontend-разработчика'
        />
        <meta
          name='twitter:description'
          content='Искусство Frontend-разработки в каждом пикселе. Портфолио проектов на React/TypeScript с упором на оптимизацию, чистую архитектуру и UX.'
        />
        <meta name='twitter:image' content='/logo.png' />

        <link rel='icon' href='/favicon.ico' />

        <link rel='canonical' href='https://front-craft.ru/' />

        <link rel='stylesheet' href='/fonts/fonts.css' />
        <link rel='manifest' href='/manifest.json' />

        <title>FrontCraft</title>
      </Head>
      <MainProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MainProvider>
    </>
  )
}
