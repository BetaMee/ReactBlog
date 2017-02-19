import React from 'react';
import {Route, Redirect} from 'react-router';

import Layout from './components/Layout.jsx';//布局页面
import Counterpage from './containers/Counterpage.jsx';
import Todopage from './containers/Todopage.jsx';

//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
    <Redirect from="/" to="/counter" />
    <Route path="counter" component={Counterpage}/>
    <Route path="todo" component={Todopage}/>     
  </Route>
);


export default AppRoutes;