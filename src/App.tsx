import './App.css'
import BenifiteCard from './components/Card/BenifiteCard'
import Card from './components/Card/Card'
import TestimonialsCard from './components/Card/TestimonialsCard'
import Container from './components/Container/Container'
import ContainerCard from './components/ContainerCard/ContainerCard'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
import SectionTitle from './components/SectionTitle/SectionTitle'
import Slider from './components/Slider/Slider'
import Benefits from './data/Benifits'
import Testimonials from './data/Testimonials'
import Faq from './data/Faq'
import FaqCard from './components/Card/FaqCard'
import pageCards from './data/pageCards'
import PageCard from './components/Card/PageCard'
import Footer from './components/Footer/Footer'
 
function App() {
 
 
  return (
    <>
     <Navbar />
     <Hero />
     <Section className="BenifiteSection">
     <Container>
      <SectionTitle title="Our Benefits" description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      subtitle= "Children Deserve Bright Future"
     />
     <ContainerCard>
       {Benefits.map((benifite)=> (
        <BenifiteCard key={benifite.id} image={benifite.image} title={benifite.title} description={benifite.description} />
      ))}
     </ContainerCard>
     </Container>
     </Section>
      
      <Section>
        <Container>
          <SectionTitle title="Our Testimonials" description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally." subtitle="Their Happy Words 🤗" />
          <Slider items={Testimonials} renderItem={(testimonial) => <TestimonialsCard image={testimonial.image} description={testimonial.description} title={testimonial.title} />} >
          </Slider>
        </Container>
      </Section>

      <Section className="faqSection">
        <Container>
          <SectionTitle title="Frequently Asked Questions" description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education." subtitle="Solutions For The Doubts" />
          <ContainerCard columns={2}> 
           {Faq.map((que) => (
            <FaqCard key={que.id} question={que.question} answer={que.answer} />
           ))}
          </ContainerCard>
        </Container>
      </Section>
      <Section className='pagecard'>
        <Container>
          <SectionTitle title="Navigate through our Pages" description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school" subtitle="Explore More" />
          <ContainerCard columns={2} >
           {pageCards.map((page) => (
            <PageCard key={page.id} title={page.title} description={page.description} />
           ))}
          </ContainerCard>
        </Container>
      </Section>

      <Footer />
    </>
  )
}

export default App
