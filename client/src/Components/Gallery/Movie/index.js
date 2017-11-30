import React, { Component } from 'react';
import MovieImage from './MovieImage';
import MovieInfo from './MovieInfo';
import css from './Movie.css';

class Movie extends Component {
  render() {
    let {data, num, onClick, selected} = this.props;
    return (
          <div className={css.clickableDiv} onClick={onClick}>
            <MovieImage data={data} notSelected={selected!==num}/>
            <MovieInfo num={num} selected={selected===num} data={data}/> 
        </div>
    );
  }
}

export default Movie;


