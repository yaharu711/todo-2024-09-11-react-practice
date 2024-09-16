/* eslint-disable react/prop-types */
// 親からonClickの関数、onChangeの関数を受け取った方がコンポーネントの処理はシンプルになる。
// また、子コンポーネントの使いまわしがしやすくなる！（ 処理が親で決められるから、再利用性が高い）→しかし、可読性は低くてファイルを言ったり来たりしないと処理全体が見えないのがデメリット

import TodoButton from "./TodoButton";
import TodoInput from "./TodoInput";

// そもそも、onClickの関数やonChangeの関数を外から受け取るようにすべきか？誰に子コンポーネント使われても同じ処理にできるという点では、今の設計の方が良い。バリデーションとかは子コンポーネントで書いて保証してあげたほうが良い気がする？
const AddTodo = ({
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
        } else if (inputedTodoName.length > 20) {
            setInputedTodoNameError('TODO名は20文字までです');
            return;
        } else if (imcompletedTodoNames.includes(inputedTodoName)) {
            setInputedTodoNameError('TODO名は重複しないようにしてください');
            return;
        } else if (imcompletedTodoNames.length >= 5) {
            setInputedTodoNameError('TODOの追加は5個までです');
            return;
        }
        setImcompletedTodoNames(prev => [...prev, inputedTodoName]);
        setInputedTodoName('');
    };

    // React-hook-formなどのフレームワーク？を使ってフォームの入力を実現しやすくできるらしい。
    const inputTodoName = (todoName) => {
        // ユーザー入力があったらエラーメッセージを削除する
        setInputedTodoNameError('');
        setInputedTodoName(todoName);
    }

    return (
        <div style={{
            textAlign: "center",
            width: "800px",
            padding: "16px",
            border: "2px solid #646cffaa"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "8px"
            }}>
                <TodoInput onChange={(event) => inputTodoName(event.target.value)} placeholder="TODO名を入力" value={inputedTodoName} />
                <TodoButton onClick={() => addTodo()} text="追加" />
            </div>
            {inputedTodoNameError !== '' && <span style={{color: "red"}}>{inputedTodoNameError}</span>}
        </div>
    )
}

export default AddTodo;