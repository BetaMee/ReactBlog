import { createStore,applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../container/DevTools.js' // 引入DevTools调试组件

// 调用日志打印方法
const loggerMiddleware = createLogger();
// 创建一个中间件集合
const middleware = [thunkMiddleware, loggerMiddleware]


// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
)(createStore)


const configureStore=(preloadedState)=>{
  const store = finalCreateStore(rootReducer,preloadedState);
  return store;
}
export default configureStore;


