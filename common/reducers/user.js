import {
  REQUEST_SIGNIN,
  REQUEST_SIGNINOUT,
  REQUEST_SIGNINUP,
  ERROR_USER,
  FINISH_SIGNIN,
  FINISH_SIGNOUT,
  FINISH_SIGNUP
} from '../action/user';


let initialState = {
  isRequesting:false,
  isLogin:false,
  userInfo:{}
}

export default userReducer=(state=initialState,action)=>{
    switch(action.type){
      case REQUEST_SIGNIN:
      case REQUEST_SIGNINOUT:
      case REQUEST_SIGNINUP:
        return Object.assign({},state,{
          isRequesting:true
        }); 
      case FINISH_SIGNUP://注册        
      case FINISH_SIGNIN://登录
        return Object.assign({},state,{
          isLogin:true,
          userInfo:action.userInfo
        });
      case FINISH_SIGNOUT:
        return Object.assign({},state,{
          isLogin:false,
          userInfo:{}
        });
    }
}