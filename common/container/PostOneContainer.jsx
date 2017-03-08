import React from 'react';

import PostOne from '../component/posts/PostOne.jsx';
import {connect} from 'react-redux';

import {FetchPostById,RemovePostById,EditPostById,SwitchEditMode} from '../action/PostsAction.js';
import {RemoveOpenSnackbar} from '../action/UIAction.js';
import {GetTitleInput,GetContentInput} from '../action/EditorAction.js';


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,//post的state
    isLogin:state.user.isLogin,
    postMsg:state.posts.message,
    snkStatus:state.UI.removeSnackbar,
    editorState: state.editor,//post的state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: (postId) => {
      dispatch(FetchPostById(postId));
    },
    removePostById: (postId)=>{
      dispatch(RemovePostById(postId));
    },
    updatePostById:(postId,title,content)=>{
      dispatch(UpdatePostById(postId,title,content));
    },
    changeSnkStatus:()=>{
      dispatch(RemoveOpenSnackbar());
    },
    //编辑时调用的函数
    switchEditMode:()=>{
      dispatch(SwitchEditMode());
    },
    getTitleInput: (title) => {
      dispatch(GetTitleInput(title));
    },
    getContentInput:(content)=>{
      dispatch(GetContentInput(content));
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostOne);