
import Container from '../components/Container/Container'
import ContainerCard from '../components/ContainerCard/ContainerCard'
import Form from '../components/Form/Form'
import HeroPages from '../components/HeroPages/HeroPages'
import Section from '../components/Section/Section'
import SectionTitle from '../components/SectionTitle/SectionTitle'


const Contact = () => {
  return (
    <>
     <HeroPages id="information" showContact={true} title="Feel Free To Connect With Us" shortText='Contact Us' text='We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods' /> 
    <Section id='map'>
      <Container>
        <SectionTitle title="Student Information" subtitle='Contact Form' description='If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs' />
        <ContainerCard columns={1}>
           <Form />
        </ContainerCard>
      </Container>
    </Section>
    </>
  )
}

export default Contact
