import AdmissionCard from "../components/Card/AdmissionCard/AdmissionCard"
import Card from "../components/Card/Card"
import Container from "../components/Container/Container"
import ContainerCard from "../components/ContainerCard/ContainerCard"
import HeroPages from "../components/HeroPages/HeroPages"
import Section from "../components/Section/Section"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import admissions from "../data/admissions"
import { fees, services } from "../data/feeTabelData"

const Admission = () => {
  return (
    <>
      <HeroPages showContact={false} title="Join Our Family of Young Learners" shortText="Admission" text="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school" />
      <Section className="admissions">
        <Container>
            <SectionTitle title="Admission Process" subtitle="Process" description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school" />
            <ContainerCard rowGap={170} columnGap={50} medRowGap={180} medColGap={40} smallRowGap={150} >
                {admissions.map((item) => {
                    return (
                        <AdmissionCard  key={item.id} title={item.title} num={item.num} description={item.description} />
                    )
                })}
            </ContainerCard>
        </Container>
      </Section>
      <Section className="tabels">
        <Container>
            <SectionTitle title="Fee Structure" subtitle="Our Features" description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen." />
            <ContainerCard columns={1} gap={80} medGap={60} smallGap={40}>
                <Card className="table one">
                    <table>
                        <thead>
                            <tr className="rowHead">
                                <th>Program</th>
                                <th>Age Group</th>
                                <th>Annual Tuition</th>
                                <th>Registration Fee</th>
                                <th>Activity Fee</th>
                            </tr>
                        </thead>
                        <tbody>{fees.map(item => {
                            return(
                                <tr key={item.program}>
                                    <td>{item.program}</td>
                                    <td>{item.ageGroup}</td>
                                    <td>{item.annualTuition}</td>
                                    <td>{item.registrationFee}</td>
                                    <td>{item.activityFee}</td>
                                </tr>
                            )
                        })}</tbody>
                    </table>
                </Card>
                <Card className="table">
                    <table className="two">
                        <thead>
                            <tr>
                                <th>Additional Services</th>
                            </tr>
                        </thead>
                        <tbody>{services.map(item => {
                            return(
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })}</tbody>
                    </table>
                </Card>
            </ContainerCard>
        </Container>
      </Section>
    </>
  )
}

export default Admission
