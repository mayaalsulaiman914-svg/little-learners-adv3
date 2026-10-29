import Card from "../Card"
import styles from "./EventCard.module.css"

interface EventCardProps {
    image: string,
    title:string,
    description : string
  
}
const EventCard = ({image , title, description} : EventCardProps) => {
  return (
    <Card className={styles.eventCard}>
      <div className={styles.ContainerImage}>
        <img className={styles.rec} src="assets/img/recta.png" />
        <img className={styles.eventPic} src={image} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  )
}

export default EventCard
