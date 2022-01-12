import { Link } from 'react-router-dom';
const ToDoIndexPage = () => {
  return(
    <div>
      <ul>
        <li>
          <Link to='/todos/1'>Class-based ToDoList Component with AuthContext & ThemeContext</Link>
        </li>
        <li>
          <Link to='/todos/2'>Function-based ToDoList Component with useState & useContext</Link>
        </li>
        <li>
          <Link to='/todos/3'>Function-based ToDoList Component with useEffect</Link>
        </li>
        <li>
          <Link to='/todos/4'>useReducer with useContext</Link>
        </li>
      </ul>
    </div>
  )
};
export default ToDoIndexPage;
