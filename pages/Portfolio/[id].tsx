import { WorkPage } from '@/pages/work'
import { getWorks } from '@/shared/utils/getWorks'

export async function getStaticPaths() {
  const works = await getWorks()
  const paths = works.map((work) => {
    return {
      params: { id: work.img },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const works = await getWorks()
  const work = works.find((w) => w.img === params.id)

  if (!work) {
    return { notFound: true }
  }

  return {
    props: { work },
  }
}

export default WorkPage
