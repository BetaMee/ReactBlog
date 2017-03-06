import React from 'react';

import PostCreate from '../component/posts/PostCreate.jsx';
import {connect} from 'react-redux';

import {GetTitleInput,GetContentInput} from '../action/EditorAction.js';

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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostCreate);