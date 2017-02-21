import React,{Component} from  'react';
// import {Link} from 'react-router';



// import Header from './layout/Header.jsx';
// import Footer from './layout/Footer.jsx';


// class Layout extends Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//         <div>
//           <Header siteTitle="十二棵橡树"/>
//             <div className="app-content">
//               {this.props.children}
//             </div>
//           <Footer/>
//         </div>
//     );
//   }
// }

class Layout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
              {this.props.children}
        </div>
    );
  }
}

export default Layout;