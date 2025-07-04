import { Link } from 'react-router-dom'

import './Footer.scss'
import { GithubLink, TgLink } from '@/shared/data/private'
const githubSVG = `/images/globals/github.svg`

export const Footer = () => {
  return (
    <footer className='footer'>
      <Link className='footer__author' to={TgLink} target='_blank'>
        Разработано <span>@Maxim_Bars</span>
      </Link>
      <Link className='footer__github' to={GithubLink} target='_blank'>
        <img src={githubSVG} alt='Github' />
      </Link>
    </footer>
  )
}
