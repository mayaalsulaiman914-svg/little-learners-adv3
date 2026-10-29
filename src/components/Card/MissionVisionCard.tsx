import Card from "./Card"
import styles from "./MissionVisionCard.module.css"

interface MissionVisionProps {
    title : string,
    image : string,
    text : string
}
const MissionVisionCard = ({title , image , text} : MissionVisionProps) => {
  return (
    <Card className={styles.misVisCard}>
      <div className= {styles.title}>
        <h2>{title}</h2>
        <img src={image} alt="image-card" /> 
      </div>
      <p className={styles.desc}>{text}</p>
    </Card>
  )
}

export default MissionVisionCard
