import React, { Component } from 'react';
import css from './Movie.css';

class MovieImage extends Component {
  render() {
    let {notSelected} = this.props;
    let {imageUrl} = this.props.data;
    return (
        <div>      
          {notSelected && 
            <img alt="" width={"100%"} src={imageUrl} />}
        </div>
    );
  }
}

export default MovieImage;


