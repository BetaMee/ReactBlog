import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';//应用一下中间件


const configureStore=(initialState)=>{
  const store =createStore(rootReducer,initialState,applyMiddleware(thunk));
  return store;
}

export default configureStore;