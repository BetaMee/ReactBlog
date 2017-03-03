var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var express = require('express');
var router = express.Router();

var UserEntity = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signup 注册页
router.get('/', checkNotLogin, function(req, res, next) {
  res.render('signup');
});

// POST /signup 用户注册
router.post('/', checkNotLogin, function(req, res, next) {
  //先判断用户是否存在，如果不存在则创建，否则返回已创建标志
  // if(){

  // }
  
  var name = req.body.name;
  var gender = req.body.gender;
  var bio = req.body.bio;
  var avatar = "/uploadImg/avatar.jpg";
  var sign=req.body.sign;
  var password = req.body.password;
  var repassword = req.body.repassword;

  // 校验参数
  // try {
  //   if (!(name.length >= 1 && name.length <= 10)) {
  //     throw new Error('名字请限制在 1-10 个字符');
  //   }
  //   if (['m', 'f', 'x'].indexOf(gender) === -1) {
  //     throw new Error('性别只能是 m、f 或 x');
  //   }
  //   if (!(bio.length >= 1 && bio.length <= 30)) {
  //     throw new Error('个人简介请限制在 1-30 个字符');
  //   }
  //   if (!req.files.avatar.name) {
  //     throw new Error('缺少头像');
  //   }
  //   if (password.length < 6) {
  //     throw new Error('密码至少 6 个字符');
  //   }
  //   if (password !== repassword) {
  //     throw new Error('两次输入密码不一致');
  //   }
  // } catch (e) {
  //   // 注册失败，异步删除上传的头像
  //   fs.unlink(req.files.avatar.path);
  //   req.flash('error', e.message);
  //   return res.redirect('/signup');
  // }

  // 明文密码加密
  const secret = "express";
  var HashPassword = crypto.createHmac('sha256', secret)
                   .update(password)
                   .digest('hex');

  // 待写入数据库的用户信息
  var user = {
    name: name,
    password: HashPassword,
    gender: gender,
    bio: bio,
    avatar: avatar,
    sign:sign,
  };
  // 用户信息写入数据库
  UserEntity.create(user)
    .then(function (result) {
      console.log("创建完用户");
      console.log(result);
      //交由signin路由接管
      //POST重定向必须是307
      res.redirect(307,'/api/signin');
    })
    .catch(function (e) {
      console.log(e);
    });
});

module.exports = router;
