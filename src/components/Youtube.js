import React, { Component } from 'react';

export default class Youtube extends Component {
  render() {
    const youtubeVideoURL = "https://www.youtube.com/watch?v=" + this.props.videoId;
    const youtubeImageURL = "src/assets/images/" + this.props.image;

    return(
      <div className="wrapper wide youtube">
        <img src={youtubeImageURL} alt="YouTube" />

        <a href={youtubeVideoURL} className="play-button">
          <img src="src/assets/images/buttons/play-button.svg" alt="YouTube" />
        </a>
      </div>
    );
  }
}
