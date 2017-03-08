import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';


import Editor from './components/Editor.jsx';


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
        editorState,isLogin,postMsg,snkStatus,user,
        changeSnkStatus
    } = this.props;
 
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
              title={user.name}
              subtitle={user.sign}
              avatar={user.avatar}
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
              </CardActions>
          </Card>    
        </div>
    ); 
  }
}


export default PostCreate;