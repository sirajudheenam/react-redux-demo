import React, { Component } from 'react';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContextProvider from './contexts/TodoListContext';

import Navbar from './components/Navbar';
import TodoList1 from './components/TodoList1';

class App2 extends Component {
  render() {
    return(
       <div className='App'>
         <div className='ui raised very padded text container segment'>
           <AuthContextProvider>
             <ThemeContextProvider>
               <Navbar />
                 <TodoListContextProvider>
                   <TodoList1 />
                 </TodoListContextProvider>
             </ThemeContextProvider>
           </AuthContextProvider>
         </div>
       </div>
    )
  }
}

export default App2;
