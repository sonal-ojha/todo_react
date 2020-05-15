import React, { useState } from 'react';

function Todo({ handleAddTodo }) {
  const [todoText, setTodo] = useState('');

  const handleTodoText = (e) => {
    setTodo(e.target.value)
  }

  const addTodoClick = () => {
    handleAddTodo(todoText);
    setTodo(''); // To clear the text in input box once Add is Clicked
  }

  return (
    <div>
      <h2>Create Todo</h2>
      <input type="text" value={todoText} onChange={handleTodoText} />
      <button onClick={addTodoClick}>ADD</button>
    </div>
  )
}

export default Todo;