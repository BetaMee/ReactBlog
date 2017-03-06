import React from 'react';

import PostCreate from '../component/posts/PostCreate.jsx';
import {connect} from 'react-redux';

import {GetTitleInput,GetContentInput} from '../action/EditorAction.js';
import {SendPostToServer} from '../action/PostsAction.js';


const mapStateToProps = (state, ownProps) => {
  return {
    editorState: state.editor,//post的state
    isLogin:state.user.isLogin,
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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostCreate);