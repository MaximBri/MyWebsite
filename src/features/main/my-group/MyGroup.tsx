import { TgGroupLink } from '@/shared/data/private'
import tgSvg from './icons/tg.svg'
import megaphoneSvg from './icons/megaphone.svg'
import windSvg from './icons/wind.svg'
import circleSvg from './icons/circle.svg'
import bigCircleSvg from './icons/circle-big.svg'
import './MyGroup.scss'
import Link from 'next/link'
import Image from 'next/image'

export const MyGroup = () => {
  return (
    <section className='my-group__header'>
      <div id='animation' className='fade-in-left'>
        <h2 className='title'>Моё сообщество в Telegram</h2>
        <div className='dot'></div>
      </div>
      <div id='animation' className='my-group fade-in-top'>
        <Link className='my-group__link' href={TgGroupLink} target='_blank'>
          <Image src={tgSvg} alt='telegram' />
        </Link>
        <div className='my-group__texts'>
          <h3 className='my-group__texts-title'>Записки фронтендера</h3>
          <p className='my-group__texts-subtitle'>
            Вещаю о фронтенд разработке и не только
          </p>
          <Link
            className='my-group__texts-button'
            href={TgGroupLink}
            target='_blank'
          >
            Присоединиться
          </Link>
        </div>
        <div className='my-group__images'>
          <Image
            className='my-group__images-megaphone'
            src={megaphoneSvg}
            alt='decor'
          />
          <Image className='my-group__images-wind' src={windSvg} alt='decor' />
          <Image
            className='my-group__images-circle'
            src={circleSvg}
            alt='circle'
          />
          <Image
            className='my-group__images-circle--big'
            src={bigCircleSvg}
            alt='big circle'
          />
        </div>
      </div>
    </section>
  )
}
