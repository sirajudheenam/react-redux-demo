/* useReducer Demo*/
import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import todosReducer from '../reducers/todosReducer';

export const TodoListContextWithReducer = createContext();

const TodoListContextWithReducerProvider = ({ children }) => {

  const [todos, dispatch] = useReducer(todosReducer, [
    { id: uuidv4(), text: 'Plan the family trip'},
    { id: uuidv4(), text: 'Go shopping for a dinner'},
    { id: uuidv4(), text: 'Go for a walk '  }
  ]);

  return(
    <TodoListContextWithReducer.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContextWithReducer.Provider>
  );
}

export default TodoListContextWithReducerProvider;
