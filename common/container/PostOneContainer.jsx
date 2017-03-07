import React from 'react';

import PostOne from '../component/posts/PostOne.jsx';
import {connect} from 'react-redux';

import {FetchPostById,RemovePostById} from '../action/PostsAction.js';
import {RemoveOpenSnackbar} from '../action/UIAction.js';


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,//post的state
    isLogin:state.user.isLogin,
    postMsg:state.posts.message,
    snkStatus:state.UI.removeSnackbar
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
    changeSnkStatus:()=>{
      dispatch(RemoveOpenSnackbar());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostOne);