import Card from "./Card"
import styles from "./pageCard.module.css"

type pageCardProps = {
    title : string,
    description : string,
}

const PageCard = ({title , description} : pageCardProps) => {
  return (
    <Card className={styles.pageCard}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.containerDash}>
        <div className={`${styles.circle} ${styles.left}`}></div>
        <div className={styles.backgroundDash}><div className={styles.dash}></div></div>
        <div className={styles.backgroundDash}><div className={styles.dash}></div></div>
        <div className={styles.backgroundDash}><div className={styles.dash}></div></div>
        <div className={styles.backgroundDash}><div className={styles.dash}></div></div>
        <div className={styles.backgroundDash}><div className={styles.dash}></div></div>
        <div className={styles.backgroundDash}><div className={styles.dash}></div></div>
         <div className={`${styles.circle} ${styles.right}`}></div>
      </div>
      <p className={styles.desc}>{description}</p>
      <button className={styles.readBtn}> <p>Learn More</p> <img src="/assets/img/right.png" /></button>
    </Card>
  )
}

export default PageCard
