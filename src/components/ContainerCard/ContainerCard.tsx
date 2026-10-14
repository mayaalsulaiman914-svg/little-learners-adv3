import type { CSSProperties } from "react"
import type { ChildrenProps } from "../../types/common"
import "./ContainerCard.css"

type ContainerCardProps = ChildrenProps & {
    columns?: Number ,
}

 

const ContainerCard = ({children , columns = 3} : ContainerCardProps ) => {
  return (
    <div className="containerCards" style={{"--columns" : columns} as React.CSSProperties}>
      {children}
    </div>
  )
}

export default ContainerCard
