import React from 'react';
import {Route, Redirect} from 'react-router';




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