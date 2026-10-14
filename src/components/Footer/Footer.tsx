import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerLogo}>
        <div className={styles.text}>
            <div className={styles.title}>
                <img src="/assets/img/logo.png" />
                <h2>Little Learners</h2>
            </div>
            <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            <div className={styles.containerIcons}>
                <div className={styles.backgroundIcon}><img src="/assets/img/email.png" /></div>
                <p>hello@littlelearners.com</p>
            </div>
            <div className={styles.containerIcons}>
                <div className={styles.backgroundIcon}><img src="/assets/img/phone.png" /></div>
                <p>+91 91813 23 2309</p>
            </div>
            <div className={styles.containerIcons}>
                <div className={styles.backgroundIcon}><img src="/assets/img/location.png" /></div>
                <p>Somewhere in the World</p>
            </div>
        </div>
        <div className={styles.links}>
            <div className={styles.one}>
                <div className={styles.group}>
                    <h3>Home</h3>
                    <ul>
                        <li>Features</li>
                        <li>Our Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={styles.group}>
                    <h3>About Us</h3>
                    <ul>
                        <li>Our Mission</li>
                        <li>Our Vission</li>
                        <li>Awards and Recognitions</li>
                        <li>Teachers</li>
                    </ul>
                </div>
            </div>
            <div className={styles.one}>
                <div className={styles.group}>
                    <h3>Academics</h3>
                    <ul>
                        <li>Special Features</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className={styles.group}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Information</li>
                        <li>Map & Direction</li>
                    </ul>
                </div>
            </div>
            
        </div>
      </div>
      <div className={styles.footerSocial}>
        <div className={styles.one}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
        </div>
        <div className={styles.two}>
         <div className={styles.backgroundIcon}><img src="/assets/img/face.png" /></div>
         <div className={styles.backgroundIcon}><img src="/assets/img/tweet.png" /></div>
         <div className={styles.backgroundIcon}><img src="/assets/img/linked.png" /></div>
        </div>
      </div>
      <p className={styles.footerRights}>Copyright © [2023] Little Learners Academy. All rights reserved.</p>

    </div>
  )
}

export default Footer
