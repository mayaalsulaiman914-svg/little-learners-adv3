import Card from "../Card"
import styles from "./AdmissionCard.module.css"

interface admissionCardProps {
    num : string,
    title : string,
    description : string
}
const AdmissionCard = ({num , title , description} : admissionCardProps) => {
  return (
    <Card className={styles.admissionCard}>
      <div className={styles.containerShape}>
        <div className={styles.shape}>
            <div className={styles.circle}></div>
            <div className={styles.line}><span></span></div>
             <div className= {`${styles.line} ${styles.two}`}><span></span></div>
        </div>
        <Card className={styles.card}>{num}</Card>
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
       
    </Card>
  )
}

export default AdmissionCard
