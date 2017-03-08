import 
    { 
      ERROR_POSTS_RENDER,
      REQUEST_POSTS,
      RECEIVE_POSTS,
      POSTS_CHANGE_PAGE,

      POSTS_CHANGE_COUNTS,
      SEND_POST_TO_SERVER,
      SWITCH_EDIT_MODEL,
      REMOVE_POST_FROM_SERVER,
      UPDATE_POST_FROM_SERVER
    } from '../action/PostsAction.js';



const initialState = {
  isFetching:false,//文章是否在获取中
  didInvalidate:false,//是否无效
  isEdit:false,
  postCounts:0,//依赖于返回的数量
  pageIndex:1,//post当前的指向页数
  message:"",
  items:[]
};//初始状态文章为空

const PostsReducer=(state = initialState, action)=>{
  switch(action.type) {
    case ERROR_POSTS_RENDER://当出错的时候
      return Object.assign({}, state, {
        message:action.errMsg
      });

      //请求类
    case REQUEST_POSTS://请求所有的文章
      return Object.assign({},state,{
        isFetching:true,
        didInvalidate:false,
      });
    
    case RECEIVE_POSTS://获取一定数据
      return Object.assign({},state,{
        isFetching:false,
        didInvalidate:false,
        items:action.posts
      }); 
    case SEND_POST_TO_SERVER://发送到服务器
      return Object.assign({},state,{
        isFetching:false,
        didInvalidate:false,
        message:action.message
      });
    case REMOVE_POST_FROM_SERVER:
      return Object.assign({},state,{
        isFetching:false,
        didInvalidate:false,
        message:action.message
      });
    case SWITCH_EDIT_MODEL:
      return Object.assign({},state,{
        isFetching:false,
        didInvalidate:false,
        isEdit:true,
      });
    case UPDATE_POST_FROM_SERVER:
      return Object.assign({},state,{
        isFetching:false,
        didInvalidate:false,
        isEdit:false,
        message:action.message,
        items:[].push(action.post)
      });
    case POSTS_CHANGE_PAGE://改变页数
      return Object.assign({},state,{
        pageIndex:action.nextPage
      });
    case POSTS_CHANGE_COUNTS:
      return Object.assign({},state,{
        postCounts:action.counts
      });
    default:
      return state;
  }
} 


export default PostsReducer;