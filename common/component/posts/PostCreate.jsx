import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Back from 'material-ui/svg-icons/maps/flight';
import Divider from 'material-ui/Divider';
import marked from 'marked';


import CSSStyles from './PostOne.css';

// const InlineStyles={
//   goTop:{
//     position:"fixed",
//     right:"5%",
//     bottom:"25%"
//   }
// }


class PostCreate extends Component{
  constructor(props){
    super(props);
  }

  
  goTopWindow=()=>{
    window.scroll(0,0);
  }
  
  
  render(){
    
     
      return (
        <div>
          Hello World
        </div>
    ); 
  }
}


export default PostCreate;