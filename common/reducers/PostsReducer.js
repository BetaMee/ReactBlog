import 
    { 
      INVALIDATE_POSTS,
      REQUEST_UPDATE_POST_BY_ID,
      REQUEST_DEL_POST_BY_ID,
      REQUEST_POSTS,
      RECEIVE_POSTS,

      POSTS_CHANGE_PAGE
    } from '../action/PostsAction.js';



const initialState = {
  isFetching:false,//文章是否在获取中
  didInvalidate:false,//是否无效
  singlePost:{//当单独请求一篇文章的时候，初始的数据

  },
  postCount:6,//依赖于返回的数量
  pageIndex:1,//post当前的指向页数
  items:[]
};//初始状态文章为空

const PostsReducer=(state = initialState, action)=>{
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
    
    case POSTS_CHANGE_PAGE://改变页数
      return Object.assign({},state,{
        pageIndex:action.nextPage
      });
    default:
      return state;
  }
} 


export default PostsReducer;