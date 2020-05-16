import React from 'react';
import { connect } from 'react-redux';
import Todo from './components/Todo';
import TodoListItems from './components/TodoListItems';

import './App.css';

import { deleteTodo, addTodo } from './actions/allTodo';

class App extends React.Component {

  handleAddTodoList = (todoItem) => {
    // using redux
    const { addTodoData } = this.props;
    addTodoData(todoItem);
  }

  handleDeleteTodoItem = (todoIndex) => {
    // using Redux
    const { deleteTodoItem } = this.props;
    deleteTodoItem(todoIndex);
  }

  render() {
    const { todoData } = this.props; // from redux Store
    return (
      <div className="App">
        <Todo handleAddTodo={this.handleAddTodoList} />
        <TodoListItems items={todoData} deleteTodo={this.handleDeleteTodoItem} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  todoData: store.todoDetails.allTodoData,
})

const mapDispatchToProps = dispatch => ({
  deleteTodoItem: (deleteIdx) => dispatch(deleteTodo(deleteIdx)),
  addTodoData: (todo) => dispatch(addTodo(todo)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(App);
