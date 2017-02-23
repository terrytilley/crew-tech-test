import React, { Component } from 'react';
import Slider from 'react-slick';

import CarouselSlide from './CarouselSlide';

export default class Carousel extends Component {
  renderSlides() {
    return this.props.slides.map((slide, key) => {
      return(
        <div>
          <CarouselSlide
            key={key}
            heading={slide.heading}
            images={slide.images}
            text={slide.text} />
        </div>
      );
    });
  }

  render() {
    const settings = {
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      fade: true,
      dots: false,
      draggable: false,
      infinite: true,
      speed: 700,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <div>
        <div className="carousel">
          <Slider {...settings}>
            {this.renderSlides()}
          </Slider>
        </div>
        <div className="social-icons">
          <a href="#"><img src="src/assets/images/icons/facebook-icon.svg" alt="Facebook" /></a>
          <a href="#"><img src="src/assets/images/icons/twitter-icon.svg" alt="Twitter" /></a>
        </div>
      </div>
    );
  }
}
