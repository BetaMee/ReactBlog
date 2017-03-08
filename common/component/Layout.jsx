import React,{Component} from  'react';
import HeaderContainer from '../container/HeaderContainer.jsx';
import Footer from './layout/Footer.jsx';

import CSSStyles from './Layout.css';


class Layout extends Component {
  constructor(props){
    super(props);
  }
  

  
  render() {
    return (
        <div className={CSSStyles.root}>
          <HeaderContainer/>
            <div  className={CSSStyles.main}>
              {this.props.children}
            </div>
          <Footer/>
        </div>
    );
  }
}


export default Layout;