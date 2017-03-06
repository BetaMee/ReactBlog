import 
    { 
      INVALIDATE_POSTS,
      REQUEST_UPDATE_POST_BYID,
      REQUEST_DEL_POST_BYID,
      REQUEST_POSTS,

      RECEIVE_POSTS,
      // RECEIVE_POST_BYID,
      
      POSTS_CHANGE_PAGE,

      POSTS_CHANGE_COUNTS,
      SEND_POST_TO_SERVER
    } from '../action/PostsAction.js';



const initialState = {
  isFetching:false,//文章是否在获取中
  didInvalidate:false,//是否无效
  postCounts:0,//依赖于返回的数量
  pageIndex:1,//post当前的指向页数
  message:"",
  items:[]
};//初始状态文章为空

const PostsReducer=(state = initialState, action)=>{
  switch(action.type) {
    case INVALIDATE_POSTS://当文章无效的时候
      return Object.assign({}, state, {
        didInvalidate:true
      });

      //请求类
    case REQUEST_UPDATE_POST_BYID://通过文章id更新文章数据   
    case REQUEST_POSTS://请求所有的文章
    case REQUEST_DEL_POST_BYID://通过文章id删除文章数据
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