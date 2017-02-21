import React from 'react';
import {Route, IndexRedirect,IndexRoute} from 'react-router';

import Layout from './component/Layout.jsx';
import NotFoundPage from './component/page/NotFoundPage.jsx';
// import Postspage from './container/Postspage.jsx';
import Indexpage from './component/page/Indexpage.jsx';
import Posts from './component/posts/Posts.jsx';

//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Indexpage} />
    <Route path="posts" component={Posts}/>   
    <Route path="*" component={NotFoundPage}/>    
  </Route>
);


export default AppRoutes;