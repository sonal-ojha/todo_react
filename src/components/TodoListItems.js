import React from 'react';

function TodoListItems({ items, deleteTodo }) {
  return (
    <div>
      <hr />
      <h2>Todo Listed items:</h2>
      {items && items.length > 0 && items.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ) )}
    </div>
  )
}

export default TodoListItems;