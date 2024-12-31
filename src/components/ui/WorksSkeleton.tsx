import React from 'react'
import ContentLoader from 'react-content-loader'

const WorksSkeleton = (props) => (
  <ContentLoader
    speed={2}
    className='work'
    viewBox='0 0 1530 840'
    backgroundColor='#383838'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='48' y='840' rx='9' ry='9' width='1530' height='79' />
    <rect x='0' y='0' rx='21' ry='21' width='1530' height='840' />
  </ContentLoader>
)

export default WorksSkeleton
