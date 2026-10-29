import EventCard from "../components/Card/EventCard/EventCard"
import GeneralCard from "../components/Card/GeneralCard"
import Container from "../components/Container/Container"
import ContainerCard from "../components/ContainerCard/ContainerCard"
import HeroPages from "../components/HeroPages/HeroPages"
import Section from "../components/Section/Section"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import activities from "../data/activities"
import events from "../data/events"

 

const StudentLife = () => {
const supports =[
  {
    id:1,
    image:"assets/img/support.png",
    title:"Counseling",
    description:"Professional counselors offer guidance and support to students, addressing their emotional and social well-being."
  },
  {
    id:2,
    image:"assets/img/support1.png",
    title:"Learning Support",
    description:"Our educators provide additional assistance to students who may require extra support in their academic journey."
  },
  {
    id:3,
    image:"assets/img/support2.png",
    title:"Parent-Teacher Collaboration",
    description:"We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."
  }
]
  return (
    <>
      <HeroPages showContact={false} title="Embracing Learning with Discovery and Joy" shortText="Enriching Student Life" text="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development." />
      <Section>
        <Container>
           <SectionTitle title="Extracurricular Activities" subtitle="Our Features" description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including" />
           <ContainerCard columnGap={40} rowGap={50} medGap={40} smallGap={40}>
            {activities.map(activity => {
              return (
                <GeneralCard key={activity.id} title={activity.title} image={activity.image} description={activity.description} />
              )
            })}
           </ContainerCard>
        </Container>
      </Section>
      <Section className="students">
        <Container>
            <SectionTitle title="Events & Celebrations" subtitle="Our Features" description="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include" />
            <ContainerCard gap={50} medGap={40} smallGap={40}>
                {events.map((event)=> {
                    return(
                        <EventCard key={event.id} image={event.image} title={event.title} description={event.description} />
                    )
                })}
            </ContainerCard>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="Student Support" subtitle="Our Achievements" description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include" />
          <ContainerCard gap={40} medGap={30} smallGap={40}>
                {supports.map(support => {
                  return(
                    <GeneralCard key={support.id} image={support.image} title={support.title} description={support.description} />
                  )
                })}
          </ContainerCard>
        </Container>
      </Section>
    </>
  )
}

export default StudentLife
