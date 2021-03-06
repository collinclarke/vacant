import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';


class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      sessionModalIsOpen: false,
      preferencesModalIsOpen: false,
      formTypeLogin: true,
    };
    this.openSessionModal = this.openSessionModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.openPreferencesModal = this.openPreferencesModal.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  openSessionModal (bool) {
    this.setState({
      sessionModalIsOpen: true,
      formTypeLogin: bool,
    });
  }

  openPreferencesModal () {
    this.setState({
      preferencesModalIsOpen: true,
    });
  }

  handleCloseModal () {
    this.setState({
      sessionModalIsOpen: false,
      preferencesModalIsOpen: false,
    });
  }

  handleLogoClick() {
    if (this.props.history.location.pathname === "/spots") {
      this.props.history.push("/");
    } else {
      this.props.history.push("/spots");
    }
  }

  logout() {
    this.props.logout().then(() => this.props.history.push(`/`));
  }

  render() {
    return (this.props.currentUser ?
      (
        <section className="header-wrapper">
          <div className="main-logo" onClick={this.handleLogoClick}><img src={ window.logoUrl } alt="Vacant Logo"/></div>
          <section className="greeting">
            <div
              className="user-avatar-wrapper nav-avatar">
            <img onMouseEnter={this.openPreferencesModal} className="user-avatar" src={this.props.currentUser.image_url}
              alt="user avatar thumbnail"/>
            </div>
            <ReactModal
              isOpen={this.state.preferencesModalIsOpen}
              onRequestClose={this.gentleCloseModal}
              onAfterOpen={this.afterOpenModal}
              closeTimeoutMS={200}
              className="settings-modal"
              overlayClassName="settings-modal-bg"
            >
              <ul className="user-settings" onMouseEnter={this.openPreferencesModal} onMouseLeave={this.handleCloseModal} >
                <li id="user-name">Welcome {this.props.currentUser.first_name}!</li>
                <li id="user-bookings"><Link to='/bookings'>Your Bookings</Link></li>
                <li id="logout" onClick={this.logout}><span onClick={this.handleCloseModal}>Logout</span></li>
              </ul>
            </ReactModal>
          </section>
        </section>
      ) : (
        <section className="header-wrapper">
          <div className="main-logo" onClick={this.handleLogoClick}><img src={ window.logoUrl } alt="Vacant Logo"/></div>
          <section className="greeting">

            <p onClick={() => this.openSessionModal(false)}>Sign Up</p>
            <p onClick={() => this.openSessionModal(true)}>Login</p>
            <ReactModal
              isOpen={this.state.sessionModalIsOpen}
              onRequestClose={this.handleCloseModal}
              className="session-modal"
              overlayClassName="session-modal-bg"
              closeTimeoutMS={50}
            >
            <i onClick={this.handleCloseModal} className="icon ion-ios-close-empty modal-close"></i>
              <SessionFormContainer closeModal={this.handleCloseModal} formTypeLogin={this.state.formTypeLogin}/>
            </ReactModal>

          </section>
        </section>
      )
    );
  }
}

export default Greeting;
