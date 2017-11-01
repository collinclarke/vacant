import React, { Component } from 'react';
import RatingBlurb from '../widgets/rating_blurb';


class ReviewRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
    this.setState({selectedOption: e.target.value});
  }

  render() {
    const { rating } = this.props;
    const set = { rating: this.state.selectedOption };

    return (
      <form id={this.props.type} className="star-radio"
        onSubmit={() => this.props.handleSubmit(set)}>
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
          <button type="submit">Next</button>
      </form>
    );
  }
}


export default ReviewRadio;
