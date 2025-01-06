import React from 'react'

import './HelloSection.scss'

const browser = `${process.env.PUBLIC_URL}/images/hello/browser-web-development-svgrepo-com.svg`
const html = `${process.env.PUBLIC_URL}/images/hello/html5-svgrepo-com.svg`
const webDevelopment = `${process.env.PUBLIC_URL}/images/hello/web-development-svgrepo-com.svg`
const wordpress = `${process.env.PUBLIC_URL}/images/hello/wordpress-svgrepo-com.svg`

const HelloSection = () => {
  const helloText = '✌️ Привет, меня зовут Максим, я - Frontend разработчик.'
  const subtitle =
    'Я занимаюсь разработкой Frontend части приложений. Больше обо мне ниже 👇'

  return (
    <section className='hello'>
      <h2 className='title'>{helloText}</h2>
      <h1 className='hello__subtitle'>{subtitle}</h1>
      <img className='hello__browser' src={browser} alt='browser' />
      <img className='hello__web' src={webDevelopment} alt='web development' />
      <img className='hello__html' src={html} alt='html' />
      <img className='hello__wp' src={wordpress} alt='wordpress' />
    </section>
  )
}

export default HelloSection
