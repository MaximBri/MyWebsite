import { FC, useEffect, useState } from 'react'
import './ImageCreator.scss'

export const ImageCreator: FC<{ link: string; close: () => void }> = ({
  link,
  close,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClick = () => {
    setIsActive(!isActive)
    setTimeout(() => {
      close()
    }, 300)
  }

  useEffect(() => {
    setIsActive(!isActive)
  }, [])

  return (
    <>
      <div
        className={`creator__background ${!isActive ? 'creator--hidden' : ''}`}
        onClick={handleClick}
      ></div>
      <section className={`creator ${!isActive ? 'creator--hidden' : ''}`}>
        <img
          className='creator__image'
          src={`/images/achievements/${link}`}
          alt='sertificate'
        />
      </section>
    </>
  )
}
