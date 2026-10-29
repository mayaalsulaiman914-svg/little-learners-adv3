import Card from "../Card"
import styles from "./TeamCard.module.css"

interface TeamCardProps {
    image: string,
    name: string,
    degree: string,
    description: string
} 

const TeamCard = ({image , name, degree, description} : TeamCardProps) => {
  return (
    <Card className={styles.teamCard}>
      <div className={styles.intro}>
        <div className={styles.name}>
            <img src={image} alt="profile pic" />
            <h2>{name}</h2>
        </div>
        <div className={styles.email}>
            <img src="assets/img/email.png" alt="email" />
        </div>
      </div>
      <div className={styles.desc}>
        <h3>{degree}</h3>
        <p>{description}</p>
      </div>
    </Card>
  )
}

export default TeamCard
