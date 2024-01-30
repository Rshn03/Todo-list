// Todo.js
import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleCompletion = (index) => {
    let updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`todo-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1 style={{ color: darkMode ? '#fff' : '#000' }}>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <input
                type="radio"
                onChange={() => toggleCompletion(index)}
                checked={todo.completed}
              />
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Todo;
