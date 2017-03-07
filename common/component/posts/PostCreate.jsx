import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import marked from 'marked';
import Snackbar from 'material-ui/Snackbar';


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

  handlePost(e){
    const {sendPostToServer,editorState} = this.props;
    sendPostToServer(editorState.title,editorState.content);
  }
  
  
  render(){
     const {
        getTitleInput,
        getContentInput,
        editorState,isLogin,postMsg,snkStatus,
        changeSnkStatus
    } = this.props;
      
      console.log(snkStatus);
     
      return (
        <div>
          <Snackbar
            open={snkStatus}
            message={postMsg}
            autoHideDuration={4000}
            onRequestClose={e=>changeSnkStatus()}
          />
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
                <FlatButton label="确定" onTouchTap={e=>this.handlePost(e)} />
                <FlatButton label="重置"/>
              </CardActions>
          </Card>    
        </div>
    ); 
  }
}


export default PostCreate;