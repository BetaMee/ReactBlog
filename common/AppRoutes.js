import React from 'react';
import {Route, IndexRedirect,IndexRoute} from 'react-router';

import Layout from './component/Layout.jsx';
import NFContainer from './container/NFContainer.jsx';
import IndexContainer from './container/IndexContainer.jsx';
//post文章类型
import PostsLayout from './component/posts/PostsLayout.jsx';
import Posts from './container/PostsContainer.jsx';//post列表
import PostOne from './container/PostOneContainer.jsx';//单独一篇post文章
import PostCreate from './container/PostCreateContainer.jsx';//新建文章

//放在routes页面里，可以客户端和服务端共用，以免出现问题
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
      <IndexRoute component={IndexContainer} />
      <Route path="/posts" component={PostsLayout}>   
        <IndexRoute component={Posts}/>  
        <Route path="/posts/create" component={PostCreate}/>                                   
        <Route path="/posts/:postId" component={PostOne}/>      
      </Route>
      <Route path="*" component={NFContainer}/>            
  </Route>
);


export default AppRoutes;