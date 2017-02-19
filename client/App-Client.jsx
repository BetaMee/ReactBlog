import React,{Component} from  'react';
import ReactDOM from 'react-dom';
//路由管理
import {Router,browserHistory} from 'react-router';
import AppRoutes from '../common/AppRoutes.js';

//状态管理
import {Provider} from 'react-redux';
import configureStore from '../common/store/index.js';


// `__INITIAL_STATE__` 来自服务器端渲染
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const Root = (props) => {
  return (
    <div>
      <Provider store={store}>
        <Router history={browserHistory}>
        {AppRoutes}
        </Router>
      </Provider>
    </div>
  );
}


ReactDOM.render(<Root/>,document.getElementById('root'));