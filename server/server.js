import path from 'path';
import express from 'express';
import config from 'config-lite';
import webpack from 'webpack';
import ApiRoutes from './api_routes';//服务端api路由
import winston from 'winston';
import expressWinston from 'express-winston';
import session from 'express-session';
import ConnectMongo from 'connect-mongo';
var MongoStore =ConnectMongo(session);
import getInitialData from './lib/helper';
//react服务端渲染配置
import React from 'react';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import AppRoutes from '../common/AppRoutes';//前端路由
import renderFullPage from './lib/view';
import configureStore from '../common/store/store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var app = express();
// 设置静态文件目录
if(process.env.NODE_ENV === 'development') {
	const webpackconfig = require('../webpack.config.dev');
	const compiler = webpack(webpackconfig);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: webpackconfig.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(express.static(path.resolve(__dirname,'../client')));//与webpack.dev中一致
	app.use(express.static(path.join(__dirname, 'public')));  
} else if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'public')));
}

// session 中间件
app.use(session({
  name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({// 将 session 存储到 mongodb
    url: config.mongodb// mongodb 地址
  }),
  resave: false, //是否每次都重新保存会话，建议false
  saveUninitialized : false // 是否自动保存未初始化的会话，建议false
}));

// 处理表单及文件上传的中间件
// app.use(require('express-formidable')({
//   uploadDir: path.join(__dirname, 'server/public/img'),// 上传文件目录
//   keepExtensions: true// 保留后缀
// }));


// 正常请求的日志
// app.use(expressWinston.logger({
//   transports: [
//     new (winston.transports.Console)({
//       json: true,
//       colorize: true
//     }),
//     new winston.transports.File({
//       filename: './logs/success.log'
//     })
//   ]
// }));


// RESTful API路由
ApiRoutes(app);


app.get('*',(req, res)=>{

  match( {routes:AppRoutes, location:req.url}, (err, redirectLocation, renderProps)=>{
    
    if(err) {
      res.status(500).send(err.message);
    }else if(redirectLocation) {
      console.log("redirection");
      res.redirect(302,redirectLocation.pathname+redirectLocation.search);
    }else if(renderProps) {
      // 设置Material Design server rendering的配置
      global.navigator = {
        userAgent: req.headers['user-agent']
      };
      const muiTheme = getMuiTheme({userAgent: req.headers['user-agent']});

      let initialState = getInitialData();
      const store = configureStore(initialState);
      let marked = renderToString(
        <MuiThemeProvider muiTheme={muiTheme}>
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        </MuiThemeProvider>
      );
      const initHtml = renderFullPage(marked,store.getState(),process.env.NODE_ENV);
      res.status(200).end(initHtml);
    }else{
      res.status(404).end('404 not found');
    }
  });
});





// 错误请求的日志
// app.use(expressWinston.errorLogger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     }),
//     new winston.transports.File({
//       filename: 'logs/error.log'
//     })
//   ]
// }));
  app.listen(config.port, function () {
    console.log(`app listening on port ${config.port}`);
  });

// if (module.parent) {
//   module.exports = app;
// } else {
//   // 监听端口，启动程序
//   app.listen(config.port, function () {
//     console.log(`app listening on port ${config.port}`);
//   });
// }
