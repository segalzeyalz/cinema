import React, { Component } from 'react';
import MovieImage from './MovieImage';
import css from './Movie.css';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      showImage: true,
      showInfo: false
    }
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(){
    let {showImage, showInfo} = this.state;
    this.setState({showImage: !showImage, showInfo:!showInfo});
  }
  render() {
    let {showImage, showInfo} = this.state;
    return (
      <div>
        <MovieImage onHover={this.handleHover} showImage={showImage} data={this.props.data} />
      </div>  
    );
  }
}

export default Movie;


