import React, { Component } from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

class App1 extends Component {
  render() {
    return(
       <div className='App'>
          <div className='ui raised very padded text container segment'>
            <AuthContextProvider>
              <ThemeContextProvider>
                <Navbar />
                <TodoList />
              </ThemeContextProvider>
            </AuthContextProvider>
          </div>
       </div>
    )
  }
}

export default App1;
