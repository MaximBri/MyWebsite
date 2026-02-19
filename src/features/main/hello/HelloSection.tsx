'use client'

import Image from 'next/image'
import './HelloSection.scss'
import { useFadeIn } from '@/shared/lib/animations'

const browser = `/images/hello/browser-web-development-svgrepo-com.svg`
const html = `/images/hello/html5-svgrepo-com.svg`
const webDevelopment = `/images/hello/web-development-svgrepo-com.svg`
const wordpress = `/images/hello/react.svg`

export const HelloSection = () => {
  const titleRef = useFadeIn('left')
  const subtitleRef = useFadeIn('right')

  const helloText = '✌️ Привет, меня зовут Максим, я — Frontend разработчик.'
  const subtitle =
    'Делаю интерфейсы на React / Next.js + TypeScript, умею в бэкенд и DevOps. Больше обо мне ниже 👇'

  return (
    <section className='hello'>
      <h2 ref={titleRef} className='title'>
        {helloText}
      </h2>
      <h1 ref={subtitleRef} className='hello__subtitle'>
        {subtitle}
      </h1>
      <Image
        className='hello__browser'
        width={70}
        height={70}
        src={browser}
        alt='browser'
      />
      <Image
        width={70}
        height={70}
        className='hello__web'
        src={webDevelopment}
        alt='web development'
      />
      <Image
        width={70}
        height={70}
        className='hello__html'
        src={html}
        alt='html'
      />
      <Image
        width={70}
        height={70}
        className='hello__wp'
        src={wordpress}
        alt='react'
      />
    </section>
  )
}
