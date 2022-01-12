import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import ModalComponent from './Modal';
class Note extends React.Component {

  handleClick = () =>  {
    const navigate = useNavigate();
    navigate("/notes");
  }

  render() {
    let { note } = this.props;
    console.log(this.props.note);

      return(
        <div>Note <button onClick={this.handleClick}>Go Home</button> </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  // let id = ownProps.match.params.id;
  // console.log("ownProps", ownProps);
  console.log(state);
  return {
    notes: state.notes
    // note: state.notes.find((note) => note.id === id )
  }
};

export default connect(mapStateToProps)(Note);
