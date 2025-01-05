import React from 'react'
import { Link } from 'react-router-dom'

import { reviews, updatesDate } from '../../../shared/data/reviews'
import Review from './components/Review'
import './ReviewsPage.scss'

export const ReviewsPage = () => {
  return (
    <section className='reviews'>
      <h2 className='reviews__title title'>
        Отзывы с биржи Kwork <span>*</span>
      </h2>
      <div className='dot'></div>
      <ul className='reviews__box'>
        {reviews.map((item, i) => {
          return <Review data={item} key={i} />
        })}
      </ul>
      <h3 className='reviews__original'>
        Оригинал отзывов можно посмотреть{' '}
        <Link to='https://kwork.ru/user/maxim_bars'>тут</Link> (клац)
      </h3>
      <h4 className='reviews__about'>
        Немного пояснений о количестве отзывов:
      </h4>
      <p className='reviews__about-text'>
        Примерно половина заказов происходит через Telegram, поэтому отзывов не
        так много, относительно количества заказов. Кроме этого, некоторые
        заказчики "теряются" ещё на этапе выполнения заказа.
      </p>
      <h4 className='reviews__spec'><span>*</span> Данные актуальны на момент {updatesDate}.</h4>
    </section>
  )
}
