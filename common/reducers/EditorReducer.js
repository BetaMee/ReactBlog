import {
  //Login表单
  GET_TITLE_INPUT,
  GET_CONTENT_INPUT
} from '../action/EditorAction.js'; 


const initialState={
  title:'',
  content:''
};


const EditorReducer = (state=initialState,action)=>{
  switch (action.type){
    case GET_TITLE_INPUT:
      return Object.assign({},state,{
        title:action.title
      });
    case GET_CONTENT_INPUT:
      return Object.assign({},state,{
        content:action.content
      });
    default:
      return state;
  }
}


export default EditorReducer;