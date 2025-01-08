import React, { useEffect } from 'react'

const lazyLoadOnScroll = (className: string, procent: number): void => {
  const contentBlocks = document.querySelectorAll(`#${className}`)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  contentBlocks.forEach((block) => {
    if (isMobile) {
      block.classList.add('fade-in')
    } else {
      if (block.getBoundingClientRect().top < window.innerHeight * procent) {
        block.classList.add('fade-in')
      } else {
        block.classList.remove('fade-in')
      }
    }
  })
}

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      lazyLoadOnScroll('animation', 0.7)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default ScrollAnimation
