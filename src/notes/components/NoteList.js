import React from "react";
// import data from '../data/items.json';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Note from './Note';

// import ModalComponent from "./Modal";

import { fetchNotes, deleteNote } from '../actions/noteActions';

class NoteList extends React.Component {

  componentDidMount() {
    let id = this.props.id;
    this.props.fetchNotes()
    this.props.deleteNote(id)
  }

  handleDelete = () => {
    let id = this.props.note.id;
    this.props.deleteNote(id);
    // console.log(this.props);
    // this.props.history.push('/users');
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notes: [
  //     { id: 1, name: 'Default Note - 1', description: 'About the NoteList note 1'},
  //     { id: 2, name: 'Default Note - 2', description: 'About the NoteList note 2'},
  //     { id: 3, name: 'Default Note - 3', description: 'About the NoteList note 3'},
  //     { id: 4, name: 'Default Note - 4', description: 'About the NoteList note 4'},
  //     { id: 5, name: 'Default Note - 5', description: 'About the NoteList note 5'},
  //     { id: 6, name: 'Default Note - 6', description: 'About the NoteList note 6'},
  //     { id: 7, name: 'Default Note - 7', description: 'About the NoteList note 7'},
  //     { id: 8, name: 'Default Note - 8', description: 'About the NoteList note 8'},
  //     { id: 9, name: 'Default Note - 9', description: 'About the NoteList note 9'}
  //   ],
  //   note: {}
  //   }
  // };


  render() {
    const { notes } = this.props;
    const widthStyle =  { width: "18rem" };
    return(
        notes.map( (note) => {
          return(
              <div className="col-sm-3" key={note.id}>
                <div className="card text-center m-2 container-fluid" style={widthStyle}>
                  <div className="card-header text-center">{note.name}</div>
                  <div className="card-body">
                    <p className="card-text">{note.description}</p>
                    <Link to={`/notes/${note.id}`} className="btn btn-danger btn-sm">Navigate</Link>
                  </div>
                </div>
              </div>
          )
        })
    )
  }
}


const mapStateToProps = (state) => {
    return {
      notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    deleteNote: (id) => { dispatch( deleteNote(id) )},
    fetchNotes: () =>  { dispatch( fetchNotes() ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
