var jwt=require('jsonwebtoken');

module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    //通过检查header头部的所携带的Token信息，这里的交互都是通过axios或者fetch来的
    var token=req.get("Authorization");
    jwt.verify(token,'shhhhh',(err,decoded)=>{
      if(err){
        res.send({
          success:false,
          message:"user have not been login"
        });
      }else{
        next();
      }
    });
   
  },

  checkNotLogin: function checkNotLogin(req, res, next) {  
    if(req.get("Authorization")===undefined){//检测到没有验证标志
      //表明是没有登录的
      next();
    }else{
      res.send({
        success:false,
        message:"user has been login"
      });
    }
  }
};