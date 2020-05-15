import React from 'react';
import Todo from './components/Todo';
import TodoListItems from './components/TodoListItems';

import './App.css';

class App extends React.Component {
  state = {
    todoList: []
  };

  handleAddTodoList = (todoItem) => {
    const { todoList } = this.state;
    const newTodo = [...todoList];
    newTodo.push(todoItem);
    this.setState({
      todoList: newTodo,
    })
  }

  handleDeleteTodoItem = (todoIndex) => {
    const { todoList } = this.state;
    const newTodo = [...todoList];
    newTodo.splice(todoIndex, 1);
    this.setState({
      todoList: newTodo,
    })
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="App">
        <Todo handleAddTodo={this.handleAddTodoList} />
        <TodoListItems items={todoList} deleteTodo={this.handleDeleteTodoItem} />
      </div>
    );
  }
}

export default App;
