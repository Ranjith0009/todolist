import React from 'react';
import './App.css';
const TodoCard = ({ todo, deleteTodo, setEditData }) => {
  return (
    <div className='card'>
      <h2>{todo.text}</h2>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => setEditData(todo)}>Edit</button>
    </div>
  );
};

export default TodoCard;
