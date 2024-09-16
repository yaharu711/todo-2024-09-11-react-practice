import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const CompleteTodo = ({
    imcompletedTodoNames,
    setImcompletedTodoNames,
    completedTodoNames,
    setCompletedTodoNames
}) => {
    const imcompleteTodo = (target) => {
        const newCompletedTodoNames = completedTodoNames.filter((completedTodoName) => completedTodoName !== target);
        setCompletedTodoNames(newCompletedTodoNames);
        setImcompletedTodoNames([...imcompletedTodoNames, target]);
    }

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "800px",
        padding: "16px",
        border: "2px solid #646cffaa",
        borderRadius: "10px"
    }}>
        <p>完了のTODO</p>
        <ul>
        {
            completedTodoNames.map((completedTodoName, index) => {
            return (
                <TodoItem
                    key={index}
                    todoName={completedTodoName}
                    buttons={[
                        {
                            text: "未完了",
                            onClick: () => imcompleteTodo(completedTodoName)
                        },
                    ]}
                />
            );
        })}
        </ul>
    </div>
  )
}

export default CompleteTodo
