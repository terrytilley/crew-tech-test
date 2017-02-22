import React, { Component } from 'react';

import PageHeader from './PageHeader';
import Youtube from './Youtube';
import Heading from './Heading';
import ImageGrid from './ImageGrid';
import ProductGrid from './ProductGrid';

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

        <Youtube
          image={this.state.blocks[0].image}
          videoId={this.state.blocks[0].videoId} />

        <Heading
          heading={this.state.blocks[1].heading}
          subheading={this.state.blocks[1].subheading} />

        <ImageGrid
          items={this.state.blocks[2].items}
          cta={this.state.blocks[2].cta} />

        <ProductGrid
          heading={this.state.blocks[3].heading}
          items={this.state.blocks[3].items} />

        <Heading
          heading={this.state.blocks[4].heading}
          subheading={this.state.blocks[4].subheading} />
      </div>
    );
  }
}
