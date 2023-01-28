import Search from '../components'
import styles from './page.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Search />
      <aside>
        <a href='https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=3033869'>
          질병관리청_ 임상연구 DB를 이용하여 임상연구
        </a>
      </aside>
    </div>
  )
}

export default App
