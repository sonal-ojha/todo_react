const initialState = {
  allTodoData: [],
};

function deleteTodoData(state, action) {
  const { payload } = action;
  const { allTodoData } = state;
  const newTodo = [...allTodoData];
  newTodo.splice(payload, 1);
  return {
    ...state,
    allTodoData: newTodo,
  }
}

function addTodoData(state, action) {
  const { payload } = action;
  return {
    ...state,
    allTodoData: [...state.allTodoData, payload],
  }
}

export function allTodoDetails(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO_ITEM': return addTodoData(state, action);
    case 'DELETE_TODO': return deleteTodoData(state, action);
    default: return state;
  }
}