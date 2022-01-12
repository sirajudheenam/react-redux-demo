import { v4 as uuidv4 } from 'uuid';

const todosReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: uuidv4(), text: action.text}
      ]
    case 'REMOVE_TODO':
      console.log("REMOVE_TODO", state);
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state;
  }
};

export default todosReducer;
