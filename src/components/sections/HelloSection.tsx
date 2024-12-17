import React from 'react'

const HelloSection = () => {
  const helloText = 'Привет, меня зовут Максим и я - Frontend разработчик.'
  const [currentHelloText, setCurrentHelloText] = React.useState('')
  const [index, setIndex] = React.useState(0) 

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index < helloText.length) {
        setCurrentHelloText((prevText) => prevText + helloText.charAt(index))
        setIndex((prevIndex) => prevIndex + 1) 
      } else clearInterval(interval)
    }, 80)

    return () => clearInterval(interval)
  }, [index])

  return <h2>{currentHelloText}</h2>
}

export default HelloSection
