import React from 'react';

import Indexpage from '../component/page/Indexpage.jsx';
import {connect} from 'react-redux';

import {
  IndexChangeImgDepth,
  IndexChangeLogo1Depth,
  IndexChangeLogo2Depth,
  IndexChangeLogo3Depth
} from '../action/UIAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    indexUI: state.UI.indexpage//拿到组件index的UIstate
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeImgDepth: (depth) => {//更改图片阴影
      dispatch(IndexChangeImgDepth(depth))
    },
    changeLogo1Depth: (depth) => {//更改图片阴影
      dispatch(IndexChangeLogo1Depth(depth))
    },
    changeLogo2Depth: (depth) => {//更改图片阴影
      dispatch(IndexChangeLogo2Depth(depth))
    },
    changeLogo3Depth: (depth) => {//更改图片阴影
      dispatch(IndexChangeLogo3Depth(depth))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Indexpage);