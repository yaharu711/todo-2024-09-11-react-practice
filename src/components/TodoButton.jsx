/* eslint-disable react/prop-types */
import styles from "./TodoButton.module.css"

const TodoButton = ({onClick, text}) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default TodoButton
