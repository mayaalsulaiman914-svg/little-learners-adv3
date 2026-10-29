 import "./Section.css"

import type { ChildrenProps } from "../../types/common"
import type React from "react"
 type sectionProps =  ChildrenProps & {
  className? : string ,
  id?:string,
 }
const Section = ({children , className} : sectionProps) => {
  return (
    <section className={className} >
      {children}
    </section>
  )
}

export default Section
