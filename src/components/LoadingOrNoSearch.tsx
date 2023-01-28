import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import useSearch from '../services/useSearch'
import styles from './loadingOrNoSearch.module.scss'

const LoadingOrNoSearch = () => {
  const inputSearch = useSelector((state: RootState) => state.searchReducer.searchString)
  const { items, isLoading } = useSearch(inputSearch)
  if (inputSearch && isLoading) {
    return <div className={styles.loadingAndError}>Loading...</div>
  }
  if (items?.length === 0) {
    return <div className={styles.loadingAndError}>검색어 없음</div>
  }
  return null
}
export default LoadingOrNoSearch
