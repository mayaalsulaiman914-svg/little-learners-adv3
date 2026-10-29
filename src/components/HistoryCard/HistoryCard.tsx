import Card from '../Card/Card'
import styles from './HistoryCard.module.css'

interface HistoryCardProps {
    year : string,
    title : string ,
    text : string
}

const HistoryCard = ({year , title , text} : HistoryCardProps) => {
  return (
    <div className={styles.historyCard}>
      <div className={styles.containerDate}>
        <div className={styles.shape}>
            <div className= {`${styles.circle} ${styles.one}`}></div>
            <div className={styles.line}>
                <div className={styles.border}></div>
            </div>
            <div className= {`${styles.circle} ${styles.two}`}></div>
        </div>
        <Card className={styles.year}>
            <img src='assets/img/history.png' />
             <p>{year}</p>
        </Card>
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HistoryCard
