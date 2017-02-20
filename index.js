import config from 'config-lite';
import express from 'express';
import path from 'path';
import pkg from './package.json';

import ApiRoutes from './server/apiroutes';

//react服务端渲染配置
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import AppRoutes from './common/AppRoutes';
import renderFullPage from './server/lib/viewpage';

import configureStore from './common/store/index';
import  {Provider} from 'react-redux';
var app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'server/public')));

//RESTful api路由，必须置于前
ApiRoutes(app);
//处理react路由
app.get("*",(req, res)=>{

  match( {routes:AppRoutes, location:req.url}, (err, redirectLocation, renderProps)=>{
  
    if(err) {

      res.status(500).send(err.message);

    }else if(redirectLocation) {

      res.redirect(302, redirectLocation.pathname+redirectLocation.search);      

    }else if(renderProps) {
      var initialState = {
        count:1,
        todo:['haha']
      };
      
      const store = configureStore(initialState);

      let marked = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>          
        </Provider>
      );

      const initHtml= renderFullPage(marked,store.getState());      

      res.status(200).end(initHtml);            
    }else {
      res.status(404).end('404 npt found');
    }
  });
});


// error page
// app.use(function (err, req, res, next) {
//   res.render('error', {
//     error: err
//   });
// });

if (module.parent) {
  module.exports = app;
} else {
  // 监听端口，启动程序
  app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`);
  });
}
