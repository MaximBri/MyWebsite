import Link from 'next/link'
import './Footer.scss'
import { GithubLink, TgLink } from '@/shared/data/private'
import Image from 'next/image'
const githubSVG = `/images/globals/github.svg`

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <Link className='footer__author' href={TgLink} target='_blank'>
          Разработано <span>@Maxim_Bars</span>
        </Link>
        <Link className='footer__github' href={GithubLink} target='_blank'>
          <Image src={githubSVG} alt='Github' width={30} height={30} />
        </Link>
      </div>
    </footer>
  )
}
