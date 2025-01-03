import React from 'react'
import '../../scss/ui/marquee.scss'

const MarqueeSection = () => {
  let words: string =
    ' Frontend  Вёрстка  Создание сайтов  HTML  CSS  JS  React  Git '
  words = words.repeat(3)

  return (
    <section className='marquee'>
      <div className='marquee__container'>
        <ul className='marquee__content'>
          {words.split('  ').map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
        <ul className='marquee__content'>
          {words.split('  ').map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>
    </section>
  )
}

export default MarqueeSection
