import { Iitem } from '../types/search.d'
import LoadingOrNoSearch from './LoadingOrNoSearch'
import styles from './searchResults.module.scss'
import SearchItem from './SearchItem'
import { cx } from '../styles'
import { useEffect, useRef } from 'react'

interface Props {
  items: Iitem[] | undefined
  index: number
}

const SearchResults = ({ items, index }: Props) => {
  const autoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoRef.current) return

    autoRef.current.scrollIntoView({
      block: 'center',
    })
  }, [index])

  return (
    <div className={styles.ul}>
      <div className={styles.search}>추천 검색어</div>
      <LoadingOrNoSearch />
      {items?.map((searched: Iitem, idx) => (
        <div
          key={searched.trial_id}
          ref={idx === index ? autoRef : null}
          className={cx(styles.item, { [styles.focusedItem]: idx === index })}
        >
          <SearchItem diseaseName={searched.scientific_title_kr} />
        </div>
      ))}
    </div>
  )
}

export default SearchResults
