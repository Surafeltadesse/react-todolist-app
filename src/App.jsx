import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"

function App() {

  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState("")

  const persistTodos = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const addTodo = (todoText) => {
    if (todoText === "") return

    const newTodo = {
      id: todos[todos.length - 1]?.id + 1 || 0,
      text: todoText
    }
    persistTodos([...todos, newTodo])
    setTodos([...todos, newTodo])
  }

  const handelDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    persistTodos(newTodos)
    setTodos(newTodos)
  }

  const handleEdit = (id) => {
    const newTodo = todos.find(todo => todo.id === id)
    setTodoText(newTodo.text)
    handelDelete(id)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let data = localStorage.getItem("todos")

    if (!data) {
      return
    }

    data = setTodos(JSON.parse(data))
  }, [])

  return (
    <>
      <main>
        <TodoInput addTodo={addTodo} todoValue={todoText} setTodoText={setTodoText} />
        <TodoList todos={todos} handelDelete={handelDelete} handleEdit={handleEdit} />
      </main>
    </>
  )
}

export default App
