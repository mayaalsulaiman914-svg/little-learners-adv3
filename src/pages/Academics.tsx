import { useState } from "react"
import Button from "../components/Button/Button"
import ContainerBtns from "../components/Button/ContainerBtns"
import Container from "../components/Container/Container"
import GallerySlider from "../components/GallerySlider/GallerySlider"
import HeroPages from "../components/HeroPages/HeroPages"
import Section from "../components/Section/Section"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import { ClassRooms, Computers, gardens, Library, Sceince } from "../data/galleryData"
import ContainerCard from "../components/ContainerCard/ContainerCard"
import features from "../data/features"
import GeneralCard from "../components/Card/GeneralCard"
import why from "../data/why"
import WhyCard from "../components/Card/WhyCard/WhyCard"

 

const Academics = () => {
const[activeCategory , setActiveCategory] = useState("all")
const Categories =[
    {name: "All", value:"all"},
    {name:  "Classrooms",value:"classrooms"},
    {name: "Library", value:"library"},
    {name: "Science Lab", value:"Science lab"},
    {name: "Computer Lab", value:"computer lab",},
    {name:"Garden and Nature Area" , value:"garden and nature area"}
     
]
const sections=[
    {name: ClassRooms ,value:"classrooms"},
    {name: Library , value:"library"},
     {name: Sceince , value:"Science lab"},
    {name: Computers, value:"computer lab",},
   {name:gardens , value:"garden and nature area"}
]
const filterdSections = activeCategory === "all" ? sections : sections.filter((section) => section.value ===activeCategory )
  return (
    <>
      <HeroPages showContact={false} title="Nurturing Young Minds for Success" shortText="Academics" text="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration." />
        <Section id="specialFeatures">
        <Container>
          <SectionTitle title="Our Special Features" subtitle="Our Features" description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!" />
          <ContainerCard rowGap={60} columnGap={40} medGap={40} smallGap={40}>
            {features.map(feature => {
              return (
                <GeneralCard key={feature.id} image={feature.image} title={feature.title} description={feature.description} />
              )
            })}
          </ContainerCard>
        </Container>
       </Section>
       <Section>
        <Container>
           <SectionTitle title="What Students Learn" subtitle="Our Features" description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include" />
         <ContainerCard gap={50} medGap={40} smallGap={40}>
          {why.map(item => {
            return(
              <WhyCard image={item.image} title={item.title} description={item.description} key={item.id} />
            )
          })}
         </ContainerCard>
        </Container>
       </Section>
       <Section id="gallery">
        <Container>
            <SectionTitle title="Our Rooms Gallery" subtitle="Our Gallery" description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school." />
              <ContainerBtns>
                 {Categories.map((category) => {
                return (<Button key={category.value} value={category.value} name={category.name} onClick={()=> setActiveCategory(category.value)} />)
              })}
              </ContainerBtns>

              {filterdSections.map((section) => (
                <GallerySlider section ={section.name} key={section.value} />
              ))}
        </Container>
       </Section>
       
    </>
  )
}

export default Academics
