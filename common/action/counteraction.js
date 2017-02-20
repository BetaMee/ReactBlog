import request from 'axios';
import fetch from 'isomorphic-fetch';

export const ADD_COUNT = 'ADD_COUNT';

export const ASYNC_REQUEST_ADD ="ASYNC_REQUEST_ADD";//异步请求中
export const ASYNC_RECEIVE_ADD ="ASYNC_RECEIVE_ADD";//成功收获数据



export const counterAction=()=> {//同步
  return {
    type: ADD_COUNT
  }
}

const AsyncCounterAction=()=>{//异步
  return dispatch=>{
    dispatch({type:ASYNC_REQUEST_ADD});//先分发一个action表明请求中
    return fetch('/api/posts')
            .then(response=>response.json())
            .then(json=>dispatch({type:ASYNC_RECEIVE_ADD, data:json}));
  }
}

export default AsyncCounterAction;