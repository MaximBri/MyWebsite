import { FC } from 'react'

import { routes } from '@/shared/config/routes'
import './NotFound.scss'
import Link from 'next/link'

export const NotFound: FC = () => {
  return (
    <div className='NF'>
      <h1 className='NF__title'>404</h1>
      <p className='NF__subtitle'>Данная страница не существует :(</p>
      <Link className='NF__button' href={routes.home}>
        На главную
      </Link>
    </div>
  )
}
