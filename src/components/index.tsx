import debounce from 'lodash.debounce'
import { ChangeEvent, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchIcon } from '../assets/svgs'
import { setSearchString } from '../redux/slice'
import { RootState } from '../redux/store'
import useSearch from '../services/useSearch'
import { Iitem } from '../types/search.d'
import highlightedText from './Highlighted'
import LoadingOrNoSearch from './LoadingOrNoSearch'

import styles from './search.module.scss'

const Search = () => {
  const dispatch = useDispatch()
  const inputSearch = useSelector((state: RootState) => state.searchReducer.searchString)
  const { items } = useSearch(inputSearch)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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

  return (
    <main className={styles.centering}>
      <h1 className={styles.title}>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputForm}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.input}
            type='text'
            placeholder='질환명을 입력해 주세요.'
            onChange={debouncedResults}
          />
        </div>
        <button className={styles.button} type='submit'>
          검색
        </button>
      </form>
      {inputSearch && (
        <ul className={styles.ul}>
          <li className={styles.search}>추천 검색어</li>
          <LoadingOrNoSearch />
          {items?.map((searched: Iitem) => (
            <li key={searched.sickCd} className={styles.item}>
              <SearchIcon />
              <p className={styles.items}>{highlightedText(searched.sickNm, inputSearch)}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
export default Search
