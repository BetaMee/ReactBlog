/** 
 * FormRducer保存的是表单组件状态的
*/


import {
  //Login表单
  CHANGE_LOGIN_NAME,
  CHANGE_LOGIN_PW
} from '../action/FormAction.js'; 


const initialState={
  loginName:'',
  loginPw:''
};


const FormReducer = (state=initialState,action)=>{
  switch (action.type){
    case CHANGE_LOGIN_NAME:
      return Object.assign({},state,{
        loginName:action.loginName
      });
    case CHANGE_LOGIN_PW:
      return Object.assign({},state,{
        loginPw:action.loginPw
      });
    default:
      return state;
  }
}


export default FormReducer;