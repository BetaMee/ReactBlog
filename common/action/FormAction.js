
//Login登陆表单
export const CHANGE_LOGIN_NAME = "CHANGE_LOGIN_NAME";
export const CHANGE_LOGIN_PW = "CHANGE_LOGIN_PW";

export const ChangeLoginName=(name)=>{
  return {
    type:CHANGE_LOGIN_NAME,
    loginName:name
  }
}

export const ChangeLoginPw=(pw)=>{
  return {
    type:CHANGE_LOGIN_PW,
    loginPw:pw
  }
}


