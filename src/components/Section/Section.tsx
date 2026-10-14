 import "./Section.css"

 import type { ChildrenProps } from "../../types/common"
 type sectionProps =  ChildrenProps & {
  className? : string
 }
const Section = ({children , className} : sectionProps) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default Section
