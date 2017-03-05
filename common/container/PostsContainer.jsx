import React from 'react';

import PostsList from '../component/posts/PostsList.jsx';
import {connect} from 'react-redux';

import {FetchPosts} from '../action/PostsAction.js';


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts//post的state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts:(limit,skip,nextPage)=>{//获取一定数量的文章，异步
      dispatch(FetchPosts(limit,skip,nextPage));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsList);