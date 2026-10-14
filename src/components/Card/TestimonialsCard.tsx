import Card from "./Card"
import styles from "./TestimonialsCard.module.css"

type TestimonialsCardProps = {
  image : string,
  title : string ,
  description : string
} 
 
 const TestimonialsCard = ({image, title , description} : TestimonialsCardProps) => {
   return (
     <Card className={styles.TestimonialsCard}>
      <div className={styles.containerProfile}>
      <div className={styles.imageProfile}><img src={image} alt="image profile"/></div>
      <h2 className={styles.title}>{title}</h2>
      </div>
      <div><img src="/assets/img/stars.png" alt="image stars" /></div>
      <p className={styles.desc}>{description}</p> 
     </Card>
   )
 }
 
 export default TestimonialsCard
 