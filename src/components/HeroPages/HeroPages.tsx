import styles from './HeroPages.module.css'

interface HeroInterface {
    title : string,
    shortText : string,
    text:string,
    showContact : boolean,
    id?:string

}
const HeroPages = ({ title, shortText , text , showContact=false } : HeroInterface) => {
  return (
    <div className={styles.heroPage}>
      <img className={styles.imageHero} src='/assets/img/hero-img.png' alt='hero image' />
       <div className={styles.title}>
            <p className={styles.shortText}>{shortText}</p>
            <h1>{title}</h1>
       </div>
      <div className={styles.text}>
         <p className={styles.desc}>{text}</p>
         <div className={styles.containerContact}>
          {showContact && <div className={styles.contact}><div className={styles.squre}><img src="assets/img/email.png"/> </div><p>hello@littlelearners.com</p></div> }
          {showContact && <div className={styles.contact}><div className={styles.squre}><img src="assets/img/phone.png"/> </div><p>+91 91813 23 2309</p></div> }
          {showContact && <div className={styles.contact}><div className={styles.squre}><img src="assets/img/location.png"/></div><p>Somewhere in the World</p></div> }
          {showContact && <div className={styles.contact}><div className={styles.squre}><img src="assets/img/clock.png"/></div><p>Office Hours - 9am - 6 pm</p></div> }
         </div>
      </div>
      
    </div>
  )
}

export default HeroPages
