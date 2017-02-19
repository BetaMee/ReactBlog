import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';


export default configureStore=(initialState)=>{
  const store =createStore(rootReducer,initialState);
  return store;
}