import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Scrollchor from 'react-scrollchor';
import ReviewItem from './review_item';
import BookingFormContainer from '../booking_form/booking_form_container';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import RatingBlurb from '../widgets/rating_blurb';


class SpotShow extends Component {

  constructor() {
    super();
    this.state = {
      sessionModalIsOpen: false,
      index: 0
    };
    this.openSessionModal = this.openSessionModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleShow(i) {
    this.setState({index: i});
    this.refs[i].scrollIntoView({behavior: 'smooth', block: 'end'});
  }

  openSessionModal() {
    this.setState({
      sessionModalIsOpen: true,
    });
  }

  handleCloseModal () {
    this.setState({
      sessionModalIsOpen: false,
    });
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    this.props.removeGlobalScroll();
    document.querySelector('header').classList.remove('fixed');
  }

  componentWillUnmount() {
    document.querySelector('header').classList.add('fixed');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  reviewHelper() {
    const { reviews } = this.props.spot;
    if (reviews) {
    return reviews.map(reviewId => {
      if (this.props.reviews[reviewId] && this.props.reviews[reviewId].public_review) {
        return <ReviewItem key={reviewId} review={ this.props.reviews[reviewId] }/>;
      }
    });
    }
  }

  render() {
    const loading = this.props.loading;

    if (loading) {
      return (
        <ReactCSSTransitionGroup
          className="loading-wrapper"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
          transitionName="errors">
          <div className="loading full-screen">LOADING</div>
        </ReactCSSTransitionGroup>

      );
    }

    if (this.props.spot) {
      const { title, address, price, kind, cover_image, id, reviews, ratings, numReviews, host_name } = this.props.spot;
      return (
        <section className="spot-show">

          <ReactModal
            isOpen={this.state.sessionModalIsOpen}
            onRequestClose={this.handleCloseModal}
            className="session-modal"
            closeTimeoutMS={50}
            overlayClassName="session-modal-bg"
          >
          <i onClick={this.handleCloseModal} className="icon ion-ios-close-empty modal-close"></i>
            <SessionFormContainer closeModal={this.handleCloseModal} />
          </ReactModal>

          <section className="spot-show-image">
            <img src= { cover_image } alt="spot image"/>
          </section>

          <nav id="spot-show-nav">
            <ul>
              <li><a onClick={this.handleShow.bind(this, 0)}>Overview</a></li>
              <li>
                <span className="list-bullet">&bull;</span>
                <a onClick={this.handleShow.bind(this, 1)}>Ratings</a>
              </li>
              <li>
                <span className="list-bullet">&bull;</span>
                <a onClick={this.handleShow.bind(this, 2)}>Reviews</a>
              </li>
            </ul>
          </nav>

          <section id="booking-form">
            <BookingFormContainer openSessionModal={ this.openSessionModal }
              spotId={ id } price={ price } numReviews={ numReviews }
              overall={ ratings.overall }/>
          </section>

          <section id="overview" ref={0} className="spot-show-details">
            <div className="spot-show-title">{ title }</div>
            <div className="spot-show-subtitle">
              <div className="spot-show-type-address">
                { kind }<span className="list-bullet">&bull;</span>{ address }
              </div>
              <div className="spot-host-name">Hosted by {host_name}</div>
            </div>
          </section>

          <section className="spot-ratings"  ref={1}>
              <div className="ratings-header">
                 Overall <RatingBlurb rating={ratings.overall} numReviews={ numReviews }/>
              </div>
          </section>

          <section className="spot-reviews"  ref={2}>
            <ul>
            {this.reviewHelper()}
            </ul>
          </section>

        </section>
      );
    } else {
      return null;
    }
  }
}

export default SpotShow;
