import styles from './Hero.module.css'

const Hero = () => {

  return (
      <div className={styles.hero}>
      <div className={styles.imageHero}>
        <div className={styles.backgroundImg}></div>
        <img className={styles.kids} src='/assets/img/imageHero.png' /> 
        <img className={styles.circleImage} src='/assets/img/circleHero.png' />
        <div className={`${styles.circle} ${styles.one}`}></div>
        <div className={`${styles.circle} ${styles.two}`}></div>
        <div className={`${styles.circle} ${styles.three}`}></div>
        <div className={`${styles.circle} ${styles.four}`}></div>
        <div className={styles.imageBorder}></div>
      </div>
      <div className={styles.textHero}>
       <div className={styles.title}>
        <span className={styles.welcomeSpan}>Welcome to Little Learners Academy</span>
        <h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span></h1>
       </div>
       <p className={styles.desc}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
       <div className={styles.box}>
        <div className={styles.title}>
            <h2>+7000</h2>
            <p>Students Passed Out</p>
        </div>
        <div className={styles.title}>
            <h2>+37</h2>
            <p>Awards & Recognitions</p>
        </div>
        <div className={styles.title}>
            <h2>+15</h2>
            <p>Experience Educators</p>
        </div>
       </div>
      </div>
    </div>
 

  )
}

export default Hero
