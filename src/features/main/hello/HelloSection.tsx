import Image from 'next/image'
import './HelloSection.scss'
import { useInViewAnimation } from '@/shared/hooks/useInViewAnimation'

const browser = `/images/hello/browser-web-development-svgrepo-com.svg`
const html = `/images/hello/html5-svgrepo-com.svg`
const webDevelopment = `/images/hello/web-development-svgrepo-com.svg`
const wordpress = `/images/hello/react.svg`

export const HelloSection = () => {
  const titleRef = useInViewAnimation<HTMLHeadingElement>('fade-in-btm')
  const subtitleRef = useInViewAnimation<HTMLHeadingElement>('fade-in-right')

  const helloText = '✌️ Привет, меня зовут Максим, я - Frontend разработчик.'
  const subtitle =
    'Я занимаюсь разработкой визуальной части приложений. Больше обо мне ниже 👇'

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
