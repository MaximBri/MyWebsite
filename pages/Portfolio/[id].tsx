import { WorkPage } from '@/pages/work'
import { getWorks } from '@/shared/utils/getWorks'

export async function getStaticPaths() {
  try {
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
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export async function getStaticProps({ params }) {
  try {
    const works = await getWorks()
    const work = works.find((w) => w.img === params.id)

    if (!work) {
      return { notFound: true }
    }

    return {
      props: { work },
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default WorkPage
