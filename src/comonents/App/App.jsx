import React, { Component } from 'react';
import { ToDoList } from 'comonents/ToDoList';
import todosInit from '../../todos';
// import { ColorPicker } from 'comonents/ColorPicker';
// import { Counter } from 'comonents/Counter';
// import { Dropdawn } from 'comonents/Dropdawn';

// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3f51b5' },
// ];

export class App extends Component {
  state = {
    todos: todosInit,
  };

  deleteToDo = toDoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== toDoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalToDo = todos.length;
    const completedToDo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <ToDoList todos={todos} onDeleteToDo={this.deleteToDo} />

        <div style={{ color: 'white', marginLeft: '11px' }}>
          <p>total ToDo's: {totalToDo}</p>
          <p>completed ToDo's: {completedToDo}</p>
        </div>

        {/* <h1>Состояние компонента</h1>

        <Counter />

        <Dropdawn />

        <ColorPicker options={colorPickerOptions} /> */}
      </>
    );
  }
}
