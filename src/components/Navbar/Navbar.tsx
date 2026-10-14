 import { useState } from "react"
import styles from  "./Navbar.module.css"

const Navbar = () => {
  const [isOpen , setIsOpen ] = useState(false)  
  return (
    <nav className={styles.navbar}>
    <div className={styles.topNav}>
        <div className={styles.containerImage}>
        <img src="/assets/img/background1.png" />
        <img src="/assets/img/background-1.png" />
        </div>
        <div className={styles.containerImage2}>
        <img src="/assets/img/background2.png" />
        <img src="/assets/img/background22.png" />
        </div>
        <div className={styles.containerImageMobile}>
        <img src="/assets/img/background-mobile.png" />
        <img src="/assets/img/background-mobile2.png" />
       
        </div>
        <div className={styles.containerCircle}>
        <img className={styles.circle1} src="/assets/img/circle.png" />
        <img className={styles.circle2} src="/assets/img/circle-1.png" />
        </div>
        <div className= {styles.text}>
            <p>Admission is Open, Grab your seat now</p>
            <img src="/assets/img/Icon.png" />
        </div>
    </div>
    <div className={styles.bottomNav}>
        <div className={styles.logo}>
        <img src="/assets/img/logo.png" />
        <h1>Little Learners</h1>
      </div>
      <button className={styles.menuButton} onClick={()=> setIsOpen(!isOpen)}><img src="/assets/img/menuIcon.png" /> </button>
       { <div className={ `${styles.navLink} ${isOpen ? styles.active : ""}`}>
       <ul>
        <li> <a href="#home">Home</a></li>
        <li> <a href="#about">About Us</a></li>
        <li> <a href="#academics">Academics</a></li>
        <li> <a href="#admissions">Admissions</a></li>
        <li> <a href="#student-life">Student Life</a></li>
      </ul>
      <button>Contact</button>
      </div>}
    
    </div>
      
    </nav>
  
  )
}

export default Navbar
