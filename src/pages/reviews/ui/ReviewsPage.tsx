import React from 'react'
import { Link } from 'react-router-dom'

import { reviews, updatesDate } from '../../../shared/data/reviews'
import { KworkLink } from '../../../shared/data/private'
import Review from './components/Review'
import ScrollAnimation from '../../../widgets/animation/ScrollAnimation'
import './ReviewsPage.scss'

export const ReviewsPage = () => {
  ScrollAnimation()
  const addReviewsOnClick = 4
  const [curReviews, setCurReviews] = React.useState(4)
  return (
    <section className='reviews'>
      <div id='animation' className='fade-in-left'>
        <h2 className='reviews__title title'>
          Отзывы с биржи Kwork <span>*</span>
        </h2>
        <div className='dot'></div>
      </div>
      <ul className='reviews__box'>
        {reviews.slice(0, curReviews).map((item, i) => {
          return <Review data={item} key={i} />
        })}
      </ul>
      {curReviews !== reviews.length && (
        <div className='reviews__box-button'>
          <button
            className='reviews__add-button'
            onClick={() =>
              curReviews + addReviewsOnClick > reviews.length
                ? setCurReviews(reviews.length)
                : setCurReviews(curReviews + addReviewsOnClick)
            }
          >
            Показать ещё
          </button>
        </div>
      )}
      <h3 className='reviews__original'>
        Оригинал отзывов можно посмотреть{' '}
        <Link to={`${KworkLink}#reviews`} target='_blank'>
          тут
        </Link>{' '}
        (клац)
      </h3>
      <h4 className='reviews__about'>
        Немного пояснений о количестве отзывов:
      </h4>
      <p className='reviews__about-text'>
        Примерно половина заказов происходит через Telegram, поэтому отзывов не
        так много, относительно количества заказов. Кроме этого, некоторые
        заказчики "теряются" ещё на этапе выполнения заказа.
      </p>
      <h4 className='reviews__spec'>
        <span>*</span> Данные актуальны на момент {updatesDate}.
      </h4>
    </section>
  )
}
