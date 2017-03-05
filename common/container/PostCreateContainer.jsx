import React from 'react';

import PostCreate from '../component/posts/PostCreate.jsx';
import {connect} from 'react-redux';

import {FetchPostById} from '../action/PostsAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,//post的state
    isLogin:state.user.isLogin
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: (postId) => {
      dispatch(FetchPostById(postId));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostCreate);