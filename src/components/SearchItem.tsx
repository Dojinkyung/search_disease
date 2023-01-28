import { useSelector } from 'react-redux'
import { SearchIcon } from '../assets/svgs'
import { RootState } from '../redux/store'
import { cx } from '../styles'
import highlightedText from './Highlighted'
import styles from './searchItem.module.scss'

interface Props {
  diseaseName: string
  isFocus: boolean
}

const SearchItem = ({ diseaseName, isFocus }: Props) => {
  const inputSearch = useSelector((state: RootState) => state.searchReducer.searchString)

  return (
    <li className={cx(styles.item, { [styles.focusedItem]: isFocus })}>
      <SearchIcon />
      <button type='button' className={styles.items}>
        <a href={`https://www.google.com/search?q=${diseaseName}`}>{highlightedText(diseaseName, inputSearch)}</a>
      </button>
    </li>
  )
}
export default SearchItem
