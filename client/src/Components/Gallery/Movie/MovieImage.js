import React, { Component } from 'react';
import css from './Movie.css';

class MovieImage extends Component {

  render() {
    let {imageUrl} = this.props.data;
    let {showImage} = this.props;

    return (
      <div>
        {showImage && (<div onMouseEnter={this.props.handleHover} onMouseLeave={this.handleHover}>      
          <img onMouseEnter={this.onHover} alt="" width={"100%"} src={imageUrl} />
        </div>)}
      </div>  
    );
  }
}

export default MovieImage;


