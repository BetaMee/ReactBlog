import React from 'react';
import {Route, IndexRedirect,IndexRoute} from 'react-router';

import Layout from './component/Layout.jsx';
import NotFoundPage from './component/page/NotFoundPage.jsx';
import PostsContainer from './container/PostsContainer.jsx';
import IndexPage from './component/page/IndexPage.jsx';

//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
      <IndexRoute component={IndexPage} />
      <Route path="posts" component={PostsContainer}/>   
  </Route>
);


export default AppRoutes;