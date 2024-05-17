import TodoCard from './TodoCard'
import PropTypes from 'prop-types';

const TodoList = ({ todos, handleEdit, handelDelete }) => {

  return (
    <>
      <ul>
        {
          todos.map(todo => (
            <TodoCard key={todo.id} handelDelete={handelDelete} handleEdit={handleEdit} id={todo.id}>
              <p>{todo.text}</p>
            </TodoCard>
          ))
        }
      </ul>
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  handleEdit: PropTypes.func,
  handelDelete: PropTypes.func,
}
export default TodoList