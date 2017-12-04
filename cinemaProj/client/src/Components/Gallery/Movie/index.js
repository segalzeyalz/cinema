import React, { Component } from 'react';
import MovieImage from './MovieImage';
import MovieInfo from './MovieInfo';
import css from './Movie.css';

class Movie extends Component {
  render() {
    let {data, num, onClick, selected, onCancel} = this.props;
    return (
          <div onClick={onClick}>
            <MovieImage data={data} notSelected={selected!==num}/>
            <MovieInfo onCancel={onCancel} num={num} selected={selected===num} data={data}/> 
        </div>
    );
  }
}

export default Movie;


