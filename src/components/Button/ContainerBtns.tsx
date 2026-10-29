import styles from "./ContainerBtns.module.css"
import type { ChildrenProps } from "../../types/common"

const ContainerBtns = ({children} : ChildrenProps) => {
  return (
    <div className={styles.ContainerBtns}>
      {children}
    </div>
  )
}

export default ContainerBtns
