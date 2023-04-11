import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoItems([...todoItems, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleCompleteTodo = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    setTodoItems(newTodoItems);
  };

  const handleDeleteTodo = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);  
  };

  const navigate = useNavigate()
  

  function handleLogout() {
    //logica de como cerrar sesion
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Lista de tareas hoy...</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir una nueva tarea pendiente"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-group">
        {todoItems.map((item, index) => (
          <li key={index} className={`list-group-item ${item.completed ? 'list-group-item-success' : ''}`}>
            <span
              onClick={() => handleCompleteTodo(index)}
              style={{ cursor: 'pointer' }}
            >
              {item.completed ? (
                <i className="bi bi-check-circle-fill me-2"></i>
              ) : (
                <i className="bi bi-circle me-2"></i>
              )}
              {item.text}
            </span>
            <button
              className="btn btn-danger btn-sm float-end"
              type="button"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Cerrar Sesión</Button>
      </div>

    </div>

    
  );
  
};

export default Todo;
