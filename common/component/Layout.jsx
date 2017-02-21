import React,{Component} from  'react';
import {Link} from 'react-router';



import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';


class Layout extends Component {
  render() {
    // console.log(this.props.children);
    return (
        <div>
          <Header siteTitle="十二棵橡树"/>
            <div className="app-content">
              {this.props.children}
            </div>
          <Footer/>
        </div>
    );
  }
}

export default Layout;