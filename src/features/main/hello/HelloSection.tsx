import './HelloSection.scss'

const browser = `/images/hello/browser-web-development-svgrepo-com.svg`
const html = `/images/hello/html5-svgrepo-com.svg`
const webDevelopment = `/images/hello/web-development-svgrepo-com.svg`
const wordpress = `/images/hello/react.svg`

export const HelloSection = () => {
  const helloText = '✌️ Привет, меня зовут Максим, я - Frontend разработчик.'
  const subtitle =
    'Я занимаюсь разработкой визуальной части приложений. Больше обо мне ниже 👇'

  return (
    <section className='hello'>
      <h2 id='animation' className='title fade-in-btm'>
        {helloText}
      </h2>
      <h1 id='animation' className='hello__subtitle fade-in-right'>
        {subtitle}
      </h1>
      <img className='hello__browser' src={browser} alt='browser' />
      <img className='hello__web' src={webDevelopment} alt='web development' />
      <img className='hello__html' src={html} alt='html' />
      <img className='hello__wp' src={wordpress} alt='react' />
    </section>
  )
}
