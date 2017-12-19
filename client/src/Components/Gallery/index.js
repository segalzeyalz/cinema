import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Gallery.css';
import Movie from './Movie'

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      selected: false
    }
    this.handleSelectImageClick = this.handleSelectImageClick.bind(this);
    this.handleDeselectImageClick = this.handleDeselectImageClick.bind(this);
    
  }
  changeSelect(list ,num, selected){
    let {data} = this.props;
      list[selected]=
        <Movie key={selected} num={selected} data={data[selected]} selected={num}
         onClick={()=>this.handleSelectImageClick(selected)}
         onCancel = {()=>this.handleDeselectImageClick(selected)}
         />
    list[num]=
      <Movie key={num} num={num} data={data[num]} 
      selected={num} onClick={()=>this.handleSelectImageClick(num)}
        onCancel = {()=>this.handleDeselectImageClick(num)}
        />
        this.setState({selected: num, list:list});
  }
  handleDeselectImageClick(num){
    let {list} = this.state;
    let {data} = this.props;
    list[num]=
    <Movie key={num} num={num} data={data[num]} selected={false}
     onClick={()=>this.handleSelectImageClick(num)}
     onCancel = {()=>this.handleDeselectImageClick(num)}
     />
     this.setState({selected:false, list: list});
  }

  handleSelectImageClick(num){ 
    let {list, selected} = this.state;
    this.setState({selected:num});
    this.changeSelect(list,num, selected);
  }

  async componentWillMount() {
    let {data} = this.props;
    let {selected} = this.state;
    let listToUpdate = [];      
    for(let i=0; i<data.length; i++){
      listToUpdate = [...listToUpdate, <Movie key={i}
        num={i}
        data={data[i]}
        selected={selected}
        onClick={()=>this.handleSelectImageClick(i)}
        onCancel = {()=>this.handleDeselectImageClick(i)}
        />]
    }
    this.setState({list: listToUpdate});    
}
  
  render() {
    let {list} = this.state;    
    return (
      <div className={css.Wrapper}>
        {list}
      </div>
    );
  }
}
Gallery.propTypes = {
  data:PropTypes.array
}
Gallery.defaultProps = {
  data: [
    {"id":0, "title":"Kill Bill Vol. 1", "imageUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg", "videoId":"7kSuas6mRpk"},
    {"id":1, "title":"Kill Bill Vol. 2", "imageUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg", "videoId":"WTt8cCIvGYI"},
    {"id":2, "title":"Ghostbusters", "imageUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SY1000_CR0,0,650,1000_AL_.jpg", "videoId":"w3ugHP-yZXw"},
    {"id":3, "title":"Saving Private Ryan", "imageUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcR0lDhR_dXAKTm9wysp3nWu6kP0V5skJBVbCNC_Q8urAWcr4iF_", "videoId":"RYID71hYHzg"},
    {"id":4, "title":"The Martian",  "imageUrl":"https://i.ytimg.com/vi/TeZDLAaDYos/movieposter.jpg", "videoId":"ej3ioOneTy8"},
    {"id":5, "title":"Amelie",  "imageUrl":"http://is5.mzstatic.com/image/thumb/Video/v4/5d/e2/42/5de24224-2218-2341-0667-12898a6ca7da/source/1200x630bb.jpg", "videoId":"HUECWi5pX7o"},
    {"id":6, "title":"The Godfather",  "imageUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg", "videoId":"sY1S34973zA"},
    {"id":7, "title":"E.T", "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/512P9C25YEL._SY445_.jpg", "videoId":"DSx8Jobx-Gs"},
    {"id":8, "title":"Wonder Woman", "imageUrl":"http://t1.gstatic.com/images?q=tbn:ANd9GcQcCAOmt-FsRsR8GebIzI67qSvdQ2JLYDRLxeAcbH-541fzqq1H", "videoId": "VSB4wGIdDwo"},
    {"id":9, "title":"The Lion King", "imageUrl":"http://t1.gstatic.com/images?q=tbn:ANd9GcQ2vZQTR7HyXqWbjYYr0HNfAyDLRq7EXogJGAgG0bbM8odQlDLV", "videoId": "4sj1MT05lAA"},
    {"id":10, "title":"Leon", "imageUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR4,0,182,268_AL_.jpg", "videoId":"Dc1KzpMnuX0"},
    {"id":11, "title":"Cinama Paradiso", "imageUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_.jpg", "videoId":"C2-GX0Tltgw"}
]
};
export default Gallery;
