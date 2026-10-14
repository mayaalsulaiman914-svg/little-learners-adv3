import type { ChildrenProps } from '../../types/common'
import "./Container.css"
 

const Container = ({children} : ChildrenProps) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Container
