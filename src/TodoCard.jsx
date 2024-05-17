import PropTypes from 'prop-types';

const TodoCard = ({ children, handelDelete, handleEdit, id }) => {
  
  return (
    <>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button onClick={() => handleEdit(id)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>

          <button onClick={() => handelDelete(id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </li>
    </>
  )
}

TodoCard.propTypes = {
  children: PropTypes.node,
  handelDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  id: PropTypes.number,
}

export default TodoCard