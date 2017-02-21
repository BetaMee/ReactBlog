export const REQUEST_SIGNIN = 'REQUEST_SIGNIN';
export const REQUEST_SIGNINUP ='REQUEST_SIGNINUP';
export const REQUEST_SIGNINOUT = 'REQUEST_SIGNINOUT';
export const ERROR_USER='ERROR_USER';

export const FINISH_SIGNIN='FINISH_SIGNIN';
export const FINISH_SIGNUP ='FINISH_SIGNUP';
export const FINISH_SIGNOUT='FINISH_SIGNOUT';

function requestSignin(){
  return {
    type:REQUEST_SIGNIN
  }
}

function requestSignup(){
  return {
    type:REQUEST_SIGNINUP
  }
}


function requestSignout(){
  return {
    type:REQUEST_SIGNINOUT
  }
}


//完成后的状态
function finishSignin(userInfo){//登录
  return {
    type: FINISH_SIGNIN,
    userInfo    
  }
}

function finishSignup(userInfo){
  return {
    type: FINISH_SIGNUP,
    userInfo
  }
}

function finishSignout(userInfo){
  return {
    type: FINISH_SIGNOUT,
    userInfo  
  }
}

function errorUserHandle(){
  return {
    type: ERROR_USER
  }
}




export const UserSignin=(username,password)=>{//登录
  return (dispatch,getState)=>{
    dispatch(requestSignin());

    let option = {
      method:'post',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    }
    return fetch('/api/signin',option)
            .then(userinfo=>dispatch(finishSignin(userinfo)))
            .catch(()=>dispatch(errorUserHandle()));
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