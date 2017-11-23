import React from 'react';
import css from './Movie.css';

export const MovieInfo = (props) => {
  return(
    <div className={props.showInfo? css.show:css.hide}>
      <h3>{props.data.title}</h3>
    </div>
  )
}

export default MovieInfo