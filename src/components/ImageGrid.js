import React, { Component } from 'react';

import ImageGridItem from './ImageGridItem';

export default class ImageGrid extends Component {
  renderItems() {
    return this.props.items.map((item, key) => {
      return(
        <ImageGridItem
          key={key}
          image={item.image}
          text={item.text} />
      );
    });
  }

  render() {
    return(
      <div className="wrapper image-grid">
        <div className="row">
          {this.renderItems()}
        </div>

        <a className="cta" href={this.props.cta.url.gben}>
          {this.props.cta.text}
        </a>
      </div>
    );
  }
}
