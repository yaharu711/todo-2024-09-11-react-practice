/* eslint-disable react/prop-types */
const TodoInput = ({
    inputedTodoName,
    setInputedTodoName,
    inputedTodoNameError,
    setInputedTodoNameError,
    imcompletedTodoNames,
    setImcompletedTodoNames,
}) => {
    const addTodo = () => {
        if (inputedTodoName === '') {
          setInputedTodoNameError('TODO名は1文字以上で入力してください');
          return;
        } else if (imcompletedTodoNames.length >= 5) {
            setInputedTodoNameError('TODOの追加は5個までです');
            return;
        }
        setImcompletedTodoNames(prev => [...prev, inputedTodoName]);
    };

    // React-hook-formなどのフレームワーク？を使ってフォームの入力を実現しやすくできるらしい。
    const inputTodoName = (todoName) => {
        // ユーザー入力があったらエラーメッセージを削除する
        setInputedTodoNameError('');
        setInputedTodoName(todoName);
    }

    return (
        <div>
            <input onChange={(event) => inputTodoName(event.target.value)} placeholder="TODO名を入力" value={inputedTodoName}/>
            {inputedTodoNameError !== '' && <span style={{color: "red"}}>{inputedTodoNameError}</span>}
            <button onClick={() => addTodo()}>追加</button>
        </div>
    )
}

export default TodoInput;