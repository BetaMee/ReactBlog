import React from 'react';

import {connect} from 'react-redux';
import Counter from '../components/Counter.jsx';
import {bindActionCreators} from 'redux';
import {counterAction} from '../action/counteraction.js';//导入action分法函数
import AsyncCounterAction from '../action/counteraction.js';
//mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onIncreaseClick: () => {
      console.log("onIncreaseClick here");
      dispatch(counterAction())
    },

    AsyncRequestDispatch:()=>{
      console.log("AsyncRequestDispatch here");
      console.log(AsyncCounterAction());      
      dispatch(AsyncCounterAction());
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);