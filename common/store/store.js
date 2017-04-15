import { createStore,applyMiddleware,compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';//
import {browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
// 调用日志打印方法
const loggerMiddleware = createLogger();
//react-router-redux
const routermiddleware = routerMiddleware(browserHistory)
// 创建一个中间件集合
const middleware = [thunkMiddleware,routermiddleware, loggerMiddleware]

//***************************** */
const composeEnhancers = typeof window !== 'undefined' &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore=(preloadedState)=>{
  const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
  ));
  //开发环境下的store配置
  if(process.env.NODE_ENV == 'development' && module.hot) {
	  module.hot.accept('../reducers', () => { 
		  const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
	  });
  }
  return store;
}
export default configureStore;


