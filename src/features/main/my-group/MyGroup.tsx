import { Link } from 'react-router-dom'
import { TgGroupLink } from '@/shared/data/private'
import tgSvg from './icons/tg.svg'
import megaphoneSvg from './icons/megaphone.svg'
import windSvg from './icons/wind.svg'
import circleSvg from './icons/circle.svg'
import bigCircleSvg from './icons/circle-big.svg'
import './MyGroup.scss'

export const MyGroup = () => {
  return (
    <section className='my-group__header'>
      <div id='animation' className='fade-in-left'>
        <h2 className='title'>Моё сообщество в Telegram</h2>
        <div className='dot'></div>
      </div>
      <div id='animation' className='my-group fade-in-top'>
        <Link className='my-group__link' to={TgGroupLink} target='_blank'>
          <img src={tgSvg} alt='telegram' />
        </Link>
        <div className='my-group__texts'>
          <h3 className='my-group__texts-title'>Записки фронтендера</h3>
          <p className='my-group__texts-subtitle'>
            Вещаю о фронтенд разработке и не только
          </p>
          <Link
            className='my-group__texts-button'
            to={TgGroupLink}
            target='_blank'
          >
            Присоединиться
          </Link>
        </div>
        <div className='my-group__images'>
          <img
            className='my-group__images-megaphone'
            src={megaphoneSvg}
            alt='decor'
          />
          <img className='my-group__images-wind' src={windSvg} alt='decor' />
          <img
            className='my-group__images-circle'
            src={circleSvg}
            alt='circle'
          />
          <img
            className='my-group__images-circle--big'
            src={bigCircleSvg}
            alt='big circle'
          />
        </div>
      </div>
    </section>
  )
}
