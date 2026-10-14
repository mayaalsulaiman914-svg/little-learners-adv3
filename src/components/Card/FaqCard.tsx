import { useState } from "react"
import styles from "./FaqCard.module.css"

type FaqCardProps = {
    question :string ,
    answer : string
}
const FaqCard = ({question , answer} : FaqCardProps) => {
 const[isOpen , setIsOpen] = useState(false)
 const toggleAnswer = () => {
    setIsOpen(!isOpen)
 }
  return (
    <div className={styles.faqCard}>
       <div className={styles.containerTitle}>
        <h2 className={styles.title}>{question}</h2>
        <button className={styles.containerIcon} onClick={toggleAnswer} aria-expanded={isOpen} aria-label={isOpen ? "Hide answer" : "Show answer"}>{isOpen ? "-" : "+"}</button>
         
       </div>
      {isOpen && <p className={styles.desc}>{answer}</p>}
    </div>
  )
}

export default FaqCard
