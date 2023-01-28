import debounce from 'lodash.debounce'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchIcon } from '../assets/svgs'
import { setSearchString } from '../redux/slice'
import { RootState } from '../redux/store'
import useSearch from '../services/useSearch'
import styles from './index.module.scss'
import SearchResults from './SearchResults'

const Search = () => {
  const dispatch = useDispatch()
  const inputSearch = useSelector((state: RootState) => state.searchReducer.searchString)
  const { items } = useSearch(inputSearch)
  const [index, setIndex] = useState<number>(-1)

  const handleSelection = (selectedIndex: number) => {
    if (items) {
      const selectedItem = items[selectedIndex]

      if (!selectedItem) return setIndex(selectedIndex)
      window.open(`https://www.google.com/search?q=${selectedItem.scientific_title_kr}`)
    }
    return setIndex(selectedIndex)
  }
  const debouncedResults = useMemo(() => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchString(e.target.value.trim()))
    }
    return debounce(handleChange, 800)
  }, [dispatch])
  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })
  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    const { key } = e
    let nextIndexCount = 0
    if (items) {
      // move down
      if (key === 'ArrowDown') nextIndexCount = (index + 1) % items.length

      // move up
      if (key === 'ArrowUp') nextIndexCount = (index + items.length - 1) % items.length

      // hide search results
      if (key === 'Escape') {
        setIndex(-1)
      }
      // select the current item
      if (key === 'Enter') {
        e.preventDefault()
        handleSelection(index)
      }

      setIndex(nextIndexCount)
    }
  }

  return (
    <main className={styles.centering}>
      <h1 className={styles.title}>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <form className={styles.inputForm} role='presentation' onKeyDown={handleKeyDown}>
        <SearchIcon className={styles.searchIcon} />
        <input
          className={styles.input}
          aria-label='Search'
          type='search'
          placeholder='질환명을 입력해 주세요.'
          onChange={debouncedResults}
        />
      </form>
      {inputSearch && <SearchResults items={items} index={index} />}
    </main>
  )
}
export default Search
