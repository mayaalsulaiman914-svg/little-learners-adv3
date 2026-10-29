import type { ChildrenProps } from "../../types/common"
import "./ContainerCard.css"

type ContainerCardProps = ChildrenProps & {
    columns?: number ,
    gap? : number,
    rowGap? : number,
    columnGap? : number,
    medColGap?: number,
    medRowGap?: number,
    medGap?:number,
    smallColGap?: number,
    smallRowGap?: number,
    smallGap?:number,
}

 

const ContainerCard = ({children , columns = 3 , gap , rowGap , columnGap , medColGap,medRowGap ,medGap , smallColGap , smallRowGap, smallGap} : ContainerCardProps ) => {
  return (
    <div className="containerCards" style={{"--columns" : columns , ...(rowGap !== undefined && {"--rowGap" : `${rowGap}px`}) ,...(columnGap !== undefined && {"--columnGap" : `${columnGap}px`}),...(gap !== undefined && {"--gap" : `${gap}px`}) ,...(medColGap !== undefined && {"--medColGap" : `${medColGap}px`}) ,...(medRowGap !== undefined && {"--medRowGap" : `${medRowGap}px`}) ,...(medGap !== undefined && {"--medGap" : `${medGap}px`}),...(smallGap !== undefined && {"--smallGap" : `${smallGap}px`}) ,...(smallRowGap !== undefined && {"--smallRowGap" : `${smallRowGap}px`}),...(smallColGap !== undefined && {"--smallColGap" : `${smallColGap}px`}) } as React.CSSProperties}>
      {children}
    </div>
  )
}

export default ContainerCard
