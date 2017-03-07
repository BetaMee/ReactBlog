import request from 'axios';

import {CreateOpenSnackbar,RemoveOpenSnackbar} from '../action/UIAction.js';
import { push } from 'react-router-redux';//路由切换

/*
 * action 类型:
 * 与post相关
 */
export const ERROR_POSTS_RENDER = 'ERROR_POSTS_RENDER';//错误处理


export const REQUEST_POSTS = 'REQUEST_POSTS';//请求文章中
export const RECEIVE_POSTS = 'RECEIVE_POSTS';//获得文章

export const POSTS_CHANGE_PAGE =　"POSTS_CHANGE_PAGE";//改变文章页数

export const SEND_POST_TO_SERVER = "SEND_POST_TO_SERVER";
export const REMOVE_POST_FROM_SERVER = "REMOVE_POST_FROM_SERVER";
export const POSTS_CHANGE_COUNTS = "POSTS_CHANGE_COUNTS";
/*
 * action 辅助函数
 */
const GetTokenFromStorage=()=>{//取Token
  return localStorage.getItem('authToken');
}

const RequestPosts=()=> {//只返回一个正在请求的状态
  return {
    type: REQUEST_POSTS,
  }
}

const ReceivePosts=(posts)=> {//获取到文章数量
  return {
    type:RECEIVE_POSTS,
    posts: posts
  }
}


const ChangePostsPage=(nextPage)=>{//改变文章页码
  return {
    type:POSTS_CHANGE_PAGE,
    nextPage:nextPage
  }
}


const GetPostSended=(message)=>{//新建文章
  return {
    type:SEND_POST_TO_SERVER,
    message:message
  }
}

const GetPostRemoved=(message)=>{
  return {
    type:REMOVE_POST_FROM_SERVER,
    message:message
  }
}
const ChangePostsCounts=(counts)=>{//改变文章的数量
  return {
    type:POSTS_CHANGE_COUNTS,
    counts:counts
  }
}

const ErrorHandle=(errMsg)=>{
  return {
    type:ERROR_POSTS_RENDER,
    message:errMsg
  }
}
/**
 * 获取所有文章，后台接口是/api/posts?limit=<Nmuber>&skip=<Nmuber>
 * @param {*} limit 
 * @param {*} skip 
 * @param {*} nextPage 
 */
export const FetchPosts=(limit,skip,nextPage)=> {//获取专门数量的文章,counts表示前端拥有的数据量
  return (dispatch,getState)=>{
    dispatch(RequestPosts());//先表明正在请求
    return request(`/api/posts?limit=${limit}&skip=${skip}`)
            .then(res=>res.data)
            .then(data=>{         
              if(!data.success){//获取资源出问题
                dispatch(ErrorHandle(resStatus.message)); 
                 
              }else{
                dispatch(ChangePostsPage(nextPage));//改变页数
                dispatch(ReceivePosts(data.posts));
                                 
              }
            })
            .catch(err=>{//Fetch出问题
                dispatch(ErrorHandle(err.message));         
                                                      
            });
  }
}
/**
 * 
 * @param {*} postId 
 */
export const SendPostToServer = (title,content)=>{
  return (dispatch,getState)=>{
    dispatch(RequestPosts());//先表明正在请求
    return request.post(`/api/posts`,{title,content},{
              headers:{
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization':`${GetTokenFromStorage()}`
              }
            })
            .then(res=>{
              let resStatus=res.data;
              if(!resStatus.success){
                dispatch(ErrorHandle(resStatus.message));
                dispatch(CreateOpenSnackbar());//开启snaker                                               
              }else{
                dispatch(GetPostSended(resStatus.message));
                dispatch(ChangePostsCounts(resStatus.counts));
                dispatch(CreateOpenSnackbar());//开启snaker        
                dispatch(push(`/posts`)); //通过react-router-redux进行切换                                    
                                                       
              }
            })
            .catch(err=>{
                dispatch(ErrorHandle(err.message));      
                dispatch(CreateOpenSnackbar());//开启snaker                                                         
            });
  }
}


export const RemovePostById=(postId)=>{
  return (dispatch,getState)=>{
    dispatch(RequestPosts());//先表明正在请求
    return request.post('/api/posts/remove',{postId},{
      headers:{
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization':`${GetTokenFromStorage()}`
      }
    })
    .then(res=>{
      let resStatus=res.data;
        if(!resStatus.success){
          dispatch(ErrorHandle(resStatus.message));
          dispatch(RemoveOpenSnackbar());//开启snaker                                               
        }else{
          dispatch(GetPostRemoved(resStatus.message));
          dispatch(ChangePostsCounts(resStatus.counts));
          dispatch(RemoveOpenSnackbar());//开启snaker          
          dispatch(push('/posts')); //通过react-router-redux进行切换                                    
        }
    })
    .catch(err=>{
      dispatch(ErrorHandle(err.message));      
      dispatch(RemoveOpenSnackbar());//开启snaker 
    })
  }
}
