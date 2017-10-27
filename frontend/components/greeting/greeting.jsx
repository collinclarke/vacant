import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';


class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      formTypeLogin: true,
    };
    this.handleOpenModal = this.openModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  openModal (bool) {
    this.setState({
      modalIsOpen: true,
      formTypeLogin: bool,
    });
  }

  handleCloseModal () {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (this.props.currentUser ?
      (
        <section className="greeting">
          <p>Welcome { this.props.currentUser.first_name}!</p>
          <img className="user-avatar" src={this.props.currentUser.image_url}
            alt="user avatar thumbnail"/>
          <p id="logout" onClick={this.props.logout}>Logout</p>
        </section>
      ) : (
        <section className="greeting">

          <p onClick={() => this.openModal(false)}>Sign Up</p>
          <p onClick={() => this.openModal(true)}>Login</p>
          <ReactModal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.handleCloseModal}
            className="session-modal"
            overlayClassName="session-modal-bg"
          >
          <i onClick={this.handleCloseModal} className="icon ion-ios-close-empty modal-close"></i>
            <SessionFormContainer formTypeLogin={this.state.formTypeLogin}/>
          </ReactModal>

        </section>

      )
    );
  }
}

export default Greeting;
