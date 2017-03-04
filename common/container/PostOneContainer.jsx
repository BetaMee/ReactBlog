import React from 'react';

import PostOne from '../component/posts/PostOne.jsx';
import {connect} from 'react-redux';

import {FetchPostById} from '../action/PostsAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,//post的state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: (postId) => {
      dispatch(FetchPostById(postId));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostOne);