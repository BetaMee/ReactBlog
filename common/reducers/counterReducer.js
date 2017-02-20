import {ADD_COUNT,ASYNC_RECEIVE_ADD,ASYNC_REQUEST_ADD} from '../action/counteraction';


let initialState={
  num:0,
  isFetching:false,
  data:{}
}

const counterReducer=(state=initialState, action)=>{
  switch(action.type) {
    case ADD_COUNT:
      return Object.assign({},state,{
        num:state.num+1
      });
    case ASYNC_REQUEST_ADD://请求
      return Object.assign({},state,{
        isFetching:true
      });
    case ASYNC_RECEIVE_ADD://响应
      return Object.assign({},state,{
        data:action.data,
        isFetching:false
      });
    default:
      return state;
  }
}

export default counterReducer;