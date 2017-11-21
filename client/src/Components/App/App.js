import React, { Component } from 'react';
import style from './App.css';
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';
import API from '../../logics/API';

class App extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = { data: [] };
  }

   async componentWillMount(){
    let data = await this.api.getData();
    this.setState( { data } );
  }

  render() {
    return (
      <div className={style.container}>
          <NavBar />
          <Footer/>
      </div>
    );
  }
}

export default App;