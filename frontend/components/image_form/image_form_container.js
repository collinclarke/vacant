import React from 'react';
import { connect } from 'react-redux';
import ImageForm from './image_form';


const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadImage: img => dispatch(uploadImage(img)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageForm);
