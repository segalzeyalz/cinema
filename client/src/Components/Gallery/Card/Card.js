import React, { Component } from 'react';
import css from './Card.css';

class Card extends Component {
  render() {
    let {title, imageUrl} = this.props.data;
    return (
      <div className={css.item}>
        <h2>{title}</h2>
        <img alt="" width={"100%"} src={imageUrl} />
      </div>  
    );
  }
}

export default Card;


