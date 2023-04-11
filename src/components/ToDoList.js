import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

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

  const handleEditTodo = (index, text) => {
    setEditIndex(index);
    setInputValue(text);
  };

  const handleUpdateTodo = () => {
    const newTodoItems = [...todoItems];
    newTodoItems[editIndex].text = inputValue;
    setTodoItems(newTodoItems);
    setEditIndex(-1);
    setInputValue('');
  };

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate('/');
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
        {editIndex === -1 ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo}
          >
            Añadir
          </button>
        ) : (
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleUpdateTodo}
          >
            Actualizar
          </button>
        )}
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
              {editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{item.text}</span>
              )}
            </span>
            {editIndex === index ? (
              <button
                className="btn btn-primary btn-sm float-end me-2 "
                type="button"
                onClick={handleUpdateTodo}
              >
                Actualizar
              </button>
            ) : (
              <button
                className="btn btn-primary btn-sm float-end me-2 "
                type="button"
                onClick={() => handleEditTodo(index, item.text)}
              >
                Editar
              </button>
            )}
            <button
              className="btn btn-danger btn-sm float-end me-2"
              type="button"
              onClick={() => handleDeleteTodo(index)}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout} style={{ color: "Red" }}>Cerrar Sesión</Button>
      </div>

      <div className="w-100 text-center mt-2">
        <Link to="/dashboard" >Tu cuenta U-List</Link>
      </div>


    </div>

  );

};

export default Todo;
