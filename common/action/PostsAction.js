import fetch from 'isomorphic-fetch';

/*
 * action 类型:
 * 与post相关
 */
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';//无效的文章
export const REQUEST_CREATE_POST_BY_USERID= 'REQUEST_CREATE_POST_BY_USERID';//请求发表文章
export const REQUEST_UPDATE_POST_BY_ID = 'REQUEST_UPDATE_POST_BY_ID';//请求更新文章
export const REQUEST_DEL_POST_BY_ID = 'REQUEST_DEL_POST_BY_ID';//请求删除文章
export const REQUEST_POSTS = 'REQUEST_POSTS';//请求文章
export const RECEIVE_POSTS = 'RECEIVE_POSTS';//获得文章

/*
 * action 函数:
 */

export const requestPosts=()=> {//只返回一个正在请求的状态
  return {
    type: REQUEST_POSTS,
  }
}

export const requestUpdatePostById=()=>{//只返回一个正在请求的状态
  return {
    type: REQUEST_UPDATE_POST_BY_ID,
  }
}

export const requestDeletePostById=()=> {//只返回一个正在请求的状态
  return {
    type: REQUEST_DEL_POST_BY_ID,
  }
}


export const requestCreatePostByUser=()=> {
  return {
    type: REQUEST_CREATE_POST_BY_USERID,
  }
}

export const receivePosts=(jsonData)=> {
  return {
    type:RECEIVE_POSTS,
    posts: jsonData
  }
}

export const errorGetPost=()=>{
  return {
    type: INVALIDATE_POSTS
  }
}


export const fetchPosts=()=> {
  return (dispatch,getState)=>{
    dispatch(requestPosts());//先表明正在请求
    return fetch('/api/posts')
            .then(res=>res.json())
            .then(json=>dispatch(receivePosts(json)))
  }
}


export const createPostByUser=(post, user)=>{
  return (dispatch,getState)=>{
    dispatch(requestCreatePostByUser());//先表明正在请求    
    
    
    let option={
      method:'post',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body:{
        post,
        user
      }
    };
    return fetch('/api/post',option)
            .then(res=>res.json())
            .then(json=>dispatch(receivePosts()))
            .catch(()=>dispatch(errorGetPost()));
  }
}
export const updatePostById=(postId)=> {
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

export const delePostById=(postId)=> {
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