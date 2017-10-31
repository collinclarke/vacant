import React, { Component } from 'react';

class ImageForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        imageUrl: null,
        imageFile: null
      };
      this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate() {

    }

    handleChange(e) {
      e.preventDefault();
      console.log(e.target);
    }

    render() {
      return (
        <section className="image-form">

          <form>
            <input type="text" onChange={this.handleChange}/>
            <input type="text" onChange={this.handleChange}/>
          </form>
        </section>
      );
    }
}

export default ImageForm;
