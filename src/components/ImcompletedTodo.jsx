import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const ImcompletedTodo = ({
    imcompletedTodoNames,
    setImcompletedTodoNames,
    completedTodoNames,
    setCompletedTodoNames
}) => {
    const deleteImcompletedTodo = (target) => {
        // 今未完了のTODOは名前で管理されているので削除する名前を要素から削除すれば表示されなくなる。
        const newImcompletedTodoNames = imcompletedTodoNames.filter((imcompletedTodoName) => imcompletedTodoName !== target);
        setImcompletedTodoNames(newImcompletedTodoNames);
    }
    const completeTodo = (target) => {
        setCompletedTodoNames([...completedTodoNames, target]);
        deleteImcompletedTodo(target);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "800px",
            padding: "16px",
            border: "2px solid #61dafbaa",
            borderRadius: "10px"
        }}>
            <p>未完了のTODO</p>
            <ul>
            {
                imcompletedTodoNames.map((imcompletedTodoName, index) => {
                return (
                    <TodoItem
                        key={index}
                        todoName={imcompletedTodoName}
                        buttons={[
                            {
                                text: "完了",
                                onClick: () => completeTodo(imcompletedTodoName)
                            },
                            {
                                text: "削除",
                                onClick: () => deleteImcompletedTodo(imcompletedTodoName)
                            }
                        ]}
                    />
                );
            })}
            </ul>
        </div>
    );
}

export default ImcompletedTodo;