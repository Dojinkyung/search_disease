import { ChangeEvent, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'

import styles from './search.module.scss'
import useSearch from './useSearch'
import { setSearchString } from '../../redux/slice'
import { RootState } from '../../redux/store'
import { SearchIcon } from '../../assets/svgs'
import SearchItem from '../item/Item'

const Search = () => {
  const dispatch = useDispatch()
  const searchString = useSelector((state: RootState) => state.searchReducer.searchString)

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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  useSearch(searchString)

  return (
    <div className={styles.centering}>
      <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.input}>
          <SearchIcon />
          <input type='text' placeholder='질환명을 입력해 주세요.' onChange={debouncedResults} />
        </div>
        <button type='submit'>검색</button>
      </form>
      <SearchItem />
    </div>
  )
}

export default Search
