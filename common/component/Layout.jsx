import React,{Component} from  'react';
import HeaderContainer from '../container/HeaderContainer.jsx';
import Footer from './layout/Footer.jsx';

const styles={
  root:{
    // position:"relative",
    width:"100%",
  },
  main:{
    paddingTop:"64px"
  }
};


class Layout extends Component {
  constructor(props){
    super(props);
  }
  

  
  render() {
    console.log("Layout");
    return (
        <div style={styles.root}>
          <HeaderContainer/>
            <div  style={styles.main}>
              {this.props.children}
            </div>
          <Footer/>
        </div>
    );
  }
}


export default Layout;