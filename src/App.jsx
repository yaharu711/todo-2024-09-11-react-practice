import { useState } from "react"
import TodoInput from "./components/TodoInput";
import ImcompletedTodo from "./components/ImcompletedTodo";
import CompleteTodo from "./components/CompletedTodo";

const App = () => {
  const [inputedTodoName, setInputedTodoName] = useState('');
  const [inputedTodoNameError, setInputedTodoNameError] = useState('');
  const [imcompletedTodoNames, setImcompletedTodoNames] = useState([]);
  const [completedTodoNames, setCompletedTodoNames] = useState([]);


  const todoInputComponentArguments = {
    inputedTodoName,
    setInputedTodoName,
    inputedTodoNameError,
    setInputedTodoNameError,
    setImcompletedTodoNames,
    imcompletedTodoNames
  }
  const ImcompletedTodoComponentArguments = {
    imcompletedTodoNames,
    setImcompletedTodoNames,
    completedTodoNames,
    setCompletedTodoNames
  }
  const completedTodoComponentArguments = {
    imcompletedTodoNames,
    setImcompletedTodoNames,
    completedTodoNames,
    setCompletedTodoNames
  }


  return (
    // <React.Fragment>は以下の<>と同じ。JSXは一つの要素で囲っていないとエラーがでるので、そのためにdivタグを使わずに済むのが以下のもの。
    <>
      <TodoInput {...todoInputComponentArguments} />
      <ImcompletedTodo {...ImcompletedTodoComponentArguments} />
      <CompleteTodo {...completedTodoComponentArguments} />
    </>
  )
}

export default App
