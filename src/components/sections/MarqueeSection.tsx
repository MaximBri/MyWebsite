import React from 'react'
import '../../scss/ui/marquee.scss'

const MarqueeSection = () => {
  let words: string =
    ' Frontend  Вёрстка  Создание сайтов  HTML  CSS  JS  React  Git '
  for (let i = 0; i < 3; i++) words += words
  return (
    <section className='marquee'>
      <ul className='marquee__content'>
        {words.split('  ').map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </section>
  )
}

export default MarqueeSection
