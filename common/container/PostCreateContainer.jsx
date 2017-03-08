import React from 'react';

import PostCreate from '../component/posts/PostCreate.jsx';
import {connect} from 'react-redux';

import {GetTitleInput,GetContentInput} from '../action/EditorAction.js';
import {SendPostToServer} from '../action/PostsAction.js';
import {CreateOpenSnackbar} from '../action/UIAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    editorState: state.editor,//post的state
    isLogin:state.user.isLogin,
    postMsg:state.posts.message,
    snkStatus:state.UI.createSnackbar,
    user:state.user.profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTitleInput: (title) => {
      dispatch(GetTitleInput(title));
    },
    getContentInput:(content)=>{
      dispatch(GetContentInput(content));
    },

    sendPostToServer:(title,content)=>{
      dispatch(SendPostToServer(title,content));
    },

    changeSnkStatus:()=>{
      dispatch(CreateOpenSnackbar());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostCreate);