import React,{Component} from  'react';
import ReactDOM from 'react-dom';
//路由管理
import {Router,browserHistory} from 'react-router';
import AppRoutes from '../common/AppRoutes.js';

//状态管理
import {Provider} from 'react-redux';
import configureStore from '../common/store/store.js';
import rootReducer from '../common/reducers/index.js';
//引入外部样式库
// import './global-css/materialize.min.css';
//MD UI库
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';//使用react context来补足server rendering 
const muiTheme = getMuiTheme({userAgent: navigator.userAgent}); 


// `__INITIAL_STATE__` 来自服务器端渲染
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
// 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件
import { syncHistoryWithStore } from 'react-router-redux' 
// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(browserHistory, store)





import DevTools from '../common/container/DevTools'  // 引入Redux调试工具DevTools




const Root = (props) => {
  // console.log(` window.__INITIAL_STATE__:${ initialState}`);
  return (
  
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <div>
            {/* 渲染根路由 */}
            <Router history={history}>
                {AppRoutes}
            </Router>
            {/* 渲染调试组件 */}
            <DevTools />
        </div>    
      </Provider>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Root/>,document.getElementById('root'));


if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('../common/reducers', () => {
		store.replaceReducer(require('../common/reducers').default);
	});
}