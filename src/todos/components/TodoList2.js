/* Demo useState, useEffect, uuid, */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewTodo from './AddNewTodo';

const TodoList2 = () => {
  const [ todos, setTodos ] = useState([
    { text: "Play football", id: uuidv4() },
    { text: "Do Homework", id: uuidv4() },
    { text: "Feed the cat", id: uuidv4() },
    { text: "Wash the car", id: uuidv4() }
  ]);
  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { text, id: uuidv4() }
    ]);
  };

  /* Runs only if todos data is changed */
  useEffect( () => {
    console.log('useEffect triggered on todos', todos)
  }, [todos]);

  /* Runs only if count data is changed */
  useEffect( () => {
    console.log('useEffect triggered on count', count)
  }, [count]);

  return(
    <div>
      <h2 style={{ textAlign: 'center' }}>ToDo List (Functional Component)</h2>
      <h4 style={{ textAlign: 'center' }}>useState & useEffect demo</h4>
      <ul>
        {
          todos.map((todo) => {
            return( <li key={todo.id}>{todo.text}</li> );
          })
       }
      </ul>
      <AddNewTodo addTodo={addTodo}/>
      <button
        onClick={() => setCount(count + 1)} className='ui button primary' >
        Score: {count}
      </button>
    </div>
  )
};

export default TodoList2;
