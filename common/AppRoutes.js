import React from 'react';
import {Route, IndexRedirect,IndexRoute} from 'react-router';

import Layout from './component/Layout.jsx';
import NotFoundPage from './component/page/NotFoundPage.jsx';
import PostsContainer from './container/PostsContainer.jsx';
import IndexContainer from './container/IndexContainer.jsx';


//放在routes页面里，可以客户端和服务端共用，以免出现问题
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
      <IndexRoute component={IndexContainer} />
      <Route path="posts" component={PostsContainer}/>   
  </Route>
);


export default AppRoutes;