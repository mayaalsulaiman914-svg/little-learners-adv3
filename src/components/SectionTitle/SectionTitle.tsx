import styles from "./SectionTitle.module.css"

type SectionTitleProps = {
    title : string ;
    description : string ;
    subtitle : string
}
const SectionTitle = ({title  , description , subtitle} : SectionTitleProps) => {
  return (
    <div className={styles.headingTitle}>
      <div className={styles.shortTitle}>{subtitle}</div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default SectionTitle
