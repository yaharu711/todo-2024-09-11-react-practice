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
        <div>
        <p>未完了のTODO</p>
        <ul>
          {
            imcompletedTodoNames.map((imcompletedTodoName, index) => {
              return (
                <li key={index}>
                  <div>
                    <p>{imcompletedTodoName}</p>
                    <button onClick={() => completeTodo(imcompletedTodoName)}>完了</button>
                    <button onClick={() => deleteImcompletedTodo(imcompletedTodoName)}>削除</button>
                  </div>
                </li>
              );
          })}
        </ul>
      </div>
    );
}

export default ImcompletedTodo;