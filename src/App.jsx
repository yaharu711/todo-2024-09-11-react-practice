import { useState } from "react"
import AddTodo from "./components/AddTodo";
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
    <div style={{    
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      rowGap: "16px"
    }}>
      <AddTodo {...todoInputComponentArguments} />
      <ImcompletedTodo {...ImcompletedTodoComponentArguments} />
      <CompleteTodo {...completedTodoComponentArguments} />
    </div>
  )
}

export default App
