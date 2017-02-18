import React,{Component} from  'react';
// import {Link} from 'react-router';

import Header from './component/Header';
import Footer from './component/Footer';


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