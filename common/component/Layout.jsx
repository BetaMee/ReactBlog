import React,{Component} from  'react';
// import {Link} from 'react-router';

import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';


class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
          <div className="app-content">
            {this.props.children}
          </div>
        <Footer/>
      </div>
    );
  }
}