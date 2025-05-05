import React, { useState } from 'react';
import "./App.css";
import TodoCard from './card';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editData, setEditData] = useState(null);

  const addTodo = () => {
    const obj = {
      id: Math.random(),
      text: text,
    };
    setTodos([...todos, obj]);
    setText(''); 
  };

  const deleteTodo = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  const updateTodo = () => {
    const updatedTodos = todos.map(todo => 
      todo.id === editData.id ? { ...todo, text: editData.text } : todo
    );
    setTodos(updatedTodos);
    setEditData(null); 
  };

  if (editData) {
    return (
      <div className="container">
        <div className="input-group">
          <input 
            type="text" 
            onChange={(e) => setEditData({ ...editData, text: e.target.value })} 
            value={editData.text} 
            className="todo-input"
          />
          <button onClick={updateTodo} className="primary-btn">Update</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="input-group">
        <input 
          type="text" 
          onChange={(e) => setText(e.target.value)} 
          value={text}
          className="todo-input"
        />
        <button onClick={addTodo} className="primary-btn">Add Todo</button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoCard 
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            setEditData={setEditData}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
