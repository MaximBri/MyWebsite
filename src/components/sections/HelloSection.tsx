import React from 'react'

import '../../scss/ui/hello.scss'

const HelloSection = () => {
  const helloText = '✌️ Привет, меня зовут Максим, я - Frontend разработчик.'
  const subtitle = 'Я занимаюсь разработкой Frontend части приложений. Больше обо мне ниже 👇'
  
  return (
    <section className='hello'>
      <h2 className='hello_title title'>{helloText}</h2>
      <h1 className='hello_subtitle'>{subtitle}</h1>
    </section>
  )
}

export default HelloSection
