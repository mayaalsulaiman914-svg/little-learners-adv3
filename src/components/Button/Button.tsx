 import styles from "./Button.module.css"

interface ButtonProps {
    name: string,
    value : string,
    onClick:(value:string) => void
}
const Button = ({value , name  , onClick} : ButtonProps) => {
  return (
    <button  value={value} onClick={() => onClick(value)} className={styles.btn}>
      {name}
    </button>
  )
}

export default Button
