/* eslint-disable react/prop-types */
import styles from "./TodoInput.module.css";
function TodoInput({onChange, placeholder, value}) {
  return (
    <input className={styles.input} onChange={onChange} placeholder={placeholder} value={value}/>
  );
}

export default TodoInput
