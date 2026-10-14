import type { ChildrenProps } from "../../types/common";
import "./Card.css"

type CardProps = ChildrenProps & {
    className? : string ;
}

const Card = ({children , className = ""} : CardProps) => {
  return (
    <div className= {`card ${className}`} >
      {children}
    </div>
  )
}

export default Card
