import React, { Component } from 'react';

export default class Heading extends Component {
  render() {
    return(
      <div className="wrapper heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.subheading}</p>
      </div>
    );
  }
}
