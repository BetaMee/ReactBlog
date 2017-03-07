import request from 'axios';


//引入外部action
import {ChangeLoginName,ChangeLoginPw} from './FormAction.js';
import {LoginOpenDialog} from './UIAction.js';

export const REQUEST_SIGNIN = 'REQUEST_SIGNIN';
export const REQUEST_SIGNINUP ='REQUEST_SIGNINUP';
export const REQUEST_SIGNINOUT = 'REQUEST_SIGNINOUT';
export const ERROR_USER='ERROR_USER';

export const FINISH_SIGNIN='FINISH_SIGNIN';
export const FINISH_SIGNUP ='FINISH_SIGNUP';
export const FINISH_SIGNOUT='FINISH_SIGNOUT';

/**
 * action辅助函数
 */
const RequestSignin=()=>{
  return {
    type:REQUEST_SIGNIN
  }
}

const RequestSignup=()=>{
  return {
    type:REQUEST_SIGNINUP
  }
}


const RequestSignout=()=>{
  return {
    type:REQUEST_SIGNINOUT
  }
}


//完成后的状态
const FinishSignin=()=>{//登录
  return {
    type: FINISH_SIGNIN,
  }
}

const FinishSignup=(loginStatus)=>{
  return {
    type: FINISH_SIGNUP,
    status:loginStatus
  }
}

const FinishSignout=(userInfo)=>{
  return {
    type: FINISH_SIGNOUT,
    userInfo  
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

/** 
 * 
*/
export const SendTokenToLogin=(token)=>{
  return (dispatch,getState)=>{
    dispatch(RequestSignin());
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
    dispatch(RequestSignin());
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

export const UserSignup=(username,password,repassword,gender)=>{//注册，表单数据
  return (dispatch,getState)=>{
    dispatch(requestSignup());//先表明正在请求

    let option = {
      method:'post',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&
            repassword=${encodeURIComponent(repassword)}&gender=${encodeURIComponent(gender)}`
    }

    return fetch('/api/signup',option)
            .then(userinfo=>dispatch(finishSignup(userinfo)))
            .catch(()=>dispatch(errorUserHandle()));
  }
}

export const UserSignout=(user)=>{//通过user来设置登出
  return (dispatch,getState) =>{
    dispatch(requestSignout());//先表明正在请求    
    return fetch(`/api/signout/`)
            .then((message)=>dispatch(finishSignout(message)))
            .catch(()=>dispatch(errorUserHandle()));
  }
}