import React, { Component } from 'react';

import pageContent from '../data/page-content.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = pageContent;
  }
  render() {
    return(
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
}
