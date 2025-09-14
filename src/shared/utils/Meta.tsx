import Head from 'next/head'
import { FC } from 'react'

type MetaProps = {
  title?: string
  description?: string
  canonical?: string
  image?: string
  url?: string
  twitterCard?: 'summary' | 'summary_large_image'
}

export const Meta: FC<MetaProps> = ({
  title = 'FrontCraft',
  description = 'Искусство Frontend-разработки. Портфолио проектов на React/TypeScript.',
  canonical = 'https://front-craft.ru/',
  image = '/logo.png',
  url = 'https://front-craft.ru/',
  twitterCard = 'summary',
}) => {
  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='author' content='Maxim Bryzgalov' />
      <meta httpEquiv='Content-Language' content='ru' />
      <meta name='theme-color' content='#000000' />
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='React, TypeScript, Redux, Redux Toolkit, MobX, Git, разработка, разработчик, сайт, Frontend, фронтенд, лендинг, вёрстка'
      />

      <meta
        property='og:title'
        content='FrontCraft – Портфолио Frontend-разработчика'
      />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />

      <meta
        name='twitter:title'
        content='FrontCraft – Портфолио Frontend-разработчика'
      />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:card' content={twitterCard} />

      <link rel='icon' href='/favicon.ico' />

      <link rel='canonical' href={canonical} />

      <link rel='stylesheet' href='/fonts/fonts.css' />
      <link rel='manifest' href='/manifest.json' />

      <title>{title}</title>
    </>
  )
}
