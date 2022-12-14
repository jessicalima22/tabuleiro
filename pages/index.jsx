import Board from '../components/board'
import Line from '../components/line'
import Square from '../components/square'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  )
}
