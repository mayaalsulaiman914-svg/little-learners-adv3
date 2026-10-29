 import "./Section.css"
import type { ChildrenProps } from "../../types/common"

 type sectionProps =  ChildrenProps & {
  className? : string ,
  id?:string,
 }
const Section = ({children , className,id} : sectionProps) => {
  return (
    <section id={id} className={className} >
      {children}
    </section>
  )
}

export default Section
