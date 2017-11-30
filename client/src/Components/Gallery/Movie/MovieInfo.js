import React from 'react';
import css from './Movie.css';
import YoutubePlay from './YoutubePlay';
export const MovieInfo = (props) => {
  return(
    <div className={props.selected? css.show:css.hide}>
    {props.selected && 
      <div>
        <i className="fa fa-times" aria-hidden="true"></i>      
        <h3>{props.data.title}</h3>
        <i className="fa fa-youtube-play" aria-hidden="true"></i>          
        <YoutubePlay videoId={props.data.videoId}/>
        </div>
      }
      </div>
  )
}

export default MovieInfo