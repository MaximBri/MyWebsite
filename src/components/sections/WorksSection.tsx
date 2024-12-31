import React from 'react'
import { worksBox } from '../../data/worksBox'
import WorksSkeleton from '../ui/WorksSkeleton'
import WorkItem from '../ui/WorkItem'
import '../../scss/ui/works.scss'

const stringsForSort: string[] = ['по рейтингу', 'по алфавиту', 'по сложности']

const WorksSection = () => {
  const [images, setImages] = React.useState({})
  const [loading, setLoading] = React.useState<boolean>(true)
  const [openSort, setOpenSort] = React.useState<boolean>(false)
  const [search, setSeatch] = React.useState<string>('')
  const [curSearch, setCurSearch] = React.useState<string>('')
  const [sort, setSort] = React.useState<string>(stringsForSort[0])

  const changeSort = (newSort: string) => {
    setSort(newSort)
    setOpenSort(false)
  }

  const sortRaiting = (a: worksBoxInterface, b: worksBoxInterface) => {
    return b.quality - a.quality
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

  React.useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setCurSearch(search)
    }, 300)
    return () => clearTimeout(debounceTimer)
  }, [search])

  React.useEffect(() => {
    const importImages = async () => {
      try {
        const importedImages = await Promise.all(
          worksBox.map(async (file) => {
            try {
              const image = await import(`../../data/works/${file.img}.png`)
              return { [file.img]: image.default }
            } catch (error) {
              console.warn(`Image "${file.img}.png" not found. Skipping...`)
              return { [file.img]: null }
            }
          })
        )
        const imagesMap = importedImages.reduce(
          (acc, item) => ({ ...acc, ...item }),
          {}
        )
        setImages(imagesMap)
      } catch (error) {
        console.error('Error importing images:', error)
      } finally {
        setLoading(false)
      }
    }
    importImages()
  }, [])

  const works = React.useMemo(() => {
    return worksBox.map((item) => ({
      ...item,
      img: images[item.img] || null,
    }))
  }, [images])

  const sortedWorks = React.useMemo(() => {
    let sorted = [...works]
    if (sort === stringsForSort[0]) {
      sorted.sort((a, b) => sortRaiting(a, b))
    } else if (sort === stringsForSort[1]) {
      sorted.sort((a, b) => sortAlfabet(a, b))
    } else if (sort === stringsForSort[2]) {
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
      console.log(sorted, curSearch)
    }
    return sorted
  }, [sort, works, curSearch])

  return (
    <section className='works'>
      <h2 className='title'>Мои работы</h2>
      <div className='dot'></div>
      <div className='works__wrapper'>
        <div>
          <nav className='works__navigation'>
            <input
              type='search'
              value={search}
              onChange={(e) => setSeatch(e.target.value)}
              className='works_search'
              placeholder='Поиск по ключевым словам'
            />
            <button
              onMouseEnter={() => setOpenSort(true)}
              onMouseLeave={() => setOpenSort(false)}
              className='works__filter'
            >
              Сортировка: {sort}
              {openSort && (
                <ul className='works__sort_list'>
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
          {!loading
            ? sortedWorks.map((item, i) => {
                return <WorkItem data={item} key={i} />
              })
            : Array.from({ length: 3 }).map((_, index) => (
                <WorksSkeleton key={index} />
              ))}
              {!loading && sortedWorks.length === 0 && curSearch && <h2 className='works__not-found'>По вашему запросу ничего не найдено :(</h2>}
        </ul>
      </div>
    </section>
  )
}

export default WorksSection
