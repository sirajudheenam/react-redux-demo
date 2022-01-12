import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';

import NavBar from './notes/components/NavBar';
import NoteList from './notes/components/NoteList';
import Note from './notes/components/Note';

import App1 from './todos/App4';
import App2 from './todos/App2';
import App3 from './todos/App3';
import App4 from './todos/App4';

import ToDoIndexPage from './todos/ToDoIndexPage';

export const IndexPage = () => {
  return(
    <div>Hello there</div>
  )
};


class App extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Menu />
        <Router>
          <Routes>
            <Route path='/' element={ <ToDoIndexPage /> } />
            <Route path='/todos' element={ <ToDoIndexPage /> } />
            <Route path='/todos/1' element={ <App1 /> } />
            <Route path='/todos/2' element={ <App2 /> } />
            <Route path='/todos/3' element={ <App3 /> } />
            <Route path='/todos/4' element={ <App4 /> } />

            <Route path='/notes' element={ <div className="row"> <NoteList /> </div>} />
            <Route path='/notes/:id' element={ <Note />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
