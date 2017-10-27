import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';


class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      formType: 'login'
    };
    this.handleOpenModal = this.openModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  openModal (type) {
    this.setState({
      modalIsOpen: true,
      formType: type,
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

          <a href="/#/signup" onClick={() => this.openModal('signup')}>Sign Up</a>
          <a href="/#/login" onClick={() => this.openModal('login')}>Login</a>
          <ReactModal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.handleCloseModal}
          >
          <i onClick={this.handleCloseModal} className="icon ion-close"></i>
            <SessionFormContainer formType={this.state.formType}/>
          </ReactModal>

        </section>

      )
    );
  }
}

export default Greeting;
