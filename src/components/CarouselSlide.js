import React, { Component } from 'react';

export default class CarouselSlide extends Component {
  render() {
    const image1 = "src/assets/images/" + this.props.images[0];
    const image2 = "src/assets/images/" + this.props.images[1];

    return(
      <div>
        <div className="images">
          <img className="bottom" src={image2} alt="Sleep Tip" />
          <img className="top" src={image1} alt="Sleep Tip" />
        </div>

        <div className="tip">
          <h3>{this.props.heading}</h3>
          <h4>IKEA Sleep Coach says:</h4>
          <p>"{this.props.text}"</p>
        </div>
      </div>
    );
  }
}
