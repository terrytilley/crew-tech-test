import React, { Component } from 'react';

import ProductGridItem from './ProductGridItem';

export default class ProductGrid extends Component {
  renderItems() {
    return this.props.items.map((item, key) => {
      return(
        <ProductGridItem
          key={key}
          image={item.image}
          text={item.text}
          url={item.url.gben} />
      );
    });
  }

  render() {
    return(
      <div className="wrapper product-grid">
        <h2>{this.props.heading}</h2>
        {this.renderItems()}
      </div>
    );
  }
}
