import { useSelector } from 'react-redux'
import { SearchIcon } from '../assets/svgs'
import { RootState } from '../redux/store'
import highlightedText from './Highlighted'
import styles from './searchItem.module.scss'

interface Props {
  diseaseName: string
}

const SearchItem = ({ diseaseName }: Props) => {
  const inputSearch = useSelector((state: RootState) => state.searchReducer.searchString)

  return (
    <a href={`https://www.google.com/search?q=${diseaseName}`} className={styles.items}>
      <SearchIcon className={styles.icon} />
      {highlightedText(diseaseName, inputSearch)}
    </a>
  )
}
export default SearchItem
