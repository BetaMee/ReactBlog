import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import marked from 'marked';

import Editor from './components/Editor.jsx';
// import CSSStyles from './PostOne.css';

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


  
  
  render(){
     const {getTitleInput,getContentInput,editorState,isLogin} = this.props;
     
      return (
        <div>
          <Card>
            <CardHeader
              title={"hhh"}
              subtitle={"hhhh"}
              avatar={"jjkjkl"}
            />
            <Divider />
            <CardText>
              {isLogin==true?
                (
                <Editor
                getTitleInput={getTitleInput}
                getContentInput={getContentInput}
                editorState={editorState}
                />):
                (
                  <div>请先登陆</div>
                )}
            </CardText>
              <CardActions>
                <FlatButton label="确定" onTouchTap={this.handleExpand} />
                <FlatButton label="重置" onTouchTap={this.handleReduce} />
              </CardActions>
          </Card>    
        </div>
    ); 
  }
}


export default PostCreate;