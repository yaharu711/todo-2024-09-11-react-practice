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
    <div>
        <p>完了のTODO</p>
        <ul>
        {
            completedTodoNames.map((completedTodoName, index) => {
            return (
                <li key={index}>
                <div>
                    <p>{completedTodoName}</p>
                    <button onClick={() => imcompleteTodo(completedTodoName)}>戻す</button>
                </div>
                </li>
            );
        })}
        </ul>
    </div>
  )
}

export default CompleteTodo
