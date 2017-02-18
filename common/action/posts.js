import fetch from 'isomorphic-fetch';

/*
 * action 类型:
 * 与post相关
 */
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';
export const REQUEST_UPDATE_POST_BY_ID = 'REQUEST_UPDATE_POST_BY_ID';
export const REQUEST_DEL_POST_BY_ID = 'REQUEST_DEL_POST_BY_ID';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

/*
 * action 函数:
 */

function requestPosts() {//只返回一个正在请求的状态
  return {
    type: REQUEST_POSTS,
  }
}

function requestUpdatePostById() {//只返回一个正在请求的状态
  return {
    type: REQUEST_UPDATE_POST_BY_ID,
  }
}

function requestDeletePostById() {//只返回一个正在请求的状态
  return {
    type: REQUEST_DEL_POST_BY_ID,
  }
}

function receivePosts(jsonData) {
  return {
    type:RECEIVE_POSTS,
    posts: jsonData
  }
}

function errorGetPost(){
  return {
    type: INVALIDATE_POSTS
  }
}


export function fetchPosts() {
  return (dispatch,getState)=>{
    dispatch(requestPosts());//先表明正在请求
    return fetch('/api/posts')
            .then(res=>res.json())
            .then(json=>dispatch(receivePosts(json)))
  }
}

export function updatePostById(postId) {
  return (dispatch,getState) =>{
    dispatch(requestPosts());//先表明正在请求    

    let option={
      method:'post',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body:[]
    };
    return fetch(`/api/posts/${postId}/edit`,option)
            .then(res=>res.json())
            .then(json=>dispatch(receivePosts(json)))
            .catch(()=>dispatch(errorGetPost()));
  }
}

export function delePostById(postId) {
  return (dispatch,getState) =>{
    dispatch(requestPosts());//先表明正在请求    

    let option={
      method:'post',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body:[]
    };
    return fetch(`/api/posts/${postId}/remove`)
            .then(res=>res.json())
            .then(json=>dispatch(receivePosts(json)))
            .catch(()=>dispatch(errorGetPost()));//获取失败时
  }
}