import Card from "../Card"
import styles from "./WhyCard.module.css"
 
interface whyCardProps {
    image: string,
    title: string,
    description : string
}

const WhyCard = ({image , title , description} : whyCardProps) => {
  return (
    <Card className={styles.whyCard}>
      <div className={styles.containerImage}>
        <img className={styles.rec} src="assets/img/rectan.png" />
        <img className={styles.whypic} src={image} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  )
}

export default WhyCard
