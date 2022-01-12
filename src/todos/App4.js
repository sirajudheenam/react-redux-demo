import React, { Component } from 'react';

import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContextWithReducerProvider from './contexts/TodoListContextWithReducer';

import TodoList3 from './components/TodoList3';
import Navbar2 from './components/Navbar2';

class App4 extends Component {
  render() {
    return(
       <div className='App'>
          <div className='ui raised very padded text container segment'>
            <AuthContextProvider>
              <ThemeContextProvider>
                <Navbar2 />
                <TodoListContextWithReducerProvider>
                  <TodoList3 />
                </TodoListContextWithReducerProvider>
              </ThemeContextProvider>
            </AuthContextProvider>
          </div>
       </div>
    )
  }
}

export default App4;
