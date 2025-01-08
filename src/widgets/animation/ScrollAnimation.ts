import React, { useEffect } from 'react'

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
  useEffect(() => {
    const handleScroll = () => {
      lazyLoadOnScroll('animation', 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default ScrollAnimation
