// create a Store
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Import Reducers
import { allTodoDetails } from './reducers/allTodoDetails';

const AllReducers = combineReducers({
  todoDetails: allTodoDetails,
})

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(thunk)) );

export default store;