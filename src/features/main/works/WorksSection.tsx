import { useEffect, useMemo, useState } from 'react'

import { worksBox, worksBoxLength } from '@/shared/data/worksBox'
import { WorkItem } from '@/features/portfolio/works'
import './WorksSection.scss'

const stringsForSort: string[] = ['по алфавиту ⬆️', 'по сложности ⬇️']

export const WorksSection = () => {
  let countWorksInArray = worksBoxLength
  const showedWorksInMobile = 4
  const addWorksOnClick = 4
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [search, setSeatch] = useState<string>('')
  const [curSearch, setCurSearch] = useState<string>('')
  const [sort, setSort] = useState<string>(stringsForSort[1])
  const [countWorks, setCountWorks] = useState<number>(showedWorksInMobile)

  const changeSort = (newSort: string) => {
    setSort(newSort)
    setOpenSort(false)
  }

  const sortAlfabet = (a: worksBoxInterface, b: worksBoxInterface) => {
    return a.title.localeCompare(b.title)
  }

  const sortDifficulty = (a: worksBoxInterface, b: worksBoxInterface) => {
    const difficultyOrder = { низкая: 1, средняя: 2, высокая: 3 }
    return (
      difficultyOrder[b.difficulty.toLowerCase()] -
      difficultyOrder[a.difficulty.toLowerCase()]
    )
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setCurSearch(search)
    }, 300)
    return () => clearTimeout(debounceTimer)
  }, [search])

  const sortedWorks = useMemo(() => {
    let sorted = [...worksBox]
    if (sort === stringsForSort[0]) {
      sorted.sort((a, b) => sortAlfabet(a, b))
    } else if (sort === stringsForSort[1]) {
      sorted.sort((a, b) => sortDifficulty(a, b))
    }
    if (curSearch) {
      sorted = sorted.filter(
        (item) =>
          item.title.toLowerCase().includes(curSearch.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(curSearch.toLowerCase())
          )
      )
      countWorksInArray = sorted.length
    } else {
      countWorksInArray = worksBoxLength
    }
    if (countWorksInArray !== countWorks) {
      sorted = sorted.slice(0, countWorks)
    }
    return sorted
  }, [sort, worksBox, curSearch, countWorks, countWorksInArray])

  return (
    <section className='works'>
      <div id='animation' className='fade-in-left'>
        <h2 className='title'>Мои работы</h2>
        <div className='dot'></div>
      </div>
      <div className='works__wrapper'>
        <div>
          <nav className='works__navigation'>
            <input
              type='search'
              value={search}
              onChange={(e) => setSeatch(e.target.value)}
              className='works__search'
              placeholder={
                window.innerWidth > 1024 ? 'Поиск по ключевым словам' : 'Поиск'
              }
            />
            <button
              onMouseEnter={() => setOpenSort(true)}
              onMouseLeave={() => setOpenSort(false)}
              className='works__filter'
            >
              Сортировка: {sort}
              {openSort && (
                <ul
                  className='works__sort-list'
                >
                  {stringsForSort.map((item, i) => {
                    return (
                      <li onClick={() => changeSort(item)} key={i}>
                        {item}
                      </li>
                    )
                  })}
                </ul>
              )}
            </button>
          </nav>
        </div>
        <ul className='works__box'>
          {sortedWorks.map((item, i) => {
            return <WorkItem data={item} key={i} />
          })}
          {sortedWorks.length === 0 && curSearch && (
            <h2 className='works__not-found'>
              По вашему запросу ничего не найдено :(
            </h2>
          )}
        </ul>
        {countWorksInArray !== sortedWorks.length && (
          <div className='works__show'>
            <button
              className='works__show-more'
              onClick={() =>
                setCountWorks(
                  countWorks + addWorksOnClick > countWorksInArray
                    ? countWorksInArray
                    : countWorks + addWorksOnClick
                )
              }
            >
              Показать больше
            </button>
          </div>
        )}
      </div>
    </section>
  )
}