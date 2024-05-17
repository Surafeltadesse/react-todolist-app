import PropTypes from 'prop-types';

const TodoInput = ({ addTodo, todoValue, setTodoText }) => {

  const handleChange = (e) => {
    setTodoText(e.target.value)
  }

  return (
    <header>

      <input
        value={todoValue}
        onChange={(e) => {
          handleChange(e)
        }}
        placeholder="Enter todo..." />

      <button
        onClick={() => {
          addTodo(todoValue)
          setTodoText("")
        }}>
        Add
      </button>

    </header>

  )
}

TodoInput.propTypes = {
  addTodo: PropTypes.func,
  todoValue: PropTypes.string,
  setTodoText: PropTypes.func,
}

export default TodoInput