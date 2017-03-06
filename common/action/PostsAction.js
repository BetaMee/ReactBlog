import request from 'axios';

/*
 * action 类型:
 * 与post相关
 */
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';//无效的文章
export const REQUEST_CREATE_POST_BY_USERID= 'REQUEST_CREATE_POST_BY_USERID';//请求发表文章
export const REQUEST_UPDATE_POST_BYID = 'REQUEST_UPDATE_POST_BYID';//请求更新文章
export const REQUEST_DEL_POST_BYID = 'REQUEST_DEL_POST_BYID';//请求删除文章


export const REQUEST_POSTS = 'REQUEST_POSTS';//请求文章中
export const RECEIVE_POSTS = 'RECEIVE_POSTS';//获得文章
// export const RECEIVE_POST_BYID='RECEIVE_POST_BYID';//通过postid来请求获取文章

export const POSTS_CHANGE_PAGE =　"POSTS_CHANGE_PAGE";//改变文章页数

export const SEND_POST_TO_SERVER = "SEND_POST_TO_SERVER";
export const POSTS_CHANGE_COUNTS = "POSTS_CHANGE_COUNTS";
/*
 * action 辅助函数
 */
const GetTokenFromStorage=()=>{
  return localStorage.getItem('authToken');
}

const RequestPosts=()=> {//只返回一个正在请求的状态
  return {
    type: REQUEST_POSTS,
  }
}

const ReceivePosts=(posts)=> {
  return {
    type:RECEIVE_POSTS,
    posts: posts
  }
}


const ChangePostsPage=(nextPage)=>{
  return {
    type:POSTS_CHANGE_PAGE,
    nextPage:nextPage
  }
}


const GetPostSended=(message)=>{
  return {
    type:SEND_POST_TO_SERVER,
    message:message
  }
}

const ChangePostsCounts=(counts)=>{
  return {
    type:POSTS_CHANGE_COUNTS,
    counts:counts
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

              }else{
                dispatch(ChangePostsPage(nextPage));//改变页数
                dispatch(ReceivePosts(data.posts));
              }
            })
            .catch(err=>{//Fetch出问题

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

              }else{
                dispatch(GetPostSended(resStatus.message));
                dispatch(ChangePostsCounts(resStatus.counts));
              }
            })
            .catch(err=>{

            });
  }
}

