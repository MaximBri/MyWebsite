import './MarqueeSection.scss'

const MarqueeSection = () => {
  let words: string =
    ' Frontend  Вёрстка  Создание сайтов  HTML  CSS  JS  React  Git  TypeScript  CRM  Next.js  Material UI '
  words = words.repeat(3)

  return (
    <section id='animation' className='marquee fade-in-btm '>
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
