import { combineReducers }from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';


// const rootReducer=(state={},action)=>{
//   return {
//     count:counterReducer(state.count, action),
//     todo: todoReducer(state.todo, action)
//   }
// }
const rootReducer =combineReducers({//这里的count和todo一定要和状态属性一致
  count:counterReducer,
  todo:todoReducer
});


export default rootReducer;