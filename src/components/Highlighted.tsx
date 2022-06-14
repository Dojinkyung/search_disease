import styles from './highlighted.module.scss'

const highlightedText = (text: string, query: string) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return (
      <>
        {parts.map((part, index) => {
          const tmp = index
          if (part.toLowerCase() === query.toLowerCase()) {
            return (
              <mark key={tmp} className={styles.marked}>
                {part}
              </mark>
            )
          }
          return part
        })}
      </>
    )
  }

  return text
}
export default highlightedText
