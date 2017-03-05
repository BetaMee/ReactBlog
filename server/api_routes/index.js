module.exports = function (app) {

  app.use('/api/signup', require('./signup'));//注册
  app.use('/api/signin', require('./signin'));//登录
  // app.use('/api/signout', require('./signout'));
  app.use('/api/posts', require('./posts'));
};
