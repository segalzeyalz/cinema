import React from 'react';
import css from './Movie.css';
import YoutubePlay from './YoutubePlay';

export const MovieInfo = (props) => {
  return(
    <div className={props.showInfoNum? css.show:css.hide}>
      <h3>{props.data.title}</h3>
      <i className="fa fa-youtube-play" aria-hidden="true"></i>          
      <YoutubePlay videoId="NJsa6-y4sDs"/>
    </div>
  )
}

export default MovieInfo