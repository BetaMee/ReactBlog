var crypto = require('crypto');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');



var UserModel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;


// POST /signin 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
  console.log(req.body);
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
        var token = jwt.sign({ user: user._id }, 'shhhhh');
        console.log(token);
        res.json({
          success:true,
          token:token
        });
      }else{
        res.json({
          success:false,
          message:"用户或密码错误"          
        });
      }
    })
    .catch(function(e){
        res.json({
          success:false,          
          message:"账号不存在"
        });
    });
});


//对token进行验证，配合前端看是否登陆成功
router.post('/verify',(req,res)=>{
  var token=req.body.token;
  jwt.verify(token,'shhhhh',(err,decoded)=>{
      if(err){
        res.send({
          success:false,
          message:"error token"
        });
      }else{
        res.send({
          success:true,
          message:"token is ok"
        });
      }
    });
});
module.exports = router;
