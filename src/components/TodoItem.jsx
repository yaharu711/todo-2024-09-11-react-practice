/* eslint-disable react/prop-types */
import TodoButton from "./TodoButton";
import styles from "./TodoItem.module.css";

const TodoItem = ({index, todoName, buttons}) => {
  return (
    <li key={index}>
        <div className={styles.todoItme}>
            <p>{todoName}</p>
            <div className={styles.buttonArea}>
                {buttons.map((button, index) => {
                    return <TodoButton key={index} onClick={button.onClick} text={button.text} />
                })}
            </div>
        </div>
    </li>
  )
}

export default TodoItem
