import React, { Component } from 'react';

export default class ImageGridItem extends Component {
  render() {
    const imageURL = "src/assets/images/" + this.props.image;

    return(
      <div className="item column-4">
        <img src={imageURL} alt="Idea" />
        <p>{this.props.text}</p>
      </div>
    );
  }
}
