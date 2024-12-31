import React from 'react'
import ContentLoader from 'react-content-loader'

const SkillSkeleton = (props) => (
  <ContentLoader
    speed={2}
    className='skill__box_item'
    viewBox='0 0 200 200'
    backgroundColor='#1b1b1b'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='211' y='55' rx='0' ry='0' width='76' height='1' />
    <rect x='5' y='5' rx='19' ry='19' width='190' height='190' />
  </ContentLoader>
)

export default SkillSkeleton
