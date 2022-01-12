import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
  const [todos, setTodos] = useState('');
  const handleSubmit = ( (e) => {
    e.preventDefault();
    addTodo(todos);
    setTodos('');
  });
  return(
      <form onSubmit={handleSubmit} >
        <label htmlFor='todo'>ToDo </label>
        <input type='text' id='todo'
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          />
        <input type='submit' className='ui button primary' />
      </form>
  );
};

export default AddNewTodo;
