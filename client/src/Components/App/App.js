import React, { Component } from 'react';
import style from './App.css';
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import API from '../../logics/API'

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
          <Header icon="fa fa-shopping-basket" title="Branch Finder"/>
          <Aside/>
          <Gallery />
          <Footer/>
      </div>
    );
  }
}

export default App;