import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from './components/Layout.jsx';//布局页面
import Counterpage from './containers/Counterpage.jsx';
import Todopage from './containers/Todopage.jsx';
import Indexpage from './components/Indexpage.jsx';
 

//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Indexpage} />
    <Route path="counter" component={Counterpage}/>
    <Route path="todo" component={Todopage}/>     
  </Route>
);


export default AppRoutes;