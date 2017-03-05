import {
  REQUEST_SIGNIN,
  REQUEST_SIGNINOUT,
  REQUEST_SIGNINUP,
  ERROR_USER,
  FINISH_SIGNIN,
  FINISH_SIGNOUT,
  FINISH_SIGNUP
} from '../action/UserAction.js';


const initialState = {
  isLoading:false,//文章是否在获取中
  isLogin:false,//是否已登陆
  errMsg:'',//出错的信息
  profile:{}
};//初始状态文章为空

const UserReducer=(state=initialState,action)=>{
    switch(action.type){
      case REQUEST_SIGNIN:
      case REQUEST_SIGNINOUT:
      case REQUEST_SIGNINUP:
        return Object.assign({},state,{
          isLoading:true
        }); 
      case FINISH_SIGNUP://注册        
      case FINISH_SIGNIN://登录
        return Object.assign({},state,{
          isLoading:false,
          isLogin:true,
        });
      case FINISH_SIGNOUT:
        return Object.assign({},state,{
          isLoading:false,          
          isLogin:false,
          errMsg:''
        });
      case ERROR_USER://出错后的状态
        return Object.assign({},state,{
          isLoading:false,
          isLogin:false,
          errMsg:action.message
        });
      default:
        return state;
    }
}

export default UserReducer;