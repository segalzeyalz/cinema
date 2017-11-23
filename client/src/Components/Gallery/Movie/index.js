import React, { Component } from 'react';
import MovieImage from './MovieImage';
import MovieInfo from './MovieInfo';
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
    let {data} = this.props;
    return (
          <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            <MovieImage showImage={showImage} data={data} />
            <MovieInfo showInfo={showInfo} data={data}/> 
        </div>
    );
  }
}

export default Movie;


