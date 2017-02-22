import React, { Component } from 'react';

export default class ProductGridItem extends Component {
  render() {
    const imageURL = "src/assets/images/" + this.props.image;

    return(
      <div className="item column-3">
        <a href={this.props.url}>
          <img src={imageURL} alt="Product" />
          <p>{this.props.text}</p>
        </a>
      </div>
    );
  }
}
