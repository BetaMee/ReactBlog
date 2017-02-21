import React,{Component} from  'react';
import ReactDOM from 'react-dom';
//路由管理
import {Router,browserHistory} from 'react-router';
import AppRoutes from '../common/AppRoutes.js';

//状态管理
// import {Provider} from 'react-redux';
// import configureStore from '../common/store/store.js';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';//使用react context来补足server rendering 
// const muiTheme = getMuiTheme({userAgent: navigator.userAgent}); 

// `__INITIAL_STATE__` 来自服务器端渲染
// const initialState = window.__INITIAL_STATE__;
// const store = configureStore(initialState);
// const Root = (props) => {
//   // console.log(` window.__INITIAL_STATE__:${ initialState}`);
//   return (
//     <MuiThemeProvider muiTheme={muiTheme}>
//       <Provider store={store}>
//         <Router history={browserHistory}>
//             {AppRoutes}
//         </Router>
//       </Provider>
//     </MuiThemeProvider>
//   );
// }

const Root = () => {
  // console.log(` window.__INITIAL_STATE__:${ initialState}`);
  return (
    <div>
        <Router history={browserHistory}>
            {AppRoutes}
        </Router>
    </div>
  );
}


ReactDOM.render(<Root/>,document.getElementById('root'));