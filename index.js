var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite');
var NodeRoutes = require('./server/noderoutes');
var pkg = require('./package');
var winston = require('winston');
var expressWinston = require('express-winston');



//react服务端渲染配置
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';
import AppRoutes from './common/AppRoutes';
import renderFullPage from './server/lib/viewpage';

import configureStore from './common/store/index';
import  {Provider} from 'react-redux';
var app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, './server/public')));
// session 中间件
// app.use(session({
//   name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
//   secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
//   cookie: {
//     maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
//   },
//   store: new MongoStore({// 将 session 存储到 mongodb
//     url: config.mongodb// mongodb 地址
//   })
// }));
// flash 中间价，用来显示通知
app.use(flash());
// 处理表单及文件上传的中间件
app.use(require('express-formidable')({
  uploadDir: path.join(__dirname, 'public/img'),// 上传文件目录
  keepExtensions: true// 保留后缀
}));

// 设置模板全局常量
app.locals.blog = {
  title: pkg.name,
  description: pkg.description
};


// // 正常请求的日志
// app.use(expressWinston.logger({
//   transports: [
//     new (winston.transports.Console)({
//       json: true,
//       colorize: true
//     }),
//     new winston.transports.File({
//       filename: 'logs/success.log'
//     })
//   ]
// }));



app.use((req, res)=>{

  match( {AppRoutes, location:req.url}, (err, redirectLocation, renderProps)=>{
    
    console.log(err);
    console.log(redirectLocation);
    console.log(renderProps);

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

      const initHtml= renderFullPage(marked,initialState);      

      res.status(200).end(initHtml);            
    }else {
      res.status(404).end('404 npt found');
    }
  });
});





// 错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/error.log'
    })
  ]
}));

// error page
app.use(function (err, req, res, next) {
  res.render('error', {
    error: err
  });
});

if (module.parent) {
  module.exports = app;
} else {
  // 监听端口，启动程序
  app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`);
  });
}
