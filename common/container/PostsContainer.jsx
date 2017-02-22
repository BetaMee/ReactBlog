import React from 'react';

import Posts from '../component/posts/Posts.jsx';
import {connect} from 'react-redux';

import {fetchPosts} from '../action/PostsAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts//post的state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);