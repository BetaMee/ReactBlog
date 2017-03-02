module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    // if (!req.session.user) {
    //   req.flash('error', '未登录'); 
    //   return res.redirect('/signin');
    // }
    //通过检查header头部的所携带的Token信息，这里的交互都是通过axios或者fetch来的
    console.log("checkLogin");
    console.log(req.header);
    next();
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    // if (req.session.user) {
    //   req.flash('error', '已登录'); 
    //   return res.redirect('back');//返回之前的页面
    // }
    console.log("checkNotLogin");
    console.log(req.header);
    next();
  }
};