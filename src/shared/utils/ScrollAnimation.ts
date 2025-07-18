import { useMainContext } from '@/app/context/MainContext'
import { useEffect } from 'react'

const lazyLoadOnScroll = (className: string, procent: number): void => {
  const contentBlocks = document.querySelectorAll(`#${className}`)
  contentBlocks.forEach((block) => {
    if (block.getBoundingClientRect().top < window.innerHeight * procent) {
      block.classList.add('fade-in')
    } else {
      block.classList.remove('fade-in')
    }
  })
}

const ScrollAnimation = () => {
  const { works } = useMainContext()
  const handleScroll = () => {
    lazyLoadOnScroll('animation', 0.8)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [works])
}

export default ScrollAnimation
