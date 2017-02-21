import React from 'react';

import Posts from '../component/posts/Posts.jsx';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts//post的state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);