import React, { Component } from 'react';

export default class Youtube extends Component {
  render() {
    const youtubeURL = "https://www.youtube.com/watch?v=" + this.props.videoId;
    return(
      <div className="wrapper youtube">
        <img src="src/assets/images/youtube/poster.jpg" alt="YouTube" />

        <a href={youtubeURL} className="play-button">
          <img src="src/assets/images/buttons/play-button.svg" alt="YouTube" />
        </a>
      </div>
    );
  }
}
