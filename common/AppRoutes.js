import React from 'react';
import {Route, Redirect} from 'react-router';

import Layout from '../client/Layout.jsx';//布局页面
import Signin from '../client/component/Signin.jsx';//登入，签到
import Signout from '../client/component/signput.jsx';//登出
import Signup from '../client/component/Signup.jsx';//注册
import Posts from '../client/component/Posts.jsx';//文章页
import Edit from '../client/component/Edit.jsx';//更新页
import Remove from '../client/component/Remove.jsx';//删除

import NotFoundPage from './NotFoundPage.jsx';//错误页


//注意这个重定向路由
const AppRoutes = (
  <Route path="/" component={Layout}>
    <Redirect from="/" to="/posts" />
    <Route path="signin" component={Signin}/>
    <Route path="signup" component={Signup}/>
    <Route path="signout" component={Signout}/>
    <Route path="posts" component={Posts}>
      <Route path=":postId" component={Post}/>
      <Route path=":postId/edit" component={Edit}/>  
      <Route path=":postId/remove" component={Remove}/>                
    </Route>    
    <Route path="*" component={NotFoundPage}/>    
  </Route>
);


export default AppRoutes;