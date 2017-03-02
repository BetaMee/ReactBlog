var crypto = require('crypto');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');



var UserModel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;


// POST /signin 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  //以下为验证用户账号，从服务器中取出进行对比
  UserModel.getUserByName(name)
    .then(function (user) {
      // console.log(user);
      const secret = "express";
      var HashPassword = crypto
                   .createHmac('sha256', "express")
                   .update(password)
                   .digest('hex');
      if(HashPassword===user.password){
        console.log("密码匹配");
        //创建Token，传送给客户端
        var token = jwt.sign({ name: user.name }, 'shhhhh');
        console.log(token);
        res.json({
          login:true,
          token:token
        });
      }else{
        res.json({
          message:"用户或密码错误",
          login:false
        });
      }
    })
    .catch(function(e){
        res.json({
          message:"账号不存在",
          login:false
        });
    });
});

module.exports = router;
