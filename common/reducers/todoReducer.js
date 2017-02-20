import {ADD_TODO} from '../action/todoaction';

const todoReducer=(state=[],action)=>{
  switch(action.type){
    case ADD_TODO:
      return state.push(action.todo);
    default:
      return state;
  }
}

export default todoReducer;