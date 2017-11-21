import React, { Component } from 'react';
import css from './NavBar.css';
import PropTypes from 'prop-types';
class NavBar extends Component {
    constructor(props){
      super(props);
      this.state = {
        list: []
      }
    }
  
    async componentWillMount() {
      let {data} = this.props;
      let listToUpdate = [];      
      for(let i=0; i<data.length; i++){
        listToUpdate = [...listToUpdate, <h3 className={css.link}>{data[i].title}</h3>];
      }
      this.setState({list: listToUpdate});    
    }
    render() {
          let {list} = this.state;    
          return (
            <div className={css.NavBar}>
            {list}
              <div className={css.loginCont}>
                <h4 className={css.link}>Login</h4>
                <h4 className={css.link}>Log Out</h4>
              </div>
            </div>
          );
        }
      }
NavBar.propTypes = {
  data:PropTypes.array
}
NavBar.defaultProps = {
  data: [
    {
      title: "Action",
      link: "/Action"
    },{
      title: "Action",
      link: "/Action"
    },{
      title: "Nature",
      link: "/Nature"
    },{
      title: "Fantasy",
      link: "/Fantasy"
    },{
      title: "Fantasy",
      link: "/Fantasy"
    }
]
};
export default NavBar
