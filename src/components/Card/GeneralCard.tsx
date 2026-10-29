import styles from "./GeneralCard.module.css"
import Card from "./Card"

type GeneralCardProps = {
    image : string;
    title : string;
    description : string
}

const GeneralCard = ({image , title , description} :GeneralCardProps) => {
  return (
    <Card className={styles.BenifiteCard}>
      <div className={styles.icon}><img src={image} alt="" /></div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{description}</p>
       
    </Card>
  )
}

export default GeneralCard
