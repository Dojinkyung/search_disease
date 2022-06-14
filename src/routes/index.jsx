import styles from './Routes.module.scss'
import Search from '../components/Search'

const App = () => {
  return (
    <div className={styles.app}>
      <Search />
    </div>
  )
}

export default App
