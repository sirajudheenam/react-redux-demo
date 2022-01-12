import React, { Component } from "react";
import "./Modal.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  };
  toggleModal = () => {
    if ( this.state.isOpen === true ) {
      this.setState({isOpen: false})
    } else {
      this.setState({isOpen: true})
    }
  };
  render() {
    const widthStyle =  { width: "18rem" };
    return (
      <div className="App">
        <button onClick={this.toggleModal} className="btn btn-primary btn-sm" >Edit</button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div className="note">
            <div className="card text-center m-2" style={widthStyle}>
              <div className="card-header text-center">{this.props.note.name}</div>
              <div className="card-body">
                <p className="card-text">{this.props.note.description}</p>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          </div>
          <button onClick={this.toggleModal} className="btn btn-primary btn-sm" >Close</button>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
