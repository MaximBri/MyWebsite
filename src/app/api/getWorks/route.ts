import { getWorks } from '@/shared/utils/getWorks'
import { NextResponse } from 'next/server'


export async function GET() {
  const works = getWorks()
  return NextResponse.json(works)
}
