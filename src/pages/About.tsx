import Card from "../components/Card/Card"
import GeneralCard from "../components/Card/GeneralCard"
import MissionVisionCard from "../components/Card/MissionVisionCard"
import TeamCard from "../components/Card/TeamCard/TeamCard"
import Container from "../components/Container/Container"
import ContainerCard from "../components/ContainerCard/ContainerCard"
import HeroPages from "../components/HeroPages/HeroPages"
import HistoryCard from "../components/HistoryCard/HistoryCard"
import Section from "../components/Section/Section"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import Slider from "../components/Slider/Slider"
import Awards from "../data/Awards"
import History from "../data/History"
import Team from "../data/Team"


const About = () => {
  const missionVision =[
    {
      title:"Mission",
      image:"/assets/img/mission.png",
      text:"At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
    },
    {
      title:"Vision",
      image:"/assets/img/vision.png",
      text:"Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
    }
  ]
  return (
    <>
     <HeroPages showContact={false} title="Welcome to Little Learners Academy" shortText="Overview" text="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential." /> 
     <Section className="Mission-Visions" id="missionVission">
      <Container>
      <SectionTitle title="Our Mission & Visions" subtitle="Mission & Visions" description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth." />
      <ContainerCard columns={2} gap={60} medGap={40} smallGap={30}> 
       {
        missionVision.map( (ele , index) => {
          return (
            <MissionVisionCard key={index} title={ele.title} image={ele.image} text={ele.text}  /> 
          )
        })
       }
       </ContainerCard>
      </Container>
       
     </Section>
     <Section className="award-section" id="awards">
      <Container>
           <SectionTitle title="Our Awards and Recognitions" subtitle="Our Achievements" description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students." />\
           <Slider text="8 More Awards" items={Awards} renderItem={(award) => <GeneralCard key={award.id} image={award.image} title={award.title} description={award.description} /> }  />
      </Container>
     </Section>
     <Section>
      <Container>
         <SectionTitle title="Our History" subtitle="Our Progressive Journey" description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment" />
        <Card className="containerHistory">
          <div className="longLine"><div className="border"></div></div>
          {History.map(hisory => {
            return(<HistoryCard key={hisory.id} title={hisory.title} text={hisory.text} year={hisory.year} />)
          })}
        </Card>
      </Container>
     </Section>
     <Section id="teachers">
      <Container>
        <SectionTitle title="Our Team Members" subtitle="Our Teachers With Experties" description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning." />
       <ContainerCard columns={2} gap={50} medGap={40} smallGap={40}>
        {Team.map(team => {
          return (
            <TeamCard key={team.id} name={team.name} image={team.image} degree={team.degree} description={team.description} />
          )
        })}
       </ContainerCard>
      </Container>
     </Section>
    </>
  )
}

export default About
