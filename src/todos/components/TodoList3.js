import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContextWithReducer } from '../contexts/TodoListContextWithReducer';

const TodoList3 = () => {
  const [ todo, setTodo ] = useState('');
  const { todos, dispatch } = useContext(TodoListContextWithReducer);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todo});
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: 'REMOVE_TODO', id });
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
             <div>You have no ToDos</div>
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

export default TodoList3;
