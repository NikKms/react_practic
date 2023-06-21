import React from 'react';
import './ToDoList.css';

export const ToDoList = ({ todos, onDeleteToDo }) => (
  <ul className="toDo__List">
    {todos.map(({ id, text }) => (
      <li key={id} className="toDo__Item">
        <p className="toDo__text">{text}</p>
        <button
          type="button"
          className="toDo__deleteBtn"
          onClick={() => onDeleteToDo(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);
