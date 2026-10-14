import styles from "./BenifiteCard.module.css"
import Card from "./Card"

type BenifiteCardProps = {
    image : string;
    title : string;
    description : string
}

const BenifiteCard = ({image , title , description} :BenifiteCardProps) => {
  return (
    <Card className={styles.BenifiteCard}>
      <div className={styles.icon}><img src={image} alt="" /></div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{description}</p>
       
    </Card>
  )
}

export default BenifiteCard
