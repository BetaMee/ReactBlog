var jwt=require('jsonwebtoken');

module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    //通过检查header头部的所携带的Token信息，这里的交互都是通过axios或者fetch来的
    console.log("checkLogin");
    // console.log(req.body);
    // console.log(req.get("Authorization"));
    var token=req.get("Authorization");
    jwt.verify(token,'shhhhh',(err,decoded)=>{
      if(err){
        res.send({
          message:"error checkout"
        });
      }else{
        console.log(decoded);
        next();
      }
    });
   
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    console.log("checkNotLogin");    
    if(req.get("Authorization")===undefined){//检测到没有验证标志
      //表明是没有登录的
      next();
    }else{
      res.send({
        message:"user has been login"
      });
    }
  }
};