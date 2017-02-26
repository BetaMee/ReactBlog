import React from 'react';

import PostsList from '../component/posts/PostsList.jsx';
import {connect} from 'react-redux';

import {FetchPosts,ChangePostsPage} from '../action/PostsAction.js';


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts//post的state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNextPosts:(counts)=>{//获取一定数量的文章，异步
      dispatch(FetchPosts(counts));
    },
    changePageIndex:(nextPage)=>{//单纯的改变页数，此时已有数据，不需要获取
      dispatch(ChangePostsPage(nextPage));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsList);