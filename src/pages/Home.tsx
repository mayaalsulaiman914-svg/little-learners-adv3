import FaqCard from "../components/Card/FaqCard";
import PageCard from "../components/Card/PageCard";
import TestimonialsCard from "../components/Card/TestimonialsCard";
import Container from "../components/Container/Container";
import ContainerCard from "../components/ContainerCard/ContainerCard";
import HeroHome from "../components/HeroHome/Hero";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Slider from "../components/Slider/Slider";
import Benefits from "../data/Benifits";
import Faq from "../data/Faq";
import pageCards from "../data/pageCards";
import Testimonials from "../data/Testimonials";
import GeneralCard from "../components/Card/GeneralCard";


 
 const Home = ()=> {
   return (
     <>
      <HeroHome />
     <Section id="features" className="BenifiteSection" >
     <Container>
      <SectionTitle title="Our Benefits" description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      subtitle= "Children Deserve Bright Future"
     />
     <ContainerCard rowGap={50} columnGap={40} medGap={40} smallGap={40}>
       {Benefits.map((benifite)=> (
        <GeneralCard key={benifite.id} image={benifite.image} title={benifite.title} description={benifite.description} />
      ))}
     </ContainerCard>
     </Container>
     </Section>
      
      <Section id="testimonials">
        <Container>
          <SectionTitle title="Our Testimonials" description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally." subtitle="Their Happy Words 🤗" />
          <Slider items={Testimonials} renderItem={(testimonial) => <TestimonialsCard image={testimonial.image} description={testimonial.description} title={testimonial.title} />} >
          </Slider>
        </Container>
      </Section>

      <Section className="faqSection" id="faq">
        <Container>
          <SectionTitle title="Frequently Asked Questions" description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education." subtitle="Solutions For The Doubts" />
          <ContainerCard columns={2} rowGap={30} columnGap={50} medColGap={40} medRowGap={24} smallRowGap={20}> 
           {Faq.map((que) => (
            <FaqCard key={que.id} question={que.question} answer={que.answer} />
           ))}
          </ContainerCard>
        </Container>
      </Section>
      <Section className='pagecard'>
        <Container>
          <SectionTitle title="Navigate through our Pages" description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school" subtitle="Explore More" />
          <ContainerCard columns={2} gap={50} medGap={40}  smallGap={40}>
           {pageCards.map((page) => (
            <PageCard key={page.id} title={page.title} description={page.description} />
           ))}
          </ContainerCard>
        </Container>
      </Section>
     </>
   )
 }
 
 export default Home
 