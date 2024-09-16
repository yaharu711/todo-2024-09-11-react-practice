import TodoButton from "./TodoButton";

/* eslint-disable react/prop-types */
function CompleteTodo({
    imcompletedTodoNames,
    setImcompletedTodoNames,
    completedTodoNames,
    setCompletedTodoNames
}) {
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
                <li key={index}>
                <div style={{
                    display: "flex",
                    // 各要素を均等に配置し、先頭は左、末尾は右に配置するようにできる
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <p>{completedTodoName}</p>
                    <TodoButton onClick={() => imcompleteTodo(completedTodoName)} text="戻す" />
                </div>
                </li>
            );
        })}
        </ul>
    </div>
  )
}

export default CompleteTodo
