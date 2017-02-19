import { combineReducers }from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';


export default rootReducer=(state={},action)=>{
  return {
    counterReducer:counterReducer(state.count, action),
    todoReducer: todoReducer(state.todo, action)
  }
}