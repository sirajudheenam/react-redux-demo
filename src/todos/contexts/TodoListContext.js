import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: 'Plan the family trip'},
    { id: uuidv4(), text: 'Go shopping for a dinner'},
    { id: uuidv4(), text: 'Go for a walk '  }
  ]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), text: todo}
    ]);
  };

  /*
     todos.filter will filter out a particular item from the array
     todo.id !== id will return true and those items will be added again to
     the state except the one wich matches.
  */
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => {
        return todo.id !== id
      }));
  };

  return(
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoListContext.Provider>
  );
}

export default TodoListContextProvider;
