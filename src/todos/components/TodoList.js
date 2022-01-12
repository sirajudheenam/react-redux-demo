import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
      return(
        <div style={{ background: theme.background, text: theme.text, height: '150px', textAlign: 'center'}} >
          <h2 style={{ textAlign: 'center' }}>Context in Class Component</h2>
          <p className='item'>Plan the family trip</p>
          <p className='item'>Go shopping for a dinner</p>
          <p className='item'>Go for a walk</p>
          <button className='ui button primary' onClick={changeTheme}>
            {isDarkTheme ? "Light Theme" : "Dark Theme" }
          </button>
        </div>

      )
    }
}

export default TodoList;
