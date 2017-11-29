import React, { Component } from 'react';
import MovieImage from './MovieImage';
import MovieInfo from './MovieInfo';
import css from './Movie.css';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      showImage: true,
      selected: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let {showImage} = this.state;
    let selected =this.props.num;
    this.setState({showImage: !showImage, selected:selected});
  }
  render() {
    let {showImage, selected} = this.state;
    let {data, num} = this.props;
    return (
          <div className={css.clickableDiv} onClick={this.handleClick}>
            <MovieImage showImage={showImage} data={data} />
            <MovieInfo num={num} selected={selected} data={data}/> 
        </div>
    );
  }
}

export default Movie;


