import { FC, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowSvg from './icons/right-arrow.svg'
import './Carousel.scss'

export const Carousel: FC<{ paths: string[]; filesPath: string }> = ({
  paths,
  filesPath,
}) => {
  const moreRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)

  const handleSelect = (newIndex: number) => {
    if (newIndex === activeIndex) return
    setDirection(newIndex > activeIndex ? 1 : -1)
    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const slideElement = slideRef.current
    const wrapperElement = wrapperRef.current

    if (!slideElement || !wrapperElement) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height)
      }
    })

    resizeObserver.observe(slideElement)

    return () => {
      resizeObserver.disconnect()
    }
  }, [activeIndex])

  useEffect(() => {
    const el = moreRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (!e.shiftKey && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  const hasPrev = activeIndex > 0
  const hasNext = activeIndex < paths.length - 1

  const activePath = paths[activeIndex]
  const isVideo = activePath.match(/\.(mp4|webm|ogg)$/i)

  return (
    <section className='carousel'>
      <div
        ref={wrapperRef}
        className='carousel__wrapper'
        style={{ height: containerHeight }}
      >
        {hasPrev && (
          <button
            className='carousel__button carousel__button--prev'
            onClick={() => handleSelect(activeIndex - 1)}
          >
            <img
              src={ArrowSvg}
              alt='left arrow'
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>
        )}
        {hasNext && (
          <button
            className='carousel__button carousel__button--next'
            onClick={() => handleSelect(activeIndex + 1)}
          >
            <img src={ArrowSvg} alt='left arrow' />
          </button>
        )}

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activePath}
            ref={slideRef}
            custom={direction}
            variants={{
              enter: (dir) => ({
                x: dir > 0 ? '100%' : '-100%',
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
              },
              exit: (dir) => ({
                x: dir > 0 ? '-100%' : '100%',
                opacity: 0,
              }),
            }}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.3 }}
            className='carousel__slide'
          >
            {isVideo ? (
              <video
                src={`${filesPath}${activePath}`}
                controls
                className='carousel__video'
              />
            ) : (
              <img
                src={`${filesPath}${activePath}`}
                alt={`media-${activeIndex}`}
                className='carousel__image'
                onLoad={() => {
                  if (slideRef.current) {
                    setContainerHeight(slideRef.current.clientHeight)
                  }
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div ref={moreRef} className='carousel__more'>
        {paths.map((path, idx) => {
          const thumbIsVideo = path.match(/\.(mp4|webm|ogg)$/i)
          return (
            <button
              key={path}
              onClick={() => handleSelect(idx)}
              className={`carousel__more-item ${
                idx === activeIndex
                  ? 'carousel__more-item--active'
                  : 'carousel__more-item--unactive'
              }`}
            >
              {thumbIsVideo ? (
                <video
                  src={`${filesPath}${path}`}
                  className='carousel__more-thumb'
                />
              ) : (
                <img
                  src={`${filesPath}${path}`}
                  alt={`thumb-${idx}`}
                  className='carousel__more-thumb'
                />
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}
