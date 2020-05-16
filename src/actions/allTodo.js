function addTodoItem(data) {
  return {
    type: 'ADD_TODO_ITEM',
    payload: data,
  }
}

export const addTodo = (todo) => {
  return (dispatch => {
    // Dispatch Actions
    dispatch(addTodoItem(todo));
  })
}

function removeTodoData(data) {
  return {
    type: 'DELETE_TODO',
    payload: data,
  }
}

export const deleteTodo = (index) => {
  return (dispatch => {
    // Dispatch Actions
    dispatch(removeTodoData(index));
  })
}