import 
    { 
      INVALIDATE_POSTS,
      REQUEST_UPDATE_POST_BY_ID,
      REQUEST_DEL_POST_BY_ID,
      REQUEST_POSTS,
      RECEIVE_POSTS,
    } from '../action/posts.js';



const initialState = {
  isFetching:false,//文章是否在获取中
  didInvalidate:false,//是否无效
  items:[]
};//初始状态文章为空

export default postsReducer=(state = initialState, action)=>{
  switch(action.type) {
    case INVALIDATE_POSTS://当文章无效的时候
      return Object.assign({}, state, {
        didInvalidate:true
      });

      //请求类
    case REQUEST_UPDATE_POST_BY_ID://通过文章id更新文章数据   
    case REQUEST_POSTS://请求所有的文章
    case REQUEST_DEL_POST_BY_ID://通过文章id删除文章数据
      return Object.assign({},state,{
        isFetching:true,
        didInvalidate:false,
      });
    
    case RECEIVE_POSTS://获取数据
      return Object.assign({},state,{
        isFetching:false,
        didInvalidate:false,
        items:action.posts
      }); 
      
    default:
      return state;
  }
} 