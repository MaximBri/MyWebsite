import { useInViewAnimation } from '@/shared/hooks/useInViewAnimation'
import './MarqueeSection.scss'

export const MarqueeSection = () => {
  const blockRef = useInViewAnimation('fade-in-btm')

  let words: string =
    ' Frontend  Вёрстка  Создание сайтов  HTML  CSS  JS  React  Git  TypeScript  CRM  Next.js  Material UI '
  words = words.repeat(3)

  return (
    <section ref={blockRef} className='marquee'>
      <div className='marquee__wrapper'>
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
      </div>
    </section>
  )
}
