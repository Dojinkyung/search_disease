import { useSelector } from 'react-redux'

import useSearch from '../Search/useSearch'
import { RootState } from '../../redux/store'
import highlightedText from '../Highlighted'
import { SearchIcon } from '../../assets/svgs'
import { Iitem } from '../../types/search.d'
import styles from './item.module.scss'

const SearchItem = () => {
  const inputSearch = useSelector((state: RootState) => state.searchReducer.searchString)
  const { items, isLoading } = useSearch(inputSearch)
  if (inputSearch && isLoading) {
    return <div className={styles.loadingAndError}>Loading...</div>
  }
  if (items?.length === undefined) {
    return <div className={styles.loadingAndError}>검색어 없음</div>
  }
  if (items && inputSearch) {
    return (
      <div>
        <ul>
          {items.map((searched: Iitem) => (
            <li key={searched.sickCd} className={styles.diseaseList}>
              <SearchIcon />
              <p className={styles.title}>{highlightedText(searched.sickNm, inputSearch)}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return null
}
export default SearchItem
