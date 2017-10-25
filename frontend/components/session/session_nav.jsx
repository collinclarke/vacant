import React, { Component } from 'react';
import ReactModal from 'react-modal';
import SessionForm from './session_form';

class SessionNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalContent: null
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
  }

  handleOpenModal (type) {
    this.setState({ showModal: true,
      modalContent: type
     });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  changeFormType(type) {
    this.setState({ modalContent: type });
  }

  newSessionForm () {
    const {login, signup} = this.props;
    const action = this.state.modalContent === "login" ? login : signup;
    return (
      <SessionForm processForm={ action }
        closeModal={this.handleCloseModal}
        formType={`this.state.modalContent`}/>
    );
  }

  render () {
    const message = this.state.modalContent === 'login' ? "Don't have an account?" :
      "Already have an account?";
    const altLink = this.state.modalContent === 'login' ? 'Sign Up' : 'Log In';
    const altType = this.state.modalContent === "login" ? 'signup' : 'login';

    return this.props.currentUser ? (
      <section className="greeting">
        <p>Welcome { this.props.currentUser.username }!</p>
        <button type="logout" onClick={this.props.logout}>Logout</button>
      </section>
    ) : (
      <section className="session-nav">
        <button onClick={() => this.handleOpenModal('login')}>Login</button>
        <button onClick={() => this.handleOpenModal('signup')}>Signup</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="session-form"
           overlayClassName="modal full-screen"
           shouldCloseOnOverlayClick={true}
        >
          <i onClick={this.handleCloseModal} className="icon ion-ios-close-empty modal-close"></i>

          { this.newSessionForm() }

          <span className="form-alternative">
            <span>{ message }</span>
            <button onClick={() => this.changeFormType(altType)}>{ altLink }</button>
          </span>
        </ReactModal>
      </section>
    );
  }

}

export default SessionNav;
