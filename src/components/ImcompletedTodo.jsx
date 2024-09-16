import TodoButton from "./TodoButton";

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
                    <li key={index}>
                        <div style={{
                            display: "flex",
                            // 各要素を均等に配置し、先頭は左、末尾は右に配置するようにできる
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "8px"
                        }}>
                            <p>{imcompletedTodoName}</p>
                            <div style={{
                                  display: "flex",
                                  gap: "10px"
                            }}>
                                <TodoButton onClick={() => completeTodo(imcompletedTodoName)} text="完了" />
                                <TodoButton onClick={() => deleteImcompletedTodo(imcompletedTodoName)} text="削除" />
                            </div>
                        </div>
                    </li>
                );
            })}
            </ul>
        </div>
    );
}

export default ImcompletedTodo;