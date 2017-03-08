import request from 'axios';


//引入外部action
import {ChangeLoginName,ChangeLoginPw} from './FormAction.js';
import {LoginOpenDialog} from './UIAction.js';

export const REQUEST_SIGN = 'REQUEST_SIGN';//请求状态
export const ERROR_USER='ERROR_USER';

export const FINISH_SIGNIN='FINISH_SIGNIN';
export const FINISH_SIGNOUT='FINISH_SIGNOUT';

/**
 * action辅助函数
 */
const RequestSign=()=>{//请求状态
  return {
    type:REQUEST_SIGN
  }
}



//完成后的状态
const FinishSignin=()=>{//登录
  return {
    type: FINISH_SIGNIN,
  }
}

const FinishSignOut=()=>{
  return {
    type:FINISH_SIGNOUT
  }
}

const ErrorUserHandle=(errMsg)=>{
  return {
    type: ERROR_USER,
    errMsg:errMsg
  }
}

/** 
 * 设置localStorage
*/
const SetTokenStorage=(token)=>{
  localStorage.setItem('authToken',token);
}

const ClearLocalToken=()=>{
  localStorage.clear();
}

/** 
 * 
*/
export const SendTokenToLogin=(token)=>{//当已经登陆后去验证
  return (dispatch,getState)=>{
    dispatch(RequestSign());
    return request.post('/api/signin/verify',{token:token},{
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    .then(res=>{
      let resStatus=res.data;
      if(!resStatus.success){
        dispatch(ErrorUserHandle(resStatus.message));
      }else{
        dispatch(FinishSignin());
      }
    })
    .catch(err=>{
      dispatch(ErrorUserHandle(err.message));
    });
  }
}

export const GetUserLogin=(username,password)=>{//登录
  return (dispatch,getState)=>{
    dispatch(RequestSign());
    var params={
      name:username,
      password:password
    };
    return request.post('/api/signin',params,{
              headers:{
                    'Content-Type': 'application/json;charset=utf-8'
              }
            })
            .then(res=>{
              let loginStatus = res.data;
              if(!loginStatus.success){//看返回来的标志
                dispatch(ErrorUserHandle(loginStatus.message));
              }else{
                dispatch(FinishSignin());//只要改变这个状态就好
                dispatch(ChangeLoginName(''));//清空用户状态
                dispatch(ChangeLoginPw(''));
                dispatch(LoginOpenDialog());
                SetTokenStorage(loginStatus.token);
              }
            })
            .catch(e=>{
              dispatch(ErrorUserHandle(e.message));
            });
  }
}

export const GetUserLogOut=()=>{//只需改变状态就行
  return (dispatch,getState)=>{
    dispatch(ClearLocalToken());//清空Token
    dispatch();
  }
}



