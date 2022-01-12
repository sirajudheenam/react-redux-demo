import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList1 = () => {
  const [ todo, setTodo ] = useState('');
  const { todos, addTodo, removeTodo } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };
  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    removeTodo(id);
  };
  return(
      <div style={{ background: theme.background, text: theme.text, textAlign: 'center'}} >
         <h2 style={{ textAlign: 'center' }}>ToDo List</h2>
         {
           todos.length ? (
             todos.map( (todo) => {
               return <p key={todo.id} id={todo.id} onClick={handleRemoveTodo} className='item'>{todo.text}</p>
             })
           ) : (
             <div>No ToDos here.. Add one...</div>
           )
         }
         <form onSubmit={handleFormSubmit}>
           <label htmlFor='todo'>ToDo</label>
           <input type='text' value={todo} id='todo' onChange={handleChange} />
           <input type='submit' value='Add New Todo' className='ui button primary'/>
         </form>

        <button className='ui button primary' onClick={changeTheme}>
          {isDarkTheme ? "Light Theme" : "Dark Theme" }
        </button>
      </div>
  )
};

export default TodoList1;
