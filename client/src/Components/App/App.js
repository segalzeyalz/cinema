import React, { Component } from 'react';
import style from './App.css';
import NavBar from '../NavBar';
import Gallery from '../Gallery';
// import API from '../../logics/API';

class App extends Component {
  render() {
    return (
      <div className={style.container}>
          <NavBar data= {[
            {
              title: "Action",
              link: "/Action"
            },{
              title: "Fantasy",
              link: "/Fantasy"
            },{
              title: "Nature",
              link: "/Nature"
            }
        ]}/>
        <Gallery />
      </div>
    );
  }
}

export default App;