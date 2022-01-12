import React, { Component } from 'react';

import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContextProvider from './contexts/TodoListContext';

import TodoList2 from './components/TodoList2';
import Navbar2 from './components/Navbar2';

class App3 extends Component {
  render() {
    return(
       <div className='App'>
          <div className='ui raised very padded text container segment'>
            <AuthContextProvider>
              <ThemeContextProvider>
                <Navbar2 />
                <TodoList2 />
              </ThemeContextProvider>
            </AuthContextProvider>
          </div>
       </div>
    )
  }
}

export default App3;
