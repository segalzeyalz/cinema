import React, { Component } from 'react';
import MovieImage from './MovieImage';
import MovieInfo from './MovieInfo';
import css from './Movie.css';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      showImage: true,
      showInfoNum: false
    }
    this.handleFocus = this.handleFocus.bind(this);
  }
  handleFocus(){
    let {showImage} = this.state;
    let showInfoNum =this.props.num;
    this.setState({showImage: !showImage, showInfoNum:showInfoNum});
  }
  render() {
    let {showImage, showInfoNum} = this.state;
    let {data, num} = this.props;
    return (
          <div className={css.clickableDiv} onClick={this.handleFocus}>
            <MovieImage showImage={showImage} data={data} />
            <MovieInfo num={num} showInfoNum={showInfoNum} data={data}/> 
        </div>
    );
  }
}

export default Movie;


