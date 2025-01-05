import React from 'react'

import './Review.scss'

const Review: React.FC<reviewItemInterface> = ({
  data: { task, review, date },
}) => {
  return (
    <li className='review'>
      <h3 className='review__task'>
        Техническое задание:
        <br /> {task}
      </h3>
      <blockquote className='review__text'>
        Отзыв: <i>{review}</i>
      </blockquote>
      <h3 className='review__date'>
        {date}
      </h3>
    </li>
  )
}

export default Review
