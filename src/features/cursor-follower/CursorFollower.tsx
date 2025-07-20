import React, { useEffect, useRef } from 'react'
import './CursorFollower.scss'

export const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0
    let posX = 0,
      posY = 0
    const speed = 0.15

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // плавное приближение
      posX += (mouseX - posX) * speed
      posY += (mouseY - posY) * speed

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`
      }

      const el = document.elementFromPoint(mouseX, mouseY)
      console.log(el.tagName)
      const isHoverable = el && (el.tagName === 'A' || el.tagName === 'BUTTON')
      if (followerRef.current) {
        followerRef.current.classList.toggle(
          'cursor-follower--hover',
          Boolean(isHoverable)
        )
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div ref={followerRef} className='cursor-follower'>
      <div ref={innerRef} className='cursor-follower__inner' />
    </div>
  )
}
