import NotFound from '@/pages/not-found'
import WorkPage from '@/pages/work'
import { getWorks } from '@/shared/utils/getWorks'

export async function generateStaticParams() {
  const works = getWorks()
  return works.map((work) => ({
    id: work.img,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const works = getWorks()
  const work = works.find((w) => w.img === id)

  if (!work) return <NotFound />

  return <WorkPage work={work} />
}
