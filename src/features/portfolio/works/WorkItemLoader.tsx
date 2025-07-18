import ContentLoader from 'react-content-loader'

export const WorkItemLoader = (props) => (
  <ContentLoader
    speed={0.5}
    width='100%'
    // height={177}
    height={props.height || 'auto'}
    preserveAspectRatio='xMinYMin meet'
    viewBox='0 0 270 177'
    backgroundColor='#383838ff'
    foregroundColor='#696969ff'
    {...props}
  >
    <rect x='0' y='0' rx='8' ry='8' width='80%' height='30' />
    <rect x='0' y='47' rx='14' ry='14' width='100%' height='128' />
  </ContentLoader>
)
