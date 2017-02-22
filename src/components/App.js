import React, { Component } from 'react';

import PageHeader from './PageHeader';
import Youtube from './Youtube';
import Heading from './Heading';

import pageContent from '../data/page-content.json';
import '../assets/scss/styles.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = pageContent;
  }
  render() {
    return(
      <div>
        <PageHeader />
        <Youtube videoId={this.state.blocks[0].videoId} />
        <Heading />
      </div>
    );
  }
}
