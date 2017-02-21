import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import Layout from './component/Layout.jsx';
import NotFoundPage from './component/page/NotFoundPage.jsx';
import Postspage from './container/Postspage.jsx';



//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
    <IndexRedirect from="/" to="/posts" />
    <Route path="posts" component={Postspage}/>   
    <Route path="*" component={NotFoundPage}/>    
  </Route>
);


export default AppRoutes;