import React, { Component } from 'react';
import RatingBlurb from '../widgets/rating_blurb';
import lodash from 'lodash';

class ReviewRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange(e) {
    this.setState({selectedOption: e.target.value});
  }

  componentDidUpdate() {
    if (_.hasIn(this.props, 'handleChange')) {
      const type = this.props.type;
      this.props.handleChange({[type]: this.state.selectedOption});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { type } = this.props;
    const set = { [type]: this.state.selectedOption };
    this.props.handleSubmit(set);
  }

  render() {

    return (
      <form id={this.props.type} className="star-radio"
        onSubmit={this.handleSubmit}>
          <input id="one" onChange={this.handleOptionChange}
            checked={this.state.selectedOption === '1'} type="radio" value="1"/>
          <input id="two" onChange={this.handleOptionChange}
            checked={this.state.selectedOption === '2'} type="radio" value="2"/>
          <input id="three" onChange={this.handleOptionChange}
            checked={this.state.selectedOption === '3'} type="radio" value="3"/>
          <input id="four" onChange={this.handleOptionChange}
            checked={this.state.selectedOption === '4'} type="radio" value="4"/>
          <input id="five" onChange={this.handleOptionChange}
            checked={this.state.selectedOption === '5'} type="radio" value="5"/>
          <RatingBlurb rating={this.state.selectedOption} />
          <button type="submit"></button>
      </form>
    );
  }
}


export default ReviewRadio;
