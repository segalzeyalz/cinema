import React, { Component } from 'react';
import css from './Movie.css';

class MovieImage extends Component {

  render() {
    let {imageUrl} = this.props.data;
    let {showImage} = this.props;
    return (
        <div className={showImage? css.show:css.hide}>      
          <img alt="" width={"100%"} src={imageUrl} />
        </div>
    );
  }
}

export default MovieImage;


