import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YoutubePlay extends Component {
  render() {
    const opts = {
      height: '150',
      width: '320',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        end: 30,
        fs: 0,
        iv_load_policy: 3,
        listType:"search",
        start: 20
      }
    };

    return (
      <YouTube
        videoId={"2g811Eo7K8U" && this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default YoutubePlay;
